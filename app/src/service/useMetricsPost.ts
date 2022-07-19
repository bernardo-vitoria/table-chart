import axios from "axios";
import { IMetric, URL } from "api";

type Hook = () => {
  post: (newMetric: IMetric) => Promise<IMetric>;
};

const useMetricsPost: Hook = () => {
  const post = async (newMetric: IMetric) => {
    const { data } = await axios.post(
      URL.updateMetric(newMetric.id),
      newMetric
    );

    return data.data;
  };

  return { post };
};

export default useMetricsPost;
