'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
Object.defineProperty(exports, 'SkeletonBlock', {
  enumerable: true,
  get: function get() {
    return _skeletonBlock['default'];
  },
});
Object.defineProperty(exports, 'SkeletonText', {
  enumerable: true,
  get: function get() {
    return _skeletonText['default'];
  },
});
Object.defineProperty(exports, 'SkeletonImage', {
  enumerable: true,
  get: function get() {
    return _skeletonImage['default'];
  },
});
Object.defineProperty(exports, 'SkeletonAvatar', {
  enumerable: true,
  get: function get() {
    return _skeletonAvatar['default'];
  },
});

var _skeletonBlock = _interopRequireDefault(require('./skeleton-block.svelte'));

var _skeletonText = _interopRequireDefault(require('./skeleton-text.svelte'));

var _skeletonImage = _interopRequireDefault(require('./skeleton-image.svelte'));

var _skeletonAvatar = _interopRequireDefault(
  require('./skeleton-avatar.svelte'),
);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
