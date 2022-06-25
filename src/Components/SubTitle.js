import React from "react";
import style from "./Carousel.module.css";

export default function SUbTitle({ title }) {
  return (
    <div className={style.centered2}>
      <h3>{title}</h3>
    </div>
  );
}
