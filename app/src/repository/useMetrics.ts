import { IMetric } from "api";
import useMetricsGet from "service/useMetricsGet";
import { isNil } from "lodash";

type Hook = () => {
  isLoading: boolean;
  metrics: IMetric[];
};

const useMetrics: Hook = () => {
  const { data, isLoading } = useMetricsGet();

  if (isLoading || isNil(data)) return { isLoading, metrics: [] };

  return {
    isLoading,
    metrics: data?.metrics ?? [],
  };
};
export default useMetrics;
