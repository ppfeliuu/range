// Vendors
import React from "react";
// Component
import Box from "@mui/material/Box";
import Range from "../../components/range/range.component";
// Constants
import constants from "./constants/normal-range.constants";
// Styles
import { Wrapper } from "./normal-range.component.styled";
// Hooks
import useRangeHook from "./hooks/normal-range.hook";

const NormalRange = () => {
  const { value, min, max } = useRangeHook();

  return (
    <Wrapper>
      <Box sx={{ width: 300 }}>
        {value.length > constants.LEN_VALUES &&
          min !== constants.ZERO &&
          max !== constants.ZERO && (
            <Range {...constants.RANGE_PROPS} min={min} max={max} />
          )}
      </Box>
    </Wrapper>
  );
};

export default NormalRange;
