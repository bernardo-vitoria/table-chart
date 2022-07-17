import { Page, Table } from "components";
import { MetricsRow } from "pages/metricsTable";
import useMetrics from "repository/useMetrics";

const MetricsTable = () => {
  const { metrics } = useMetrics();
  const headers = ["Metric", "Description", "Value", "Category", "Type"];

  return (
    <Page>
      <Table headers={headers}>
        <>
          {metrics?.length > 0 &&
            metrics?.map(({ label, description, value, category, type }) => (
              <MetricsRow
                label={label}
                description={description}
                value={value}
                category={category}
                type={type}
              />
            ))}
        </>
      </Table>
    </Page>
  );
};

export default MetricsTable;
