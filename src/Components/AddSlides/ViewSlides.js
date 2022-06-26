import React, { useState, useEffect } from "react";

import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { Grid } from "@mui/material";

import axios from "axios";

export default function ViewImages({ open, setOpen }) {
  const [slideData, setSlides] = useState([]);
  const handleClose = () => {
    setOpen(false);
  };

  const getData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3600/api/view-carousel"
      );
      setSlides(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();

    return () => {
      console.log("unmounting");
    };
  }, [open]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"View Slides"}</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            {slideData?.length > 0 &&
              slideData?.map((item, index) => (
                <Grid item xs={12} sm={12} md={12} key={index}>
                  <img src={item.image} alt="slide" />
                  <h6>{item.title}</h6>
                  <h6>{item.subTitle}</h6>
                </Grid>
              ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
