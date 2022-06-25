import React, { useRef, useState } from "react";
import Carousel from "../Components/Carousel";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

export default function Main() {
  const inputRef = useRef();
  const infinite = useRef();
  let navigate = useNavigate();
  const [err, setErr] = useState("");

  const [slides, setSlides] = useState(2);
  const [isFinite, setIsFinite] = useState(true);

  const handleInfinite = (e) => {
    if (e.target.value === "yes") {
      setIsFinite(true);
    } else {
      setIsFinite(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value > 10 || inputRef.current.value < 1) {
      setErr("Max 10 slides and min 1 slide");
    } else {
      setErr("");
      setSlides(inputRef.current.value);
    }
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <div>
        <Button onClick={() => navigate("/add-slides")}>Add Slides</Button>
      </div>
      <h5>No of slides : {slides}</h5>
      <form>
        <div>
          <label style={{ marginRight: "1rem" }}>Number of slides</label>
          <input
            ref={inputRef}
            type="number"
            name="noOfSlides"
            placeholder="No. of slides"
          ></input>
          {err !== "" && <p style={{ color: "red" }}>{err}</p>}
        </div>

        <div>
          <p>Is Finite</p>
          <div>
            <label style={{ marginRight: "1rem" }}>yes</label> {" "}
            <input
              ref={infinite}
              type="radio"
              id="yes"
              name="isFinite"
              onChange={handleInfinite}
              value="yes"
            ></input>
          </div>
          <div>
            <label style={{ marginRight: "1rem" }}>no</label> {" "}
            <input
              ref={infinite}
              type="radio"
              id="no"
              onChange={handleInfinite}
              name="isFinite"
              value="no"
            ></input>
          </div>
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
      <Carousel slides={slides} infinite={isFinite} />
    </div>
  );
}
