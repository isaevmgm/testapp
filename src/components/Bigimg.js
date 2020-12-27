import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadBigimg } from "../redux/actions";
import ModalWindow from "./ModalWindow";

function Bigimg(props) {
  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    if (params.id !== undefined) {
      dispatch(loadBigimg(params.id));
    }
  }, [params]);

  return <ModalWindow />;
}

export default Bigimg;
