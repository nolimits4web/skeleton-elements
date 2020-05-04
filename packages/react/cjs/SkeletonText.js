"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SkeletonText = function SkeletonText(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$tag = _ref.tag,
      Tag = _ref$tag === void 0 ? 'span' : _ref$tag,
      effect = _ref.effect,
      className = _ref.className,
      children = _ref.children,
      other = _objectWithoutPropertiesLoose(_ref, ["tag", "effect", "className", "children"]);

  var skeletonClassName = ['skeleton-text', effect && "skeleton-effect-" + effect, className].filter(function (c) {
    return !!c;
  }).join(' ');
  return /*#__PURE__*/_react["default"].createElement(Tag, _extends({
    className: skeletonClassName
  }, other), children);
};

var _default = SkeletonText;
exports["default"] = _default;