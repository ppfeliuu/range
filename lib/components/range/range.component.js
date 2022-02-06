"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Slider = _interopRequireDefault(require("@mui/material/Slider"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _rangeComponent = require("./range.component.styled");

var _range = _interopRequireDefault(require("./hooks/range.hook"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Component
// Styles
// Hooks
var Range = function Range(_ref) {
  var valueLabelDisplay = _ref.valueLabelDisplay,
      disableSwap = _ref.disableSwap,
      step = _ref.step,
      min = _ref.min,
      max = _ref.max,
      marks = _ref.marks;

  var _useRangeHook = (0, _range["default"])({
    min: min,
    max: max
  }),
      value = _useRangeHook.value,
      handleChange = _useRangeHook.handleChange;

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, value[0], /*#__PURE__*/_react["default"].createElement(_Slider["default"], {
    valueLabelDisplay: valueLabelDisplay,
    value: value,
    onChange: handleChange,
    disableSwap: disableSwap,
    step: step,
    min: min,
    max: max,
    marks: marks
  }), value[1]);
};

var _default = Range;
exports["default"] = _default;