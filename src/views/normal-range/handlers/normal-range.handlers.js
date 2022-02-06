// @flow

import axios from "axios";
// Constants
import constants from "../constants/normal-range.constants";
// Utils
import {
  getLastArrItemNormal,
  getFirstArrItemNormal,
} from "../../../utils/utils";
// API
import { getNormal } from "../../../api/api";
// Types
import type { RangeHandlersType } from "./types/normal-range.handlers.type";

const onLoad = async ({
  setValue,
  setMaxValue,
  setMinValue,
}: RangeHandlersType) => {
  const data = await getNormal();
  if (data) {
    const { values } = data?.data;
    setValue(values);
    setMinValue(getFirstArrItemNormal(values));
    setMaxValue(getLastArrItemNormal(values));
  }
};

const RangeHandlers = ({
  setValue,
  setMaxValue,
  setMinValue,
}: RangeHandlersType): Function => ({
  loadData: () => onLoad({ setValue, setMaxValue, setMinValue }),
});

export default RangeHandlers;
