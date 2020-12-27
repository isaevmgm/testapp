import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { loadImages } from "../redux/actions";
import Images from "./Images";
import { Route } from "react-router-dom";
import Bigimg from "./Bigimg";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages());
  }, []);

  return (
    <div className="main">
      <div className="call">TEST APP</div>
      <Route path="/">
        <Images />
      </Route>
      <Route path="/:id?">
        <Bigimg />
      </Route>
    </div>
  );
}

export default App;
