import React from "react";
import "./Book.css";

function Book({ id, title, author, genre, summary, deleteBook, updateBook }) {
  return (
    <div className="card">
      <h4 className="card_title">{title}</h4>
      <div className="card_description">
        <p>Author: {author} </p>
        <p>Genre: {genre}</p>
      </div>
      <p className="card_summary">{summary}</p>
      <div className="card_buttons">
        <button onClick={() => updateBook(id)} className="button">
          Edit
        </button>
        <button onClick={() => deleteBook(id)} className="button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Book;
