import React, { useRef } from "react";
import Carousel from "../Components/Carousel";

export default function Main() {
  const inputRef = useRef();

  return (
    <div style={{ marginTop: "1rem" }}>
      <form>
        <label style={{ marginRight: "1rem" }}>Number of slides</label>
        <input
          ref={inputRef}
          name="noOfSlides"
          placeholder="No. of slides"
        ></input>
      </form>
      <Carousel slides={inputRef} />
    </div>
  );
}
