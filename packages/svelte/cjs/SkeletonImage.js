"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _internal = require("svelte/internal");

var _multiplySvgPoints = _interopRequireDefault(require("./multiply-svg-points"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function create_if_block(ctx) {
  var path;
  var path_style_value;
  var path_d_value;
  return {
    c: function c() {
      path = (0, _internal.svg_element)("path");
      (0, _internal.attr)(path, "style", path_style_value =
      /*iconColor*/
      ctx[3] ? "fill: " +
      /*iconColor*/
      ctx[3] : "");
      (0, _internal.attr)(path, "d", path_d_value =
      /*multiplyPoints*/
      ctx[7]("M7.7148,49.5742 L48.2852,49.5742 C53.1836,49.5742 55.6446,47.1367 55.6446,42.3086 L55.6446,13.6914 C55.6446,8.8633 53.1836,6.4258 48.2852,6.4258 L7.7148,6.4258 C2.8398,6.4258 0.3554,8.8398 0.3554,13.6914 L0.3554,42.3086 C0.3554,47.1602 2.8398,49.5742 7.7148,49.5742 Z M39.2851,27.9414 C38.2304,27.0039 37.0351,26.5118 35.7695,26.5118 C34.457,26.5118 33.3085,26.9571 32.2304,27.918 L21.6366,37.3867 L17.3007,33.4492 C16.3163,32.582 15.2617,32.1133 14.1366,32.1133 C13.1054,32.1133 12.0976,32.5586 11.1366,33.4258 L4.1288,39.7305 L4.1288,13.8789 C4.1288,11.4414 5.4413,10.1992 7.7851,10.1992 L48.2147,10.1992 C50.535,10.1992 51.8708,11.4414 51.8708,13.8789 L51.8708,39.7539 L39.2851,27.9414 Z M17.8163,28.1992 C20.8398,28.1992 23.3241,25.7149 23.3241,22.668 C23.3241,19.6445 20.8398,17.1367 17.8163,17.1367 C14.7695,17.1367 12.2851,19.6445 12.2851,22.668 C12.2851,25.7149 14.7695,28.1992 17.8163,28.1992 Z"));
    },
    m: function m(target, anchor) {
      (0, _internal.insert)(target, path, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*iconColor*/
      8 && path_style_value !== (path_style_value =
      /*iconColor*/
      ctx[3] ? "fill: " +
      /*iconColor*/
      ctx[3] : "")) {
        (0, _internal.attr)(path, "style", path_style_value);
      }
    },
    d: function d(detaching) {
      if (detaching) (0, _internal.detach)(path);
    }
  };
}

function create_fragment(ctx) {
  var span;
  var svg;
  var polygon;
  var polygon_style_value;
  var polygon_points_value;
  var svg_viewBox_value;
  var t;
  var current;
  var if_block =
  /*showIcon*/
  ctx[4] && create_if_block(ctx);
  var default_slot_template =
  /*$$slots*/
  ctx[12]["default"];
  var default_slot = (0, _internal.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[11], null);
  var span_levels = [
  /*rest*/
  ctx[5], {
    "class":
    /*skeletonClassName*/
    ctx[6]
  }];
  var span_data = {};

  for (var i = 0; i < span_levels.length; i += 1) {
    span_data = (0, _internal.assign)(span_data, span_levels[i]);
  }

  return {
    c: function c() {
      span = (0, _internal.element)("span");
      svg = (0, _internal.svg_element)("svg");
      polygon = (0, _internal.svg_element)("polygon");
      if (if_block) if_block.c();
      t = (0, _internal.space)();
      if (default_slot) default_slot.c();
      (0, _internal.attr)(polygon, "style", polygon_style_value =
      /*color*/
      ctx[2] ? "fill: " +
      /*color*/
      ctx[2] : "");
      (0, _internal.attr)(polygon, "fillrule", "evenodd");
      (0, _internal.attr)(polygon, "points", polygon_points_value = "0 0 " +
      /*width*/
      ctx[0] + " 0 " +
      /*width*/
      ctx[0] + " " +
      /*height*/
      ctx[1] + " 0 " +
      /*height*/
      ctx[1]);
      (0, _internal.attr)(svg, "xmlns", "http://www.w3.org/2000/svg");
      (0, _internal.attr)(svg, "width",
      /*width*/
      ctx[0]);
      (0, _internal.attr)(svg, "height",
      /*height*/
      ctx[1]);
      (0, _internal.attr)(svg, "viewBox", svg_viewBox_value = "0 0 " +
      /*width*/
      ctx[0] + " " +
      /*height*/
      ctx[1]);
      (0, _internal.attr)(svg, "preserveAspectRatio", "none");
      (0, _internal.set_attributes)(span, span_data);
    },
    m: function m(target, anchor) {
      (0, _internal.insert)(target, span, anchor);
      (0, _internal.append)(span, svg);
      (0, _internal.append)(svg, polygon);
      if (if_block) if_block.m(svg, null);
      (0, _internal.append)(span, t);

      if (default_slot) {
        default_slot.m(span, null);
      }

      current = true;
    },
    p: function p(ctx, _ref) {
      var dirty = _ref[0];

      if (!current || dirty &
      /*color*/
      4 && polygon_style_value !== (polygon_style_value =
      /*color*/
      ctx[2] ? "fill: " +
      /*color*/
      ctx[2] : "")) {
        (0, _internal.attr)(polygon, "style", polygon_style_value);
      }

      if (!current || dirty &
      /*width, height*/
      3 && polygon_points_value !== (polygon_points_value = "0 0 " +
      /*width*/
      ctx[0] + " 0 " +
      /*width*/
      ctx[0] + " " +
      /*height*/
      ctx[1] + " 0 " +
      /*height*/
      ctx[1])) {
        (0, _internal.attr)(polygon, "points", polygon_points_value);
      }

      if (
      /*showIcon*/
      ctx[4]) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(svg, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (!current || dirty &
      /*width*/
      1) {
        (0, _internal.attr)(svg, "width",
        /*width*/
        ctx[0]);
      }

      if (!current || dirty &
      /*height*/
      2) {
        (0, _internal.attr)(svg, "height",
        /*height*/
        ctx[1]);
      }

      if (!current || dirty &
      /*width, height*/
      3 && svg_viewBox_value !== (svg_viewBox_value = "0 0 " +
      /*width*/
      ctx[0] + " " +
      /*height*/
      ctx[1])) {
        (0, _internal.attr)(svg, "viewBox", svg_viewBox_value);
      }

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        2048) {
          default_slot.p((0, _internal.get_slot_context)(default_slot_template, ctx,
          /*$$scope*/
          ctx[11], null), (0, _internal.get_slot_changes)(default_slot_template,
          /*$$scope*/
          ctx[11], dirty, null));
        }
      }

      (0, _internal.set_attributes)(span, (0, _internal.get_spread_update)(span_levels, [dirty &
      /*rest*/
      32 &&
      /*rest*/
      ctx[5], dirty &
      /*skeletonClassName*/
      64 && {
        "class":
        /*skeletonClassName*/
        ctx[6]
      }]));
    },
    i: function i(local) {
      if (current) return;
      (0, _internal.transition_in)(default_slot, local);
      current = true;
    },
    o: function o(local) {
      (0, _internal.transition_out)(default_slot, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0, _internal.detach)(span);
      if (if_block) if_block.d();
      if (default_slot) default_slot.d(detaching);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var _$$props = $$props,
      _$$props$width = _$$props.width,
      width = _$$props$width === void 0 ? 1200 : _$$props$width;
  var _$$props2 = $$props,
      _$$props2$height = _$$props2.height,
      height = _$$props2$height === void 0 ? 600 : _$$props2$height;
  var _$$props3 = $$props,
      _$$props3$color = _$$props3.color,
      color = _$$props3$color === void 0 ? undefined : _$$props3$color;
  var _$$props4 = $$props,
      _$$props4$iconColor = _$$props4.iconColor,
      iconColor = _$$props4$iconColor === void 0 ? undefined : _$$props4$iconColor;
  var _$$props5 = $$props,
      _$$props5$showIcon = _$$props5.showIcon,
      showIcon = _$$props5$showIcon === void 0 ? true : _$$props5$showIcon;
  var _$$props6 = $$props,
      _$$props6$effect = _$$props6.effect,
      effect = _$$props6$effect === void 0 ? undefined : _$$props6$effect;
  var _$$props7 = $$props,
      _$$props7$class = _$$props7["class"],
      className = _$$props7$class === void 0 ? undefined : _$$props7$class;
  var rest = {};

  function multiplyPoints(pointsString) {
    return (0, _multiplySvgPoints["default"])(pointsString, 56, width, height);
  }

  var _$$props8 = $$props,
      _$$props8$$$slots = _$$props8.$$slots,
      $$slots = _$$props8$$$slots === void 0 ? {} : _$$props8$$$slots,
      $$scope = _$$props8.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate(10, $$props = (0, _internal.assign)((0, _internal.assign)({}, $$props), (0, _internal.exclude_internal_props)($$new_props)));
    if ("width" in $$new_props) $$invalidate(0, width = $$new_props.width);
    if ("height" in $$new_props) $$invalidate(1, height = $$new_props.height);
    if ("color" in $$new_props) $$invalidate(2, color = $$new_props.color);
    if ("iconColor" in $$new_props) $$invalidate(3, iconColor = $$new_props.iconColor);
    if ("showIcon" in $$new_props) $$invalidate(4, showIcon = $$new_props.showIcon);
    if ("effect" in $$new_props) $$invalidate(8, effect = $$new_props.effect);
    if ("class" in $$new_props) $$invalidate(9, className = $$new_props["class"]);
    if ("$$scope" in $$new_props) $$invalidate(11, $$scope = $$new_props.$$scope);
  };

  var skeletonClassName;

  $$self.$$.update = function () {
    $: Object.keys($$props).forEach(function (prop) {
      if (prop !== "width" && prop !== "height" && prop !== "color" && prop !== "iconColor" && prop !== "showIcon" && prop !== "effect" && prop !== "class") {
        $$invalidate(5, rest[prop] = $$props[prop], rest);
      }
    });

    if ($$self.$$.dirty &
    /*effect, className*/
    768) {
      $: $$invalidate(6, skeletonClassName = ["skeleton-image", effect && "skeleton-effect-" + effect, className].filter(function (c) {
        return !!c;
      }).join(" "));
    }
  };

  $$props = (0, _internal.exclude_internal_props)($$props);
  return [width, height, color, iconColor, showIcon, rest, skeletonClassName, multiplyPoints, effect, className, $$props, $$scope, $$slots];
}

var SkeletonImage = /*#__PURE__*/function (_SvelteComponent) {
  _inheritsLoose(SkeletonImage, _SvelteComponent);

  function SkeletonImage(options) {
    var _this;

    _this = _SvelteComponent.call(this) || this;
    (0, _internal.init)(_assertThisInitialized(_this), options, instance, create_fragment, _internal.safe_not_equal, {
      width: 0,
      height: 1,
      color: 2,
      iconColor: 3,
      showIcon: 4,
      effect: 8,
      "class": 9
    });
    return _this;
  }

  return SkeletonImage;
}(_internal.SvelteComponent);

var _default = SkeletonImage;
exports["default"] = _default;