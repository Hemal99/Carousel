import React from "react";
import style from "./Carousel.module.css";

export default function Title({ title }) {
  return (
    <div className={style.centered}>
      <h1>{title}</h1>
    </div>
  );
}
