import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

export default function GaugeChart({ value, fill }) {
  return (
    <Gauge
      width={70}
      height={70}
      value={value}
      cornerRadius="50%"
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 20,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          //   fill: "#52b202",
          fill,
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: theme.palette.text.disabled,
        },
      })}
    />
  );
}
