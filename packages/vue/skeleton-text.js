'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var _default = {
  name: 'skeleton-text',
  props: {
    tag: {
      type: String,
      default: 'span',
    },
    effect: String,
  },
  render: function render() {
    var h = this.$createElement;
    return h(
      this.tag,
      {
        class: _defineProperty(
          {
            'skeleton-text': true,
          },
          'skeleton-effect-'.concat(this.effect),
          this.effect,
        ),
      },
      [this.$slots['default']],
    );
  },
};
exports['default'] = _default;
