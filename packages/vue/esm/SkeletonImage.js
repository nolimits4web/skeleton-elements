import multiplySvgPoints from './multiply-svg-points';
export default {
  name: 'skeleton-image',
  props: {
    tag: {
      type: String,
      "default": 'span'
    },
    width: {
      type: Number,
      "default": 1200
    },
    height: {
      type: Number,
      "default": 600
    },
    color: String,
    iconColor: String,
    showIcon: {
      type: Boolean,
      "default": true
    },
    effect: String
  },
  render: function render() {
    var _class;

    var h = this.$createElement;
    var color = this.color,
        iconColor = this.iconColor,
        showIcon = this.showIcon,
        width = this.width,
        height = this.height,
        effect = this.effect;
    return h(this.tag, {
      "class": (_class = {
        'skeleton-image': true
      }, _class["skeleton-effect-" + effect] = effect, _class)
    }, [h('svg', {
      attrs: {
        xmlns: 'http://www.w3.org/2000/svg',
        width: width,
        height: height,
        viewBox: "0 0 " + width + " " + height,
        preserveAspectRatio: 'none'
      }
    }, [h('polygon', {
      style: {
        fill: color
      },
      attrs: {
        fillRule: 'evenodd',
        points: "0 0 " + width + " 0 " + width + " " + height + " 0 " + height
      }
    }), showIcon && h('path', {
      style: {
        fill: iconColor
      },
      attrs: {
        d: this.multiplyPoints('M7.7148,49.5742 L48.2852,49.5742 C53.1836,49.5742 55.6446,47.1367 55.6446,42.3086 L55.6446,13.6914 C55.6446,8.8633 53.1836,6.4258 48.2852,6.4258 L7.7148,6.4258 C2.8398,6.4258 0.3554,8.8398 0.3554,13.6914 L0.3554,42.3086 C0.3554,47.1602 2.8398,49.5742 7.7148,49.5742 Z M39.2851,27.9414 C38.2304,27.0039 37.0351,26.5118 35.7695,26.5118 C34.457,26.5118 33.3085,26.9571 32.2304,27.918 L21.6366,37.3867 L17.3007,33.4492 C16.3163,32.582 15.2617,32.1133 14.1366,32.1133 C13.1054,32.1133 12.0976,32.5586 11.1366,33.4258 L4.1288,39.7305 L4.1288,13.8789 C4.1288,11.4414 5.4413,10.1992 7.7851,10.1992 L48.2147,10.1992 C50.535,10.1992 51.8708,11.4414 51.8708,13.8789 L51.8708,39.7539 L39.2851,27.9414 Z M17.8163,28.1992 C20.8398,28.1992 23.3241,25.7149 23.3241,22.668 C23.3241,19.6445 20.8398,17.1367 17.8163,17.1367 C14.7695,17.1367 12.2851,19.6445 12.2851,22.668 C12.2851,25.7149 14.7695,28.1992 17.8163,28.1992 Z')
      }
    })]), this.$slots["default"]]);
  },
  methods: {
    multiplyPoints: function multiplyPoints(pointsString) {
      return multiplySvgPoints(pointsString, 56, this.width, this.height);
    }
  }
};