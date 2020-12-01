import { h } from 'vue';

export default {
  name: 'skeleton-block',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    width: [String, Number],
    height: [String, Number],
    borderRadius: String,
    effect: String,
  },
  render() {
    return h(
      this.tag,
      {
        class: {
          'skeleton-block': true,
          [`skeleton-effect-${this.effect}`]: this.effect,
        },
        style: {
          width: this.width,
          height: this.height,
          borderRadius: this.borderRadius,
        },
      },
      this.$slots.default && this.$slots.default(),
    );
  },
};
