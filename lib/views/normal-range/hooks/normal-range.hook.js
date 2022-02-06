// Vendors
import { useState, useEffect } from "react";
// Event handlers
import RangeHandlers from "../handlers/normal-range.handlers";

export default function useRangeHook() {
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
