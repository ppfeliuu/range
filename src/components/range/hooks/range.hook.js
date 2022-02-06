// Vendors
import { useState } from "react";
// Event handlers
import RangeHandlers from "../handlers/range.handlers";
// Types
import type { RangeHookType } from "./types/range.hook.type";

export default function useRangeHook({ min, max }): RangeHookType {
  const [value, setValue] = useState([min, max]);

  const { handleChange } = RangeHandlers({ value, setValue });

  return {
    value,
    handleChange,
  };
}
