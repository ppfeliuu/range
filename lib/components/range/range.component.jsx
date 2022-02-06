import React, { useState } from "react";
// Component
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
// Styles
import { Wrapper } from "./range.component.styled";
// Hooks
import useRangeHook from "./hooks/range.hook";

const Range = ({ valueLabelDisplay, disableSwap, step, min, max, marks }) => {
  const { value, handleChange } = useRangeHook({ min, max });

  return (
    <>
      {value[0]}
      <Slider
        valueLabelDisplay={valueLabelDisplay}
        value={value}
        onChange={handleChange}
        disableSwap={disableSwap}
        step={step}
        min={min}
        max={max}
        marks={marks}
      />
      {value[1]}
    </>
  );
};

export default Range;
