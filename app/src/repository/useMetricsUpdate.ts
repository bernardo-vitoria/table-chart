import { IMetric } from "api";
import { useMutation } from "react-query";
import useMetricsGet from "service/useMetricsGet";
import { isUndefined } from "lodash";
import useMetricsPost from "service/useMetricsPost";

type Hook = () => {
  updateMetric: (newMetric: IMetric) => void;
};

const useMetricsUpdate: Hook = () => {
  const { post } = useMetricsPost();
  const { mutate } = useMutation(post);

  const updateMetric = (newMetric: IMetric) => {
    mutate(newMetric);
  };

  return {
    updateMetric,
  };
};
export default useMetricsUpdate;
