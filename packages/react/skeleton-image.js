'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var React = _interopRequireWildcard(require('react'));

var _multiplySvgPoints = _interopRequireDefault(
  require('./utils/multiply-svg-points'),
);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var SkeletonImage = function SkeletonImage() {
  var _ref =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$tag = _ref.tag,
    Tag = _ref$tag === void 0 ? 'span' : _ref$tag,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 1200 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 600 : _ref$height,
    color = _ref.color,
    iconColor = _ref.iconColor,
    _ref$showIcon = _ref.showIcon,
    showIcon = _ref$showIcon === void 0 ? true : _ref$showIcon,
    effect = _ref.effect,
    className = _ref.className,
    children = _ref.children,
    other = _objectWithoutProperties(_ref, [
      'tag',
      'width',
      'height',
      'color',
      'iconColor',
      'showIcon',
      'effect',
      'className',
      'children',
    ]);

  var skeletonClassName = [
    'skeleton-image',
    effect && 'skeleton-effect-'.concat(effect),
    className,
  ]
    .filter(function (c) {
      return !!c;
    })
    .join(' ');

  function multiplyPoints(pointsString) {
    return (0, _multiplySvgPoints['default'])(pointsString, 56, width, height);
  }

  return /*#__PURE__*/ React.createElement(
    Tag,
    _extends(
      {
        className: skeletonClassName,
      },
      other,
    ),
    /*#__PURE__*/ React.createElement(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: width,
        height: height,
        viewBox: '0 0 '.concat(width, ' ').concat(height),
        preserveAspectRatio: 'none',
      },
      /*#__PURE__*/ React.createElement('polygon', {
        style: {
          fill: color,
        },
        fillRule: 'evenodd',
        points: '0 0 '
          .concat(width, ' 0 ')
          .concat(width, ' ')
          .concat(height, ' 0 ')
          .concat(height),
      }),
      showIcon &&
        /*#__PURE__*/ React.createElement('path', {
          style: {
            fill: iconColor,
          },
          d: multiplyPoints(
            'M7.7148,49.5742 L48.2852,49.5742 C53.1836,49.5742 55.6446,47.1367 55.6446,42.3086 L55.6446,13.6914 C55.6446,8.8633 53.1836,6.4258 48.2852,6.4258 L7.7148,6.4258 C2.8398,6.4258 0.3554,8.8398 0.3554,13.6914 L0.3554,42.3086 C0.3554,47.1602 2.8398,49.5742 7.7148,49.5742 Z M39.2851,27.9414 C38.2304,27.0039 37.0351,26.5118 35.7695,26.5118 C34.457,26.5118 33.3085,26.9571 32.2304,27.918 L21.6366,37.3867 L17.3007,33.4492 C16.3163,32.582 15.2617,32.1133 14.1366,32.1133 C13.1054,32.1133 12.0976,32.5586 11.1366,33.4258 L4.1288,39.7305 L4.1288,13.8789 C4.1288,11.4414 5.4413,10.1992 7.7851,10.1992 L48.2147,10.1992 C50.535,10.1992 51.8708,11.4414 51.8708,13.8789 L51.8708,39.7539 L39.2851,27.9414 Z M17.8163,28.1992 C20.8398,28.1992 23.3241,25.7149 23.3241,22.668 C23.3241,19.6445 20.8398,17.1367 17.8163,17.1367 C14.7695,17.1367 12.2851,19.6445 12.2851,22.668 C12.2851,25.7149 14.7695,28.1992 17.8163,28.1992 Z',
          ),
        }),
    ),
    children,
  );
};

var _default = SkeletonImage;
exports['default'] = _default;
