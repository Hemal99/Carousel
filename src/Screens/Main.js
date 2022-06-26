import React, { useRef, useState } from "react";
import Carousel from "../Components/Carousel";

import { Button } from "@mui/material";
import AddModel from "../Components/AddSlides/AddModel";
import ViewImages from "../Components/AddSlides/ViewSlides";

export default function Main() {
  const inputRef = useRef();
  const infinite = useRef();
  const [err, setErr] = useState("");
  const [open, setOpen] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [slides, setSlides] = useState(2);
  const [isFinite, setIsFinite] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenView = () => {
    setOpenView(true);
  };

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
        <Button onClick={handleClickOpen}>Add Slides</Button>
      </div>
      <div>
        <Button onClick={handleClickOpenView}>View Slides</Button>
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
      <AddModel open={open} setOpen={setOpen} />
      <ViewImages open={openView} setOpen={setOpenView} />
    </div>
  );
}
