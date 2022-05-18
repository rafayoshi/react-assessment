export interface TableProps {
    rows: TableRow[],
    columns?: string[]
}

export interface TableRow {
    cells: TableCell[];
}

export interface TableCell {
    content: null | string | JSX.Element;
}

function Table(tableProps: TableProps) {
    return (
        <>
            {
                (tableProps.rows.length > 0) ?
                    <table>
                        {tableProps.columns && <thead>
                            <tr>
                                {tableProps.columns.map(column => (
                                    <th key={column}>{column}</th>
                                ))}
                            </tr>
                        </thead>
                        }
                        <tbody>
                            {tableProps.rows.map((row, i) => {
                                return (
                                    <tr key={i}>
                                        {row.cells.map((cell) => {
                                            return (
                                                <td>{cell.content}</td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    : <p>No data has been provided for this company</p>
            }
        </>
    );
}

export default Table;