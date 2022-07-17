import "components/table/table.scss";

type TableProps = {
  headers: string[];
  children: JSX.Element;
};

const Table: React.FC<TableProps> = ({ headers, children }) => {
  return (
    <table className="table" data-testid="table">
      <thead>
        <tr className="table-header">
          {headers.map((header, index) => (
            <th key={`${header}_${index}`} data-testid="tableHeader">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
