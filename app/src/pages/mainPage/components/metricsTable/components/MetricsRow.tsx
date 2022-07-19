type MetricsRowProps = {
  label: string;
  description: string;
  value: number;
  category: string;
  type: string;
  onClick: () => void;
};

const MetricsRow: React.FC<MetricsRowProps> = ({
  label,
  description,
  value,
  category,
  type,
  onClick,
}) => {
  return (
    <tr data-testid="metricsRow" onClick={onClick}>
      <td>{label}</td>
      <td>{description}</td>
      <td>{value}</td>
      <td>{category}</td>
      <td>{type}</td>
    </tr>
  );
};

export default MetricsRow;
