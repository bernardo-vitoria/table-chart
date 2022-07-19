import { useReducer } from "react";
import mainReducer from "context/metric/metricReducer";
import { MetricContextProps, metricTypes } from "context/metric/metricTypes";
import MetricContext from "context/metric/metricsContext";
import { IMetric } from "api";

const initialState: Partial<MetricContextProps> = {
  selectedMetric: undefined,
};

export const MetricStore = () => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const setSelectedMetric = (metric: IMetric) => {
    dispatch({
      type: metricTypes.SELECTED_METRIC,
      payload: { selectedMetric: metric },
    });
  };

  return {
    selectedMetric: state.selectedMetric,
    setSelectedMetric: setSelectedMetric,
  };
};

// eslint-disable-next-line
const MetricProvider = (children: any) => {
  return <MetricContext.Provider value={MetricStore()} {...children} />;
};

export default MetricProvider;
