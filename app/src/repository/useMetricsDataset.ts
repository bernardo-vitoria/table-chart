import { IMetrics } from "api";
import { useQuery } from "react-query";
import useMetricsGet from "service/useMetricsGet";
import { isUndefined } from "lodash";

export enum Category {
  OVERALL = "OVERALL",
  EFFICIENCY = "efficiency",
  SHIFT = "shift",
  DOWNTIME = "downtime",
}

export enum barColor {
  first = "rgba(255, 99, 132, 0.5)",
  second = "rgba(53, 162, 235, 0.5)",
}

type DatasetChart = {
  label: string;
  data: number[];
  backgroundColor: barColor;
};

type Hook = (
  category: Category
) => {
  isLoading: boolean;
  datasets: DatasetChart[];
  overallScore: string;
  labels: string[];
};

const useMetricsDataset: Hook = (category) => {
  const { get } = useMetricsGet();
  const { data, isLoading } = useQuery("useMetrics", () => get());

  if (isLoading || isUndefined(data))
    return { isLoading, datasets: [], overallScore: "-", labels: [] };

  const overallScore = data.find((metric) => metric.id === "oee");
  const metricByCategory = data.filter(
    (metric) => metric.category === category && metric.type !== "percentage"
  );
  const datasets = metricByCategory.map(({ label, value }, index) => {
    const returningValue = {
      label,
      data: [value],
    };

    if (index % 2) {
      return { backgroundColor: barColor.first, ...returningValue };
    }

    return { backgroundColor: barColor.second, ...returningValue };
  });

  return {
    isLoading,
    datasets: datasets ?? [],
    labels: [category],
    overallScore: `${overallScore?.value}` ?? "-",
  };
};
export default useMetricsDataset;
