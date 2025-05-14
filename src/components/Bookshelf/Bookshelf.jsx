import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Hobbit, The', author: 'J.R.R. Tolkien' },
        { title: 'Red Rising', author: 'Pierce Brown' },
        { title: 'Hunchback of Notre Dame', author: 'Victor Hugo' },
    ]);
    const [newBook, setNewBook] = useState({ title: '', author: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newBook.title && newBook.author) {
            setBooks((prevBooks) => [...prevBooks, newBook]);
            setNewBook({ title: '', author: '' });
            setBooks((prevBooks) =>
                [...prevBooks, newBook].sort((a, b) => {
                    const [aLastName, bLastName] = [a.author.split(' ').pop(), b.author.split(' ').pop()];
                    if (aLastName !== bLastName) {
                        return aLastName.localeCompare(bLastName);
                    }
                    return a.title.split(' ')[0].localeCompare(b.title.split(' ')[0]);
                })
            );
        }
    };

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Title"
                            name="title"
                            value={newBook.title}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder="Author"
                            name="author"
                            value={newBook.author}
                            onChange={handleInputChange}
                        />
                        <button type="submit">Add Book</button>
                    </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book, index) => (
                    <div key={index} className="bookCard">
                        <h4>{book.title}</h4>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookshelf;