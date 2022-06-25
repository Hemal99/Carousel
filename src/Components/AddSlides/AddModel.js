import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Form, Formik, Field } from "formik";
import { Grid } from "@mui/material";
import * as Yup from "yup";
import { TextField as TF } from "formik-material-ui";
import axios from "axios";

export default function AlertDialog({ open, setOpen }) {
  const initialValues = {
    title: "",
    subtitle: "",
    image: "",
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (values) => {
    try {
      axios.post("http://localhost:3600/api/slides", values);
    } catch (err) {
      console.log(err);
    }
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    subTitle: Yup.string().required("Subtitle is required"),
    image: Yup.string().required("Image is required"),
  });

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add New Slide"}</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            enableReinitialize
          >
            {({
              touched,
              errors,
              values,
              isValid,
              handleChange,
              setFieldValue,
            }) => {
              return (
                <Form>
                  <Grid container spacing={3} mt={3}>
                    <Grid item xs={12} md={12} lg={12}>
                      <Field
                        name="title"
                        label="Title"
                        component={TF}
                        variant="outlined"
                        fullWidth
                        required
                      ></Field>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Field
                        name="subTitle"
                        label="Sub Title"
                        component={TF}
                        variant="outlined"
                        fullWidth
                        required
                      ></Field>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Field
                        name="image"
                        label="Image Url"
                        component={TF}
                        variant="outlined"
                        fullWidth
                        required
                      ></Field>
                    </Grid>
                  </Grid>
                  <DialogActions>
                    <Button
                      type="submit"
                      onClick={handleClose}
                      autoFocus
                      variant="contained"
                    >
                      Submit
                    </Button>
                  </DialogActions>
                </Form>
              );
            }}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
}
