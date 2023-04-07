import React from "react";

export default function Link({
  width,
  text,
  color,
  uppercase,
  fsize,
  fweight,
  align,
  href,
  fontFamily,
}) {
  return (
    <a
      href={href}
      style={{
        color: color,
        textTransform: uppercase,
        fontSize: fsize,
        fontWeight: fweight,
        textAlign: align,
        width: `${width}%`,
        fontFamily: fontFamily,
      }}
    >
      {text}
    </a>
  );
}
