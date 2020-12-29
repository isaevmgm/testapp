import React from "react";
import Bigi from "./Bigi";
import { useState } from "react";

function ModalWindow({ active, setActive }) {
  const [comments, setComment] = useState([{ comment: "" }]);

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleComment = () => {
    const todo = { comment: text };
    setComment([...comments, todo]);
    setText("");
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal"}
        onClick={(e) => e.stopPropagation()}
      >
        <Bigi />
        <input className="inp" type="text" placeholder="Ваше имя" />
        <input
          className="inptwo"
          type="text"
          value={text}
          placeholder="Ваш комментарий"
          onChange={handleChange}
        />
        <button className="btn" onClick={handleComment}>
          Оставить комментарий
        </button>
        <div className="comment">
          {comments.map((todo) => {
            return <div>{todo.comment}</div>;
          })}
        </div>
        <div
          className={active ? "close" : "modal"}
          onClick={() => setActive(false)}
        >
          ✖
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
