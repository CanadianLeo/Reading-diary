import { TableItem, TableProps } from "./types";

export const Table = <T extends TableItem,>({headers, items}: TableProps<T>) => {
    return (
        <table>
            <tr>
                {headers.map(header => (
                    <th key={header.id}>{header.title}</th>
                ))}
            </tr>
            {items.map(item => (
                <tr key={item.id}>
                    {Object.keys(item).map(key => (
                        <td>
                            // TODO: использовать item[key]
                            {key}
                        </td>
                    ))}
                </tr>
            ))}
        </table>
    )
}