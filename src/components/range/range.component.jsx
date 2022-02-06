// @flow

import React, { useState } from "react";
// Component
import Slider from "@mui/material/Slider";
// Styles
import { Wrapper, ValuesWrapper, ValueStyled } from "./range.component.styled";
// Hooks
import useRangeHook from "./hooks/range.hook";
// Types
import type { RangeType } from "./types/range.type";
// Constants
import constants from "./constants/range.constants";

const Range = ({
  valueLabelDisplay,
  disableSwap,
  step,
  min,
  max,
  marks,
}: RangeType): React$Node => {
  const { value, handleChange } = useRangeHook({ min, max });

  return (
    <Wrapper>
      <ValuesWrapper>
        <ValueStyled>{value[0]}</ValueStyled>{" "}
        <ValueStyled>{constants.CURRENCY}</ValueStyled>
      </ValuesWrapper>
      <Slider
        valueLabelDisplay={valueLabelDisplay}
        valueLabelFormat={(value) => value + "€"}
        value={value}
        onChange={handleChange}
        disableSwap={disableSwap}
        step={step}
        min={min}
        max={max}
        marks={marks}
      />
      <ValuesWrapper>
        <ValueStyled>{value[1]}</ValueStyled>{" "}
        <ValueStyled>{constants.CURRENCY}</ValueStyled>
      </ValuesWrapper>
    </Wrapper>
  );
};

export default Range;
