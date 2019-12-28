import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Name" variant="outlined" /> <br />
      <TextField id="outlined-basic" label="Email" variant="outlined" /> <br />
      <TextField id="message" label="Message" variant="outlined" /> <br />
      <input type="submit" />
    </form>
  );
}
