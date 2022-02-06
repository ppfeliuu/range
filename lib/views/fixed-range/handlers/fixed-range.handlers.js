// Vendors
import axios from "axios";
// Constants
import constants from "../constants/fixed-range.constants";
// Utils
import {
  getLastArrItemFixed,
  getFirstArrItemFixed,
} from "../../../utils/utils";

const onLoad = async ({ setValue, setMaxValue, setMinValue }) => {
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

const RangeHandlers = ({ setValue, setMaxValue, setMinValue }) => ({
  loadData: () => onLoad({ setValue, setMaxValue, setMinValue }),
});

export default RangeHandlers;
