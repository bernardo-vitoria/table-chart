import { Button, Page } from "components";
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
import "pages/mainPage/components/chart/chart.scss";
import { useState } from "react";

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
  const [selectedCategory, setSelectedCategory] = useState(Category.EFFICIENCY);
  const { labels, datasets, overallScore } = useMetricsDataset(
    selectedCategory
  );

  const data = {
    labels,
    datasets,
  };
  return (
    <>
      <Page withBorders>
        <>
          <div className="chart_header">
            <div className="chart_header-score">
              Overall Score: {overallScore}%
            </div>
            <div>
              <Button
                onClick={() => setSelectedCategory(Category.EFFICIENCY)}
                selected={selectedCategory === Category.EFFICIENCY}
              >
                Effeciency
              </Button>
              <Button
                onClick={() => setSelectedCategory(Category.DOWNTIME)}
                selected={selectedCategory === Category.DOWNTIME}
              >
                Downtime
              </Button>
              <Button
                onClick={() => setSelectedCategory(Category.SHIFT)}
                selected={selectedCategory === Category.SHIFT}
              >
                Shift
              </Button>
            </div>
          </div>
          <Bar options={options} data={data} />;
        </>
      </Page>
    </>
  );
};

export default Chart;
