// Vendors
import { useState, useEffect } from "react";
// Event handlers
import RangeHandlers from "../handlers/fixed-range.handlers";

export default function useRangeHook() {
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
