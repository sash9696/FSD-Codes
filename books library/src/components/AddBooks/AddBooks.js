import axios from "axios";
import React from "react";
import { url } from "../../api/api";
import "./AddBooks.css";

function AddBooks({
  title,
  setTitle,
  author,
  setAuthor,
  genre,
  setGenre,
  summary,
  setSummary,
}) {
  const addBook = (e) => {
    e.preventDefault();

    let formJSON = {
      title: title,
      author: author,
      gene: genre,
      summary: summary,
    };
    axios
      .post(url, formJSON)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    window.location.reload();
  };

  return (
    <div className="addBooks">
      <h2>Add Books</h2>
      <form>
        <label className="addBooks_label">Title:</label>
        <input
          className="addBooks_input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="addBooks_label">Author:</label>
        <input
          className="addBooks_input"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label className="addBooks_label">Genre:</label>
        <input
          className="addBooks_input"
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <label className="addBooks_label">Summary:</label>
        <input
          className="addBooks_input"
          type="text"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <button onClick={addBook} type="submit" className="addBooks_button">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddBooks;
