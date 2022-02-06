// Vendors
import { useState } from "react";
// Event handlers
import RangeHandlers from "../handlers/range.handlers";

export default function useRangeHook({ min, max }) {
  const [value, setValue] = useState([min, max]);

  const { handleChange } = RangeHandlers({ value, setValue });

  return {
    value,
    handleChange,
  };
}
