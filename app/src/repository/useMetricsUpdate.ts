import { IMetric } from "api";
import { useMutation } from "react-query";
import useMetricsGet from "service/useMetricsGet";
import useMetricsPost from "service/useMetricsPost";

type Hook = () => {
  updateMetric: (newMetric: IMetric) => void;
};

const useMetricsUpdate: Hook = () => {
  const { refetch } = useMetricsGet();
  const { post } = useMetricsPost();
  const { mutate } = useMutation(post, {
    onSettled: () => {
      refetch();
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
