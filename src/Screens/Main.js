import React, { useRef, useState } from "react";
import Carousel from "../Components/Carousel";

export default function Main() {
  const inputRef = useRef();
  const infinite = useRef();

  const [slides, setSlides] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    console.log(infinite.current.value);
    setSlides(inputRef.current.value);
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <form>
        <div>
          <label style={{ marginRight: "1rem" }}>Number of slides</label>
          <input
            ref={inputRef}
            name="noOfSlides"
            placeholder="No. of slides"
          ></input>
        </div>

        <div>
          <p>Is Finite</p>
          <label style={{ marginRight: "1rem" }}>yes</label> {" "}
          <input type="radio" id="yes" name="yes" value="yes"></input>
          <label style={{ marginRight: "1rem" }}>no</label> {" "}
          <input type="radio" id="no" name="no" value="no"></input>
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
      <Carousel slides={slides} />
    </div>
  );
}
