// @flow

// Constants
import constants from "./constants/range.constants";
// type
import type {
  RangeHandlersType,
  RangeOnChangeType,
} from "./types/range.handlers.type";

const minDistance = constants.MIN_DISTANCE;

const onChange = ({
  value,
  setValue,
  event,
  newValue,
  activeThumb,
}: RangeOnChangeType) => {
  if (!Array.isArray(newValue)) {
    return;
  }

  if (activeThumb === 0) {
    setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
  } else {
    setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
  }
};

const RangeHandlers = ({ value, setValue }: RangeHandlersType): Function => ({
  handleChange: (event, newValue, activeThumb) =>
    onChange({ value, setValue, event, newValue, activeThumb }),
});

export default RangeHandlers;
