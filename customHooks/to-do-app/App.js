import React, { useState } from "react";
import "./App.css";
// import Timer from "./Timer";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = ({ target }) => {
    setTodoText(target.value);
  };
  console.log(todoList);

  const handleSubmit = (event) => {
    event.preventDefault();
    // todoList.push(todoText);
    setTodoList([...todoList, todoText]);
    setTodoText("");
  };
  const deleteTodo = (index) => {
    todoList.splice(index, 1);
    console.log(todoList);
    setTodoList([...todoList]);
  };
  return (
    <div className="App">
      {/* <Timer /> */}
      <header className="App-header">
        <h1>To Do</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label className="todoLabel">What do you want to do today?</label>
        <br />
        <input
          value={todoText}
          className="input"
          type="text"
          onChange={(event) => handleChange(event)}
        />

        <input className="button" type="submit" value="Submit" />
      </form>
      {todoList.map(
        (td, index) =>
          td !== "" && (
            <>
              <div className="todo">
                <br />
                <input type="checkbox" />
                <label>{td}</label>
                <IconButton onClick={() => deleteTodo(index)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            </>
          )
      )}
    </div>
  );
}

export default App;
