type MetricsRowProps = {
  label: string;
  description: string;
  value: number;
  category: string;
  type: string;
};

const MetricsRow: React.FC<MetricsRowProps> = ({
  label,
  description,
  value,
  category,
  type,
}) => {
  return (
    <tr data-testid="metricsRow">
      <td>{label}</td>
      <td>{description}</td>
      <td>{value}</td>
      <td>{category}</td>
      <td>{type}</td>
    </tr>
  );
};

export default MetricsRow;
