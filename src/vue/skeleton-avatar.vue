<script>
  import multiplySvgPoints from '../utils/multiply-svg-points';

  export default {
    name: 'skeleton-avatar',
    props: {
      tag: {
        type: String,
        default: 'span',
      },
      size: {
        type: Number,
        default: 48,
      },
      borderRadius: {
        type: [String, Number],
        default: '50%',
      },
      color: String,
      iconColor: String,
      showIcon: {
        type: Boolean,
        default: true,
      },
      effect: String,
    },
    render() {
      const h = this.$createElement;
      const { color, iconColor, showIcon, size, borderRadius, effect } = this;
      return h(
        this.tag,
        {
          class: {
            'skeleton-avatar': true,
            [`skeleton-effect-${effect}`]: effect,
          },
        },
        [
          h(
            'svg',
            {
              attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                width: size,
                height: size,
                viewBox: `0 0 ${size} ${size}`,
                preserveAspectRatio: 'none',
              }
            },
            [
              h(
                'rect',
                {
                  style: { fill: color },
                  attrs: {
                    fillRule: "evenodd",
                    width: size,
                    height: size,
                    rx: borderRadius,
                  },
                },
              ),
              showIcon && h(
                'path',
                {
                  style: { fill: iconColor },
                  attrs: {
                    d: this.multiplyPoints('M28.22461,27.1590817 C34.9209931,27.1590817 40.6829044,21.1791004 40.6829044,13.3926332 C40.6829044,5.69958662 34.8898972,0 28.22461,0 C21.5594557,0 15.7663156,5.82423601 15.7663156,13.4549579 C15.7663156,21.1791004 21.5594557,27.1590817 28.22461,27.1590817 Z M8.66515427,56 L47.7841986,56 C52.6739629,56 54.4181241,54.5984253 54.4181241,51.8576005 C54.4181241,43.8219674 44.358068,32.7341519 28.22461,32.7341519 C12.0600561,32.7341519 2,43.8219674 2,51.8576005 C2,54.5984253 3.74402832,56 8.66515427,56 Z')
                  },
                }
              )
            ]
          ),
          this.$slots.default,
        ],
      );
    },
    methods: {
      multiplyPoints(pointsString) {
        return multiplySvgPoints(pointsString, 56, this.size, this.size);
      },
    },
  }
</script>