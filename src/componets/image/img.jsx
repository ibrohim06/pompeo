import React from "react";
import "./style.scss";

export default function Img({ src, width, height, hover, alt }) {
  return (
    <img
      src={src}
      style={{ width: width, height: height }}
      className={`${hover ? "scale" : ""}`}
      alt={alt}
    ></img>
  );
}
