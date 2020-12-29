import React from "react";
import { useSelector } from "react-redux";
import Image from "./Image";

function Images(props) {
  const images = useSelector((state) => state.images.items);

  const loading = useSelector((state) => state.images.loading);

  return (
    <div className="img">
      {loading
        ? "Загрузка"
        : images.map((image) => {
            return <Image key={image.id} image={image} />;
          })
      }
    </div>
  );
}

export default Images;
