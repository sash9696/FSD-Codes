import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function SingleQuestion({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={() => setShowInfo(!showInfo)} className="btn">
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p> {info} </p>}
    </div>
  );
}
