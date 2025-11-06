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
  if (!data?.length)
    return (
      <div className="flex items-center justify-center h-[400px] text-slate-400">
        <p className="text-lg">No data available</p>
      </div>
    );
  const colors = [
    "#6366f1",
    "#8b5cf6",
    "#06b6d4",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#ec4899",
    "#14b8a6",
  ];

  const traces: Plotly.Data[] = [];

  if (type === "pie") {
    const labels = data.map((row) => row[x] as string);
    const values = data.map((row) => Number(row[y]) as Datum);
    traces.push({
      type: "pie",
      labels,
      values,
      textinfo: "label+percent",
      textfont: {
        size: 14,
        color: "#ffffff",
        family: "Inter, system-ui, sans-serif",
      },
      marker: {
        colors: colors,
        line: {
          color: "#1e293b",
          width: 2,
        },
      },
      hole: 0.4,
      hovertemplate:
        "<b>%{label}</b><br>Value: %{value}<br>Percent: %{percent}<extra></extra>",
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
        marker: {
          color: colors[i % colors.length],
          line: {
            color: "#1e293b",
            width: 1,
          },
          opacity: 0.9,
        },
        line: {
          color: colors[i % colors.length],
          width: 3,
          shape: "spline",
        },
        hovertemplate: `<b>${g}</b><br>${x}: %{x}<br>${y}: %{y}<extra></extra>`,
      });
    });
  } else {
    traces.push({
      x: data.map((row) => row[x] as Datum),
      y: data.map((row) => row[y] as Datum),
      type: type as PlotType,
      name: y,
      marker: {
        color: colors[0],
        line: {
          color: "#1e293b",
          width: 1,
        },
        opacity: 0.9,
      },
      line: {
        color: colors[0],
        width: 3,
        shape: "spline",
      },
      hovertemplate: `${x}: %{x}<br>${y}: %{y}<extra></extra>`,
    });
  }

  return (
    <div className="w-full h-full p-4 rounded-xl bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-sm border border-slate-700/30">
      <Plot
        data={traces}
        layout={{
          title: {
            text: `${type.charAt(0).toUpperCase() + type.slice(1)} Chart: ${y}${
              group ? ` by ${group}` : ""
            }`,
            font: {
              size: 20,
              color: "#e2e8f0",
              family: "Inter, system-ui, sans-serif",
              weight: 600,
            },
            x: 0.5,
            xanchor: "center",
          },
          xaxis: {
            title: {
              text: x,
              font: {
                size: 14,
                color: "#94a3b8",
                family: "Inter, system-ui, sans-serif",
                weight: 600,
              },
            },
            gridcolor: "#334155",
            gridwidth: 1,
            tickfont: {
              size: 12,
              color: "#cbd5e1",
              family: "Inter, system-ui, sans-serif",
            },
            linecolor: "#475569",
            linewidth: 2,
            zeroline: false,
          },
          yaxis: {
            title: {
              text: y,
              font: {
                size: 14,
                color: "#94a3b8",
                family: "Inter, system-ui, sans-serif",
                weight: 600,
              },
            },
            gridcolor: "#334155",
            gridwidth: 1,
            tickfont: {
              size: 12,
              color: "#cbd5e1",
              family: "Inter, system-ui, sans-serif",
            },
            linecolor: "#475569",
            linewidth: 2,
            zeroline: false,
          },
          legend: {
            orientation: "h",
            x: 0.5,
            xanchor: "center",
            y: -0.15,
            yanchor: "top",
            bgcolor: "rgba(15, 23, 42, 0.8)",
            bordercolor: "#475569",
            borderwidth: 1,
            font: {
              size: 12,
              color: "#e2e8f0",
              family: "Inter, system-ui, sans-serif",
            },
          },
          margin: { t: 80, b: 100, l: 80, r: 40 },
          paper_bgcolor: "rgba(0,0,0,0)",
          plot_bgcolor: "rgba(15, 23, 42, 0.4)",
          hovermode: "closest",
          hoverlabel: {
            bgcolor: "#1e293b",
            bordercolor: "#6366f1",
            font: {
              size: 13,
              color: "#ffffff",
              family: "Inter, system-ui, sans-serif",
            },
          },
          showlegend: true,
          autosize: true,
        }}
        style={{ width: "100%", height: "500px" }}
        config={{
          responsive: true,
          displayModeBar: true,
          displaylogo: false,
          modeBarButtonsToRemove: ["lasso2d", "select2d"],
          toImageButtonOptions: {
            format: "png",
            filename: `chart_${type}_${Date.now()}`,
            height: 1080,
            width: 1920,
            scale: 2,
          },
        }}
        useResizeHandler={true}
      />
    </div>
  );
}
