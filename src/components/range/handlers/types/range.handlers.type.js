// @flow

export type RangeHandlersType = {
  setValue: Function,
  value: [],
};

export type RangeOnChangeType = {
  value: any,
  setValue: Function,
  event: Function,
  newValue: number,
  activeThumb: Function,
};
