import { IMetric } from "api";
import { useQuery } from "react-query";
import useMetricsGet from "service/useMetricsGet";
import { isUndefined } from "lodash";

type Hook = () => {
  isLoading: boolean;
  metrics: IMetric[];
};

const useMetrics: Hook = () => {
  const { get } = useMetricsGet();
  const { data, isLoading } = useQuery("useMetrics", () => get());

  if (isLoading || isUndefined(data)) return { isLoading, metrics: [] };

  return {
    isLoading,
    metrics: data,
  };
};
export default useMetrics;
