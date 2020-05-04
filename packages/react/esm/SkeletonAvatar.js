function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import multiplySvgPoints from './multiply-svg-points';

var SkeletonAvatar = function SkeletonAvatar(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$tag = _ref.tag,
      Tag = _ref$tag === void 0 ? 'span' : _ref$tag,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 48 : _ref$size,
      color = _ref.color,
      _ref$showIcon = _ref.showIcon,
      showIcon = _ref$showIcon === void 0 ? true : _ref$showIcon,
      iconColor = _ref.iconColor,
      _ref$borderRadius = _ref.borderRadius,
      borderRadius = _ref$borderRadius === void 0 ? '50%' : _ref$borderRadius,
      effect = _ref.effect,
      className = _ref.className,
      children = _ref.children,
      other = _objectWithoutPropertiesLoose(_ref, ["tag", "size", "color", "showIcon", "iconColor", "borderRadius", "effect", "className", "children"]);

  var skeletonClassName = ['skeleton-avatar', effect && "skeleton-effect-" + effect, className].filter(function (c) {
    return !!c;
  }).join(' ');

  function multiplyPoints(pointsString) {
    return multiplySvgPoints(pointsString, 56, size, size);
  }

  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: skeletonClassName
  }, other), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 " + size + " " + size,
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    width: size,
    height: size,
    fillRule: "evenodd",
    style: {
      fill: color
    },
    rx: borderRadius
  }), showIcon && /*#__PURE__*/React.createElement("path", {
    style: {
      fill: iconColor
    },
    d: multiplyPoints('M28.22461,27.1590817 C34.9209931,27.1590817 40.6829044,21.1791004 40.6829044,13.3926332 C40.6829044,5.69958662 34.8898972,0 28.22461,0 C21.5594557,0 15.7663156,5.82423601 15.7663156,13.4549579 C15.7663156,21.1791004 21.5594557,27.1590817 28.22461,27.1590817 Z M8.66515427,56 L47.7841986,56 C52.6739629,56 54.4181241,54.5984253 54.4181241,51.8576005 C54.4181241,43.8219674 44.358068,32.7341519 28.22461,32.7341519 C12.0600561,32.7341519 2,43.8219674 2,51.8576005 C2,54.5984253 3.74402832,56 8.66515427,56 Z')
  })), children);
};

export default SkeletonAvatar;