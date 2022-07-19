import { Page } from "components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useMetricsDataset } from "repository";
import { Category } from "repository/useMetricsDataset";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Metrics",
    },
  },
};

const Chart = () => {
  const { labels, datasets, overallScore } = useMetricsDataset(
    Category.DOWNTIME
  );

  const data = {
    labels,
    datasets,
  };
  return (
    <>
      <Page withBorders>
        <>
          <div>
            <p>Overall Score: {overallScore}%</p>
          </div>
          <Bar options={options} data={data} />;
        </>
      </Page>
    </>
  );
};

export default Chart;
