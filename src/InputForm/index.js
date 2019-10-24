import React, { Fragment } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./form";
import Paper from "@material-ui/core/Paper";
import * as Yup from 'yup';

const styles = theme => ({
 paper: {
   marginTop: theme.spacing(8),
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   padding: `${theme.spacing(5)}px ${theme.spacing(5)}px ${theme
     .spacing(5)}px`
 },
 container: {
   maxWidth: "50%",
 }
});

const validationSchema = Yup.object({
  name: Yup.string("Enter a name").required("Name is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("")
    .min(8, "Password must contain atleast 8 characters")
    .required("Enter your password"),
  confirmPassword: Yup.string("Enter your password")
    .required("Confirm your password")
    .oneOf([Yup.ref("password")], "Password does not match")
});

function InputForm (props){

  const { classes } = props;
  const values = { name: "", email: "", confirmPassword: "", password: "" };
  const submit = data => {
    console.log(data);
  };
    return (
      <Fragment>
          <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
            <h1>Form</h1>
            <Formik
              render={props => <Form {...props} />}
              initialValues={values}
              validationSchema={validationSchema}
              onSubmit={submit}
            />
          </Paper>
        </div>
      </Fragment>
    );
}

export default withStyles(styles)(InputForm);