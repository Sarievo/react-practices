import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((it) => it.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((it) => (
        <ChartBar
          key={it.label}
          value={it.value}
          maxValue={totalMaximum}
          label={it.label}
        />
      ))}
    </div>
  );
};

export default Chart;
