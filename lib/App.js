"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _normalRange = _interopRequireDefault(require("./views/normal-range/normal-range.component"));

var _fixedRange = _interopRequireDefault(require("./views/fixed-range/fixed-range.component"));

function App() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("nav", null, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/normal"
  }, "Normal Range")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/fixed"
  }, "Fixed values range")))), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/"
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/normal",
    element: /*#__PURE__*/_react["default"].createElement(_normalRange["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/fixed",
    element: /*#__PURE__*/_react["default"].createElement(_fixedRange["default"], null)
  })));
}