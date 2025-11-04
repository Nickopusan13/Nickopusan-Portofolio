"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { financePreview, financeChart } from "@/utils/api";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { useDropzone } from "react-dropzone";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import toast from "react-hot-toast";
import ToasterProvider from "@/components/Toaster";
import type { PreviewData } from "@/utils/api";
import { ImUpload2 } from "react-icons/im";
import AppDialog from "@/components/AppDialog";
import { DialogTitle } from "@headlessui/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";
import { FaChartSimple } from "react-icons/fa6";
import FinanceChart from "./FinanceChart";
import { PlotType } from "plotly.js";
import dynamic from "next/dynamic";

const DynamicPlotlyChart = dynamic(() => import("./DynamicChart"), {
  ssr: false,
});

const plotlyChartMap: Record<string, PlotType> = {
  scatterchart: "scatter",
  barchart: "bar",
  piechart: "pie",
  boxchart: "box",
  histogram: "histogram",
  violin: "violin",
};

function parseChartSuggestion(suggestion: string): {
  chartType: PlotType;
  reason: string;
} {
  const lines = suggestion.split("\n");
  const chartTypeLine = lines.find((line) => line.startsWith("ChartType:"));
  const reasonLine = lines.find((line) => line.startsWith("Reason:"));
  const rawType = chartTypeLine
    ? chartTypeLine.split(":")[1].trim().toLowerCase().replace(/\s/g, "")
    : "scatter";
  const chartType = plotlyChartMap[rawType] || "scatter";
  const reason = reasonLine ? reasonLine.split(":")[1].trim() : "";
  return { chartType, reason };
}

export default function UploadCsv() {
  const [chartResult, setChartResult] = useState<{
    data: PreviewData["preview"];
    chart_suggestion: string;
  } | null>(null);
  const { chartType, reason } = parseChartSuggestion(
    chartResult?.chart_suggestion || ""
  );
  console.log(chartType);
  console.log(reason);
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [group, setGroup] = useState("");
  const axisOptions = [
    {
      key: "x",
      label: "X Axis",
      placeholder: "Select column",
      value: x,
      setValue: setX,
    },
    {
      key: "y",
      label: "Y Axis",
      placeholder: "Select column",
      value: y,
      setValue: setY,
    },
    {
      key: "group",
      label: "Group By",
      placeholder: "Select column (optional)",
      value: group,
      setValue: setGroup,
    },
  ];
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<PreviewData | null>(null);
  const [openCard, setOpenCard] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const selectedValues = [x, y, group].filter(Boolean);
  const onDrop = useCallback((acceptFiles: File[]) => {
    if (acceptFiles.length > 0) {
      setFile(acceptFiles[0]);
      console.log("File selcted:", acceptFiles[0]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "text/csv": [".csv"] },
    multiple: false,
    maxSize: 50 * 1024 * 1024,
  });
  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const data = await financePreview(file);
      setPreview(data);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something Wrong";
      toast.error(message, { duration: 5000 });
    } finally {
      setLoading(false);
    }
  };
  const handleAnalyze = async () => {
    if (!file || !x || !y) {
      toast.error("Pleae select a file, X and Y columns");
      return;
    }
    setLoading(true);
    try {
      const result = await financeChart(file, x, y, group || undefined);
      setChartResult(result);
      toast.success("Chart analysis complete!");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      toast.error(message, { duration: 5000 });
    } finally {
      setLoading(false);
      setOpenCard(false);
    }
  };
  return (
    <>
      <Card className="w-full divide-y divide-white/5 rounded-xl bg-zinc-800 text-white">
        <ToasterProvider />
        <CardHeader className="text-2xl font-bold">
          <CardTitle>Upload CSV File</CardTitle>
        </CardHeader>
        <CardContent className="px-10 py-6">
          <CardDescription className="text-white text-sm text-center">
            {file
              ? `Selected file: ${file.name}`
              : "Drag & drop CSV file here, or click to browse (max. 50MB)"}
          </CardDescription>
          <div
            {...getRootProps()}
            className={`mt-4 p-6 border-2 border-dashed rounded-lg cursor-pointer text-center ${
              isDragActive ? "border-blue-400 bg-zinc-700" : "border-white/40"
            }`}
          >
            <input {...getInputProps()} />
            <p className="text-white">
              {isDragActive
                ? "Drop the file here..."
                : "Drag & drop, or click to select"}
            </p>
          </div>
          <CardAction className="mt-4 w-full flex items-center justify-center gap-5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-zinc-600 px-4 py-2 rounded text-white cursor-pointer"
              onClick={handleUpload}
              disabled={!file || loading}
            >
              {loading ? "Loading..." : "See Preview"}
            </motion.button>
            {preview && (
              <motion.button
                onClick={() => setOpenCard(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 px-4 py-2 rounded text-white cursor-pointer"
              >
                Analyze & Upload
              </motion.button>
            )}
          </CardAction>
          <div className="w-full h-90 overflow-y-auto overflow-x-hidden scrollbar-none mt-7">
            {preview ? (
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    {preview.columns.map((col, idx) => (
                      <TableHead key={idx} className="text-white">
                        {col}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {preview.preview.map((row, idx) => (
                    <TableRow key={idx} className="hover:bg-transparent">
                      {preview.columns.map((col, idx) => (
                        <TableCell key={idx} className="text-white opacity-60">
                          {row[col]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="flex items-center justify-center h-full">
                <ImUpload2 className="text-9xl animate-bounce text-black" />
              </div>
            )}
          </div>
        </CardContent>
        <AnimatePresence>
          {openCard && (
            <AppDialog open={true} onClose={() => setOpenCard(false)}>
              <DialogTitle className="text-center">
                Please Select the x, y and group value
              </DialogTitle>
              <div className="flex flex-col gap-4 py-10">
                {axisOptions.map((axis) => (
                  <div
                    key={axis.key}
                    className="flex items-center justify-between"
                  >
                    <span className="font-medium">{axis.label}:</span>
                    <Select
                      value={axis.value}
                      onValueChange={(val) => axis.setValue(val)}
                    >
                      <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder={axis.placeholder} />
                      </SelectTrigger>
                      <SelectContent
                        className="bg-zinc-800 text-white"
                        side="bottom"
                      >
                        <SelectGroup>
                          <SelectLabel className="text-center mb-2">
                            {axis.label}
                          </SelectLabel>
                          {preview?.columns
                            ?.filter(
                              (col) =>
                                !selectedValues.includes(col) ||
                                col === axis.value
                            )
                            .map((col, idx) => (
                              <SelectItem
                                className="focus:bg-zinc-600"
                                key={idx}
                                value={col}
                              >
                                {col}
                              </SelectItem>
                            ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                ))}
              </div>
              <div className="w-full flex items-center justify-center">
                <motion.button
                  onClick={handleAnalyze}
                  disabled={loading}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="py-2 px-5 bg-zinc-600 rounded-lg cursor-pointer"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2 ">
                      Please Wait..
                      <FaChartSimple className="animate-caret-blink" />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2 ">
                      Start Analyzing <FaChartSimple />
                    </div>
                  )}
                </motion.button>
              </div>
            </AppDialog>
          )}
        </AnimatePresence>
      </Card>
      <FinanceChart>
        {chartResult && (
          <>
            <DynamicPlotlyChart
              data={chartResult.data}
              x={x}
              y={y}
              group={group || undefined}
              type={chartType}
            />
          </>
        )}
      </FinanceChart>
    </>
  );
}
