import { Page, Table } from "components";
import { MetricsRow } from "pages/mainPage/components/metricsTable";
import useMetrics from "repository/useMetrics";

const MetricsTable = () => {
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
                  />
                )
              )}
          </>
        </Table>
      </Page>
    </>
  );
};

export default MetricsTable;
