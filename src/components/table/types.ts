export type TableProps = {
    items: Array<any>,
    headers: Array<TableHeader>,
}

export type TableHeader = {
    id: string,
    title: string,
    isSorted?: boolean,
    width?: number,
}