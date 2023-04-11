import { useState, useEffect } from "react";
import { Table } from "../../components/table";
import { Book } from "../../types";
import { fetchBooks } from "./utils/fetch-books";
import { TABLE_HEADERS } from "./constants";

export const BooksList = () => {
    // TODO: использовать стейт менеджер
    const [items, setItems] = useState<Array<Book>>([]);

    const getItems = async () => {
        const books = await fetchBooks();
        books && setItems(books);
    }

    useEffect(() => {
        getItems();
    }, [])

    return (
        <Table<Book> headers={TABLE_HEADERS} items={items} />
    )
}