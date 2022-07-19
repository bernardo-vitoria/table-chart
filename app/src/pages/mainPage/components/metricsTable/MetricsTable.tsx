import { IMetric } from "api";
import { Page, Table } from "components";
import { useMetricContext } from "context";
import {
  MetricsRow,
  UpdateMetricModal,
} from "pages/mainPage/components/metricsTable/components";
import { useState } from "react";
import useMetrics from "repository/useMetrics";

const MetricsTable = () => {
  const { metrics } = useMetrics();
  const [isModalActive, setIsModalActive] = useState(false);
  const { setSelectedMetric } = useMetricContext();
  const headers = ["Metric", "Description", "Value", "Category", "Type"];

  const handleOnRowClick = (newSelectedMetric: IMetric) => {
    setIsModalActive(true);
    setSelectedMetric(newSelectedMetric);
  };

  return (
    <>
      <Page>
        <Table headers={headers}>
          <>
            {metrics?.length > 0 &&
              metrics?.map((metric) => (
                <MetricsRow
                  key={metric.id}
                  metric={metric}
                  onClick={() => handleOnRowClick(metric)}
                />
              ))}
          </>
        </Table>
      </Page>
      <UpdateMetricModal
        isActive={isModalActive}
        onClose={() => setIsModalActive(false)}
      />
    </>
  );
};

export default MetricsTable;
