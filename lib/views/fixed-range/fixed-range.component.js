"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _Slider = _interopRequireDefault(require("@mui/material/Slider"));

var _range = _interopRequireDefault(require("../../components/range/range.component"));

var _fixedRange = _interopRequireDefault(require("./constants/fixed-range.constants"));

var _fixedRangeComponent = require("./fixed-range.component.styled");

var _fixedRange2 = _interopRequireDefault(require("./hooks/fixed-range.hook"));

// Vendors
// Components
// Constants
// Styles
// Hooks
var FixedRange = function FixedRange() {
  var _useRangeHook = (0, _fixedRange2["default"])(),
      marks = _useRangeHook.marks,
      max = _useRangeHook.max;

  return /*#__PURE__*/_react["default"].createElement(_fixedRangeComponent.Wrapper, null, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: {
      width: 300
    }
  }, marks.length > _fixedRange["default"].LEN_VALUES && max !== _fixedRange["default"].ZERO && /*#__PURE__*/_react["default"].createElement(_range["default"], (0, _extends2["default"])({}, _fixedRange["default"].RANGE_PROPS, {
    marks: marks,
    min: marks[0].value,
    max: max
  }))));
};

var _default = FixedRange;
exports["default"] = _default;