export default {
  name: 'skeleton-block',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    width: [String, Number],
    height: [String, Number],
    effect: String,
  },
  render: function render() {
    var _class;

    var h = this.$createElement;
    return h(
      this.tag,
      {
        class:
          ((_class = {
            'skeleton-block': true,
          }),
          (_class['skeleton-effect-' + this.effect] = this.effect),
          _class),
        style: {
          width: this.width,
          height: this.height,
        },
      },
      [this.$slots['default']],
    );
  },
};
