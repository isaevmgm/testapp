import React from "react";
import { useSelector } from "react-redux";

function Bigi(props) {
  const bigimg = useSelector((state) => state.bigimg.items);

  return (
    <div className="bigImg">
      <img src={bigimg.url} alt="b" />
    </div>
  );
}

export default Bigi;
