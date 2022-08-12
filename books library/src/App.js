import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import List from "./components/List/List";
import axios from "axios";
import { url } from "./api/api";
import AddBooks from "./components/AddBooks/AddBooks";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [summary, setSummary] = useState("");

  console.log(books);

  const getBooks = async () => {
    await axios.get(url).then((response) => setBooks(response.data));
  };

  useEffect(() => {
    getBooks();
  }, []);

  const updateBook = (id) => {
    //put request

    let formJSON = {
      title: title,
      author: author,
      genre: genre,
      summary: summary,
    };

    axios
      .put(`${url}/${id}`, formJSON)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    window.location.reload();
  };

  const deleteBook = (id) => {
    axios
      .delete(`${url}/${id}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    window.location.reload();
  };

  return (
    <div className="app">
      <Nav />
      <div className="app_body">
        <List books={books} deleteBook={deleteBook} updateBook={updateBook} />
        <AddBooks
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          genre={genre}
          setGenre={setGenre}
          summary={summary}
          setSummary={setSummary}
        />
      </div>
    </div>
  );
}

export default App;
