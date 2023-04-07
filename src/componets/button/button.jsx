import React from "react";
import "./style.scss";

export default function Button({
  width,
  height,
  br,
  bg,
  border,
  color,
  text,
  fsize,
  fweight,
  fontFamily,
}) {
  return (
    <div>
      <button
        style={{
          padding: `${height}px ${width}px`,
          backgroundColor: `${bg}`,
          color: color,
          borderRadius: `${br}px`,
          fontSize: fsize,
          fontWeight: fweight,
          fontFamily: fontFamily,
          border: border,
        }}
        className={`btn`}
      >
        {text}
      </button>
    </div>
  );
}
