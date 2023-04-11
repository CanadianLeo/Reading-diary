export const fetchBooks = async () => {
    try {
        return items;
    } catch (e) {
        // Add newtwork error
        console.log(e);
    }
}

const items = [
    {
        id: '1',
        name: 'To Kill a Mockingbird',
        author: 'Nelle Harper Lee'
    },
    {
        id: '2',
        name: 'Jane Eyre',
        author: 'Charlotte Brontë'
    },
    {
        id: '3',
        name: 'The Great Gatsby',
        author: 'Francis Scott Key Fitzgerald'
    }
]