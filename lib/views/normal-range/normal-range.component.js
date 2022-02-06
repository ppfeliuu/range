"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _range = _interopRequireDefault(require("../../components/range/range.component"));

var _normalRange = _interopRequireDefault(require("./constants/normal-range.constants"));

var _normalRangeComponent = require("./normal-range.component.styled");

var _normalRange2 = _interopRequireDefault(require("./hooks/normal-range.hook"));

// Vendors
// Component
// Constants
// Styles
// Hooks
var NormalRange = function NormalRange() {
  var _useRangeHook = (0, _normalRange2["default"])(),
      value = _useRangeHook.value,
      min = _useRangeHook.min,
      max = _useRangeHook.max;

  return /*#__PURE__*/_react["default"].createElement(_normalRangeComponent.Wrapper, null, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: {
      width: 300
    }
  }, value.length > _normalRange["default"].LEN_VALUES && min !== _normalRange["default"].ZERO && max !== _normalRange["default"].ZERO && /*#__PURE__*/_react["default"].createElement(_range["default"], (0, _extends2["default"])({}, _normalRange["default"].RANGE_PROPS, {
    min: min,
    max: max
  }))));
};

var _default = NormalRange;
exports["default"] = _default;