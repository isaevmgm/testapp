import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ModalWindow from "./ModalWindow";

function Image(props) {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="imag">
      <NavLink to={`/${props.image.id}`} onClick={() => setModalActive(true)}>
        <img src={props.image.url} alt="i" />
      </NavLink>
      <ModalWindow active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default Image;
