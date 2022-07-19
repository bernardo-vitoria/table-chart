import { Page, Table } from "components";
import {
  MetricsRow,
  UpdateMetricModal,
} from "pages/mainPage/components/metricsTable/components";
import { useState } from "react";
import useMetrics from "repository/useMetrics";

const MetricsTable = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const { metrics } = useMetrics();
  const headers = ["Metric", "Description", "Value", "Category", "Type"];

  return (
    <>
      <Page>
        <Table headers={headers}>
          <>
            {metrics?.length > 0 &&
              metrics?.map(
                ({ id, label, description, value, category, type }) => (
                  <MetricsRow
                    key={id}
                    label={label}
                    description={description}
                    value={value}
                    category={category}
                    type={type}
                    onClick={() => setIsModalActive(true)}
                  />
                )
              )}
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
