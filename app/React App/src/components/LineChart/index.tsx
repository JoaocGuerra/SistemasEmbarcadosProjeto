import { useMemo } from "react";
import { Chart } from "react-google-charts";

interface LineChartProps {
  titleChart: string;
  label: string;
  data: number[];
}

export function LineChart(props: LineChartProps) {
  const options = {
    title: props.titleChart,
    curveType: "function",
    legend: { position: "bottom" },
  };

  const dataChart = useMemo(() => {
    const data: any[] = [["Leituras", props.label]];
    props.data.forEach((value: number) => {
      data.push(["", value]);
    });

    return data;
  }, [props.data, props.label]);

  return (
    dataChart && (
      <Chart
        chartType="AreaChart"
        width="100%"
        height="300px"
        data={dataChart}
        options={options}
      />
    )
  );
}
