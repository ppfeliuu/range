// @flow

// Vendors
import axios from "axios";
// Constants
import constants from "../constants/fixed-range.constants";
// Utils
import {
  getLastArrItemFixed,
  getFirstArrItemFixed,
} from "../../../utils/utils";
// Types
import type { RangeHandlersType } from "./types/fixed-range.handlers.type";

const onLoad = async ({
  setValue,
  setMaxValue,
  setMinValue,
}: RangeHandlersType) => {
  try {
    const data = await axios.get(`${constants.BASE_URL}/fixed`);

    const { values } = data?.data;

    if (values) {
      setValue(values);
      setMinValue(getFirstArrItemFixed(values));
      setMaxValue(getLastArrItemFixed(values));
    }
  } catch (error) {}
};

const RangeHandlers = ({
  setValue,
  setMaxValue,
  setMinValue,
}: RangeHandlersType): Function => ({
  loadData: () => onLoad({ setValue, setMaxValue, setMinValue }),
});

export default RangeHandlers;
