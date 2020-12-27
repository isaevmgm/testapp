import React from "react";
import Bigi from "./Bigi";

function ModalWindow({ active, setActive }) {
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
        <input className="inptwo" type="text" placeholder="Ваш комментарий" />
        <button className="btn">Оставить комментарий</button>
      </div>
    </div>
  );
}

export default ModalWindow;
