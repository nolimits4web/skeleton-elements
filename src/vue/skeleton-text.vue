<script>
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
      const h = this.$createElement;
      return h(
        this.tag,
        {
          class: {
            'skeleton-text': true,
            [`skeleton-effect-${this.effect}`]: this.effect,
          }
        },
        [
          this.$slots.default,
        ],
      );
    }
  }
</script>