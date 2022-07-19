import React, { forwardRef } from "react";
import { Input } from "./style";

const InputDiv = forwardRef(
  (
    {
      type,
      onChange,
      mr,
      ml,
      mb,
      mt,
      value,
      name,
      defaultValue,
      placeholder,
      width,
      height,
      border,
    },
    ref
  ) => {
    return (
      <Input
        type={type}
        onChange={onChange}
        mr={mr}
        ml={ml}
        mb={mb}
        mt={mt}
        value={value}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        width={width}
        height={height}
        border={border}
        ref={ref}
      />
    );
  }
);

export default InputDiv;
