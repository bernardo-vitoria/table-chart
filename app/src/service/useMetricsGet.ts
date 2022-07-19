import axios from "axios";
import { useQuery, gql } from "@apollo/client";
import { IMetric, URL } from "api";

export const METRICS_QUERY = gql`
  {
    metrics {
      id
      label
      value
      description
      category
    }
  }
`;

type Hook = () => {
  refetch: any;
  isLoading: boolean;
  data: { metrics: IMetric[] };
  get: () => Promise<IMetric[]>;
};

const useMetricsGet: Hook = () => {
  const { data, loading, refetch } = useQuery(METRICS_QUERY);

  const get = async () => {
    const { data } = await axios.get(URL.getMetrics);

    return data.data;
  };

  return { data: data, isLoading: loading, get, refetch };
};

export default useMetricsGet;
