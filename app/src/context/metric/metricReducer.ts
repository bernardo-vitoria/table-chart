import { MetricContextProps, metricTypes } from "context/metric/metricTypes";

interface Action {
  type: string;
  // eslint-disable-next-line
  payload?: any;
}

// eslint-disable-next-line
export default (
  state: Partial<MetricContextProps>,
  { type, payload }: Action
) => {
  switch (type) {
    case metricTypes.SELECTED_METRIC:
      return { ...state, selectedMetric: payload.selectedMetric };

    default:
      return state;
  }
};
