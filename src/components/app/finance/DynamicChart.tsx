import Plot from "react-plotly.js";
import { Datum, PlotType } from "plotly.js";

interface PlotlyChartProps {
  data: Record<string, unknown>[];
  x: string;
  y: string;
  group?: string;
  type: PlotType;
}

export default function DynamicPlotlyChart({
  data,
  x,
  y,
  group,
  type,
}: PlotlyChartProps) {
  if (!data?.length) return <p>No data available</p>;
  const colors = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"];
  const traces: Plotly.Data[] = [];

  if (type === "pie") {
    const labels = data.map((row) => row[x] as string);
    const values = data.map((row) => Number(row[y]) as Datum);
    traces.push({
      type: "pie",
      labels,
      values,
      textinfo: "label+percent",
    });
  } else if (group) {
    const groups = Array.from(new Set(data.map((row) => row[group] as string)));
    groups.forEach((g, i) => {
      const filtered = data.filter((row) => row[group] === g);
      traces.push({
        x: filtered.map((row) => row[x] as Datum),
        y: filtered.map((row) => row[y] as Datum),
        name: g,
        type: type as PlotType,
        marker: { color: colors[i % colors.length] },
      });
    });
  } else {
    traces.push({
      x: data.map((row) => row[x] as Datum),
      y: data.map((row) => row[y] as Datum),
      type: type as PlotType,
      name: y,
      marker: { color: colors[0] },
    });
  }
  return (
    <Plot
      data={traces}
      layout={{
        title: {
          text: `${type.toUpperCase()} Chart of ${y}${
            group ? ` grouped by ${group}` : ""
          }`,
        },
        xaxis: { title: { text: x } },
        yaxis: { title: { text: y } },
        legend: { orientation: "h" },
        margin: { t: 50, b: 50 },
      }}
      style={{ width: "100%", height: "400px" }}
      config={{ responsive: true }}
    />
  );
}
