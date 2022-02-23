import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import { TextField } from "@mui/material";

const styles = {
  root: {
    background: "transperent",
  },
  input: {
    color: "white !important",
  },
};

const SimpleInput = ({
  id = "filled-error-helper-text",
  title = "",
  placeholder = "",
  value = "",
  classes,
  onChange = () => {},
  error,
  sideText = "",
}) => {
  return (
    <>
      <TextField
        id={id}
        type="text"
        className={classes.root}
        InputProps={{
          className: classes.input,
        }}
        label={<p style={{ color: "#cfcfcf" }}>{title}</p>}
        error={error}
        placeholder={placeholder}
        onChange={onChange}
        helperText={sideText}
        value={value}
        fullWidth
        variant="filled"
      />
    </>
  );
};

SimpleInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleInput);
