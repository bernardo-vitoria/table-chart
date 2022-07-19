import { IMetric } from "api";
import "pages/mainPage/components/metricsTable/components/metricsRow/metricsRow.scss";

type MetricsRowProps = {
  metric: IMetric;
  onClick: () => void;
};

const MetricsRow: React.FC<MetricsRowProps> = ({ metric, onClick }) => {
  const { label, description, value, category, type } = metric;
  return (
    <tr className="metrics-row" data-testid="metricsRow" onClick={onClick}>
      <td>{label}</td>
      <td>{description}</td>
      <td>{value}</td>
      <td>{category}</td>
      <td>{type}</td>
    </tr>
  );
};

export default MetricsRow;
