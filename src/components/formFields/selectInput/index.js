import React from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@mui/styles";

const styles = {
  root: {
    background: "transperent",
  },
  input: {
    color: "white !important",
  },
};

const SelectInput = ({
  id = "filled-error-helper-text",
  options,
  title = "",
  value = "",
  classes = "",
  onChange = () => {},
  error,
  required = false,
  disabled = false,
  sideText = "",
}) => {
  return (
    <>
      <FormControl variant="filled" fullWidth>
        <InputLabel id={`${id}-label`} style={{ color: "#cfcfcf" }}>
          {title}
        </InputLabel>
        <Select
          id={id}
          labelId={`${id}-label`}
          className={classes.root}
          inputProps={{
            className: classes.input,
          }}
          required={required}
          error={error}
          onChange={onChange}
          value={value}
          disabled={disabled}
          variant="filled"
        >
          {options.map((option) => {
            return <MenuItem value={option.value}>{option.label}</MenuItem>;
          })}
        </Select>
        <FormHelperText children={sideText} style={{ color: "#d32f2f" }} />
      </FormControl>
    </>
  );
};

SelectInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectInput);
