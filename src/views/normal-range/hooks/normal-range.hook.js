// @flow

// Vendors
import { useState, useEffect } from "react";
// Event handlers
import RangeHandlers from "../handlers/normal-range.handlers";
// Types
import type { RangeHookType } from "./types/normal-range.hook.type";

export default function useRangeHook(): RangeHookType {
  const [value, setValue] = useState([]);
  const [min, setMinValue] = useState(0);
  const [max, setMaxValue] = useState(0);

  const { loadData } = RangeHandlers({ setValue, setMaxValue, setMinValue });

  useEffect(() => {
    loadData();
  }, []);

  return {
    value,
    min,
    max,
  };
}
