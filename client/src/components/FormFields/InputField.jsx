import { FormControl, FormHelperText, InputLabel, OutlinedInput } from "@material-ui/core";
import React from "react";
import { useController } from "react-hook-form";

export default function InputField({ control, name, label, ...otherProps }) {
  const {
    field: { value, onBlur, onChange, ref },
    fieldState: { invalid, error },
  } = useController({ control, name });
  return (
    <FormControl size='small' fullWidth>
      {/* <InputLabel htmlFor={name}>{label}</InputLabel> */}
      <OutlinedInput
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        inputRef={ref}
        error={invalid}
        inputProps={otherProps}
        color='secondary'
        placeholder={"Enter " + name}
      />
      <FormHelperText error={invalid}>{error?.message}</FormHelperText>
    </FormControl>
  );
}
