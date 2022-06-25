import React, { useRef, useState } from "react";
import Carousel from "../Components/Carousel";

export default function Main() {
  const inputRef = useRef();

  const [slides, setSlides] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    setSlides(inputRef.current.value);
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <form>
        <label style={{ marginRight: "1rem" }}>Number of slides</label>
        <input
          ref={inputRef}
          name="noOfSlides"
          placeholder="No. of slides"
        ></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <Carousel slides={slides} />
    </div>
  );
}
