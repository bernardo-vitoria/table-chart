import axios from "axios";
import { IMetric, URL } from "api";

type Hook = () => {
  get: () => Promise<IMetric[]>;
};

const useMetricsGet: Hook = () => {
  const get = async () => {
    const { data } = await axios.get(URL.getMetrics);

    return data.data;
  };

  return { get };
};

export default useMetricsGet;
