// @flow

// Vendors
import { useState, useEffect } from "react";
// Event handlers
import RangeHandlers from "../handlers/fixed-range.handlers";
// Types
import type { RangeHookType } from "./types/fixed-range.hook.type";

export default function useRangeHook(): RangeHookType {
  const [marks, setValue] = useState([]);
  const [min, setMinValue] = useState(0);
  const [max, setMaxValue] = useState(0);

  const { loadData } = RangeHandlers({ setMinValue, setMaxValue, setValue });

  useEffect(() => {
    loadData();
  }, []);

  return {
    marks,
    min,
    max,
  };
}
