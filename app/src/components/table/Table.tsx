import "components/table/table.scss";

type TableProps = {
  headers: string[];
  children: JSX.Element;
};

const Table: React.FC<TableProps> = ({ headers, children }) => {
  return (
    <table className="table">
      <tr className="table-header">
        {headers.map((header) => (
          <th>{header}</th>
        ))}
      </tr>
      {children}
    </table>
  );
};

export default Table;
