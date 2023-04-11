export type TableProps<T> = {
    items: Array<T>,
    headers: Array<TableHeader>,
}

export type TableHeader = {
    id: string,
    title: string,
    isSorted?: boolean,
    width?: number,
}

export type TableItem = {
    id: string,
}