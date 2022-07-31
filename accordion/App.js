import React, { useState } from "react";
import "./index.css";
import data from "./data";
import SingleQuestion from "./SingleQuestion";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>FAQ's about login and signup</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
