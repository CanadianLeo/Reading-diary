import { TableProps } from "./types";

export const Table = ({headers, items}: TableProps) => {
    return (
        <table>
            <tr>
                {headers.map(header => (
                    <th>{header.title}</th>
                ))}
            </tr>
            
        </table>
    )
}