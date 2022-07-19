import { createContext, useContext } from "react";
import { MetricContextProps } from "context/metric/metricTypes";

const MetricContext = createContext<MetricContextProps | null>(null);

export const useMetricContext = () => {
  const store = useContext(MetricContext);

  if (!store) {
    throw new Error(
      "Cannot use `useMetricContext` outside of a MetricProvider"
    );
  }

  return store;
};

export default MetricContext;
