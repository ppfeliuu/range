// Vendors
import React from "react";
// Components
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Range from "../../components/range/range.component";
// Constants
import constants from "./constants/fixed-range.constants";
// Styles
import { Wrapper } from "./fixed-range.component.styled";
// Hooks
import useRangeHook from "./hooks/fixed-range.hook";

const FixedRange = () => {
  const { marks, max } = useRangeHook();

  return (
    <Wrapper>
      <Box>
        {marks.length > constants.LEN_VALUES && max !== constants.ZERO && (
          <Range
            {...constants.RANGE_PROPS}
            marks={marks}
            min={marks[0].value}
            max={max}
          />
        )}
      </Box>
    </Wrapper>
  );
};

export default FixedRange;
