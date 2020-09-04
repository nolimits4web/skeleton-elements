import { h } from 'vue';

export default {
  name: 'skeleton-text',
  props: {
    tag: {
      type: String,
      default: 'span',
    },
    effect: String,
  },
  render() {
    return h(
      this.tag,
      {
        class: {
          'skeleton-text': true,
          [`skeleton-effect-${this.effect}`]: this.effect,
        },
      },
      this.$slots.default && this.$slots.default(),
    );
  },
};
