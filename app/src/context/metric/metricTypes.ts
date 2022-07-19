import { IMetric } from "api";

export interface MetricContextProps {
  selectedMetric?: IMetric;
  setSelectedMetric: (metric: IMetric) => void;
}

export const metricTypes = {
  SELECTED_METRIC: "SELECTED_METRIC",
};
