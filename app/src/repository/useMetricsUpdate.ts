import { IMetric } from "api";
import { useMutation, useQueryClient } from "react-query";
import useMetricsPost from "service/useMetricsPost";

type Hook = () => {
  updateMetric: (newMetric: IMetric) => void;
};

const useMetricsUpdate: Hook = () => {
  const queryClient = useQueryClient();
  const { post } = useMetricsPost();
  const { mutate } = useMutation(post, {
    onSettled: () => {
      queryClient.invalidateQueries("useMetrics");
    },
  });

  const updateMetric = (newMetric: IMetric) => {
    mutate(newMetric);
  };

  return {
    updateMetric,
  };
};
export default useMetricsUpdate;
