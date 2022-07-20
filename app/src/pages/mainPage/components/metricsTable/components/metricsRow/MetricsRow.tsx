import { IMetric } from "api";
import "pages/mainPage/components/metricsTable/components/metricsRow/metricsRow.scss";

type MetricsRowProps = {
  metric: IMetric;
  onClick: () => void;
};

const MetricsRow: React.FC<MetricsRowProps> = ({ metric, onClick }) => {
  const { label, description, value, category, type } = metric;
  const shouldIgnore = metric.id !== "oee";
  const handleOnClick = shouldIgnore ? onClick : () => {};
  const metricsRowStyle = shouldIgnore ? "metrics-row" : "";

  return (
    <tr
      className={metricsRowStyle}
      data-testid="metricsRow"
      onClick={handleOnClick}
    >
      <td>{label}</td>
      <td>{description}</td>
      <td>{value}</td>
      <td>{category}</td>
      <td>{type}</td>
    </tr>
  );
};

export default MetricsRow;
