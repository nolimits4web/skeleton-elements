import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inheritsLoose from '@babel/runtime/helpers/inheritsLoose';

/* SkeletonText.svelte generated by Svelte v3.21.0 */
import {
  SvelteComponent,
  assign,
  check_outros,
  create_slot,
  detach,
  element,
  empty,
  exclude_internal_props,
  get_slot_changes,
  get_slot_context,
  get_spread_update,
  group_outros,
  init,
  insert,
  safe_not_equal,
  set_attributes,
  transition_in,
  transition_out,
} from 'svelte/internal';

function create_else_block(ctx) {
  var span;
  var current;
  var default_slot_template =
    /*$$slots*/
    ctx[7]['default'];
  var default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null,
  );
  var span_levels = [
    /*rest*/
    ctx[1],
    {
      class:
        /*skeletonClassName*/
        ctx[2],
    },
  ];
  var span_data = {};

  for (var i = 0; i < span_levels.length; i += 1) {
    span_data = assign(span_data, span_levels[i]);
  }

  return {
    c: function c() {
      span = element('span');
      if (default_slot) default_slot.c();
      set_attributes(span, span_data);
    },
    m: function m(target, anchor) {
      insert(target, span, anchor);

      if (default_slot) {
        default_slot.m(span, null);
      }

      current = true;
    },
    p: function p(ctx, dirty) {
      if (default_slot) {
        if (
          default_slot.p &&
          dirty &
            /*$$scope*/
            64
        ) {
          default_slot.p(
            get_slot_context(
              default_slot_template,
              ctx,
              /*$$scope*/
              ctx[6],
              null,
            ),
            get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx[6],
              dirty,
              null,
            ),
          );
        }
      }

      set_attributes(
        span,
        get_spread_update(span_levels, [
          dirty &
            /*rest*/
            2 &&
            /*rest*/
            ctx[1],
          dirty &
            /*skeletonClassName*/
            4 && {
            class:
              /*skeletonClassName*/
              ctx[2],
          },
        ]),
      );
    },
    i: function i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(span);
      if (default_slot) default_slot.d(detaching);
    },
  };
} // (13:23)

function create_if_block_6(ctx) {
  var h5;
  var current;
  var default_slot_template =
    /*$$slots*/
    ctx[7]['default'];
  var default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null,
  );
  var h5_levels = [
    /*rest*/
    ctx[1],
    {
      class:
        /*skeletonClassName*/
        ctx[2],
    },
  ];
  var h5_data = {};

  for (var i = 0; i < h5_levels.length; i += 1) {
    h5_data = assign(h5_data, h5_levels[i]);
  }

  return {
    c: function c() {
      h5 = element('h5');
      if (default_slot) default_slot.c();
      set_attributes(h5, h5_data);
    },
    m: function m(target, anchor) {
      insert(target, h5, anchor);

      if (default_slot) {
        default_slot.m(h5, null);
      }

      current = true;
    },
    p: function p(ctx, dirty) {
      if (default_slot) {
        if (
          default_slot.p &&
          dirty &
            /*$$scope*/
            64
        ) {
          default_slot.p(
            get_slot_context(
              default_slot_template,
              ctx,
              /*$$scope*/
              ctx[6],
              null,
            ),
            get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx[6],
              dirty,
              null,
            ),
          );
        }
      }

      set_attributes(
        h5,
        get_spread_update(h5_levels, [
          dirty &
            /*rest*/
            2 &&
            /*rest*/
            ctx[1],
          dirty &
            /*skeletonClassName*/
            4 && {
            class:
              /*skeletonClassName*/
              ctx[2],
          },
        ]),
      );
    },
    i: function i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(h5);
      if (default_slot) default_slot.d(detaching);
    },
  };
} // (11:23)

function create_if_block_5(ctx) {
  var h4;
  var current;
  var default_slot_template =
    /*$$slots*/
    ctx[7]['default'];
  var default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null,
  );
  var h4_levels = [
    /*rest*/
    ctx[1],
    {
      class:
        /*skeletonClassName*/
        ctx[2],
    },
  ];
  var h4_data = {};

  for (var i = 0; i < h4_levels.length; i += 1) {
    h4_data = assign(h4_data, h4_levels[i]);
  }

  return {
    c: function c() {
      h4 = element('h4');
      if (default_slot) default_slot.c();
      set_attributes(h4, h4_data);
    },
    m: function m(target, anchor) {
      insert(target, h4, anchor);

      if (default_slot) {
        default_slot.m(h4, null);
      }

      current = true;
    },
    p: function p(ctx, dirty) {
      if (default_slot) {
        if (
          default_slot.p &&
          dirty &
            /*$$scope*/
            64
        ) {
          default_slot.p(
            get_slot_context(
              default_slot_template,
              ctx,
              /*$$scope*/
              ctx[6],
              null,
            ),
            get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx[6],
              dirty,
              null,
            ),
          );
        }
      }

      set_attributes(
        h4,
        get_spread_update(h4_levels, [
          dirty &
            /*rest*/
            2 &&
            /*rest*/
            ctx[1],
          dirty &
            /*skeletonClassName*/
            4 && {
            class:
              /*skeletonClassName*/
              ctx[2],
          },
        ]),
      );
    },
    i: function i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(h4);
      if (default_slot) default_slot.d(detaching);
    },
  };
} // (9:23)

function create_if_block_4(ctx) {
  var h3;
  var current;
  var default_slot_template =
    /*$$slots*/
    ctx[7]['default'];
  var default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null,
  );
  var h3_levels = [
    /*rest*/
    ctx[1],
    {
      class:
        /*skeletonClassName*/
        ctx[2],
    },
  ];
  var h3_data = {};

  for (var i = 0; i < h3_levels.length; i += 1) {
    h3_data = assign(h3_data, h3_levels[i]);
  }

  return {
    c: function c() {
      h3 = element('h3');
      if (default_slot) default_slot.c();
      set_attributes(h3, h3_data);
    },
    m: function m(target, anchor) {
      insert(target, h3, anchor);

      if (default_slot) {
        default_slot.m(h3, null);
      }

      current = true;
    },
    p: function p(ctx, dirty) {
      if (default_slot) {
        if (
          default_slot.p &&
          dirty &
            /*$$scope*/
            64
        ) {
          default_slot.p(
            get_slot_context(
              default_slot_template,
              ctx,
              /*$$scope*/
              ctx[6],
              null,
            ),
            get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx[6],
              dirty,
              null,
            ),
          );
        }
      }

      set_attributes(
        h3,
        get_spread_update(h3_levels, [
          dirty &
            /*rest*/
            2 &&
            /*rest*/
            ctx[1],
          dirty &
            /*skeletonClassName*/
            4 && {
            class:
              /*skeletonClassName*/
              ctx[2],
          },
        ]),
      );
    },
    i: function i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(h3);
      if (default_slot) default_slot.d(detaching);
    },
  };
} // (7:23)

function create_if_block_3(ctx) {
  var h2;
  var current;
  var default_slot_template =
    /*$$slots*/
    ctx[7]['default'];
  var default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null,
  );
  var h2_levels = [
    /*rest*/
    ctx[1],
    {
      class:
        /*skeletonClassName*/
        ctx[2],
    },
  ];
  var h2_data = {};

  for (var i = 0; i < h2_levels.length; i += 1) {
    h2_data = assign(h2_data, h2_levels[i]);
  }

  return {
    c: function c() {
      h2 = element('h2');
      if (default_slot) default_slot.c();
      set_attributes(h2, h2_data);
    },
    m: function m(target, anchor) {
      insert(target, h2, anchor);

      if (default_slot) {
        default_slot.m(h2, null);
      }

      current = true;
    },
    p: function p(ctx, dirty) {
      if (default_slot) {
        if (
          default_slot.p &&
          dirty &
            /*$$scope*/
            64
        ) {
          default_slot.p(
            get_slot_context(
              default_slot_template,
              ctx,
              /*$$scope*/
              ctx[6],
              null,
            ),
            get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx[6],
              dirty,
              null,
            ),
          );
        }
      }

      set_attributes(
        h2,
        get_spread_update(h2_levels, [
          dirty &
            /*rest*/
            2 &&
            /*rest*/
            ctx[1],
          dirty &
            /*skeletonClassName*/
            4 && {
            class:
              /*skeletonClassName*/
              ctx[2],
          },
        ]),
      );
    },
    i: function i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(h2);
      if (default_slot) default_slot.d(detaching);
    },
  };
} // (5:23)

function create_if_block_2(ctx) {
  var h1;
  var current;
  var default_slot_template =
    /*$$slots*/
    ctx[7]['default'];
  var default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null,
  );
  var h1_levels = [
    /*rest*/
    ctx[1],
    {
      class:
        /*skeletonClassName*/
        ctx[2],
    },
  ];
  var h1_data = {};

  for (var i = 0; i < h1_levels.length; i += 1) {
    h1_data = assign(h1_data, h1_levels[i]);
  }

  return {
    c: function c() {
      h1 = element('h1');
      if (default_slot) default_slot.c();
      set_attributes(h1, h1_data);
    },
    m: function m(target, anchor) {
      insert(target, h1, anchor);

      if (default_slot) {
        default_slot.m(h1, null);
      }

      current = true;
    },
    p: function p(ctx, dirty) {
      if (default_slot) {
        if (
          default_slot.p &&
          dirty &
            /*$$scope*/
            64
        ) {
          default_slot.p(
            get_slot_context(
              default_slot_template,
              ctx,
              /*$$scope*/
              ctx[6],
              null,
            ),
            get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx[6],
              dirty,
              null,
            ),
          );
        }
      }

      set_attributes(
        h1,
        get_spread_update(h1_levels, [
          dirty &
            /*rest*/
            2 &&
            /*rest*/
            ctx[1],
          dirty &
            /*skeletonClassName*/
            4 && {
            class:
              /*skeletonClassName*/
              ctx[2],
          },
        ]),
      );
    },
    i: function i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(h1);
      if (default_slot) default_slot.d(detaching);
    },
  };
} // (3:22)

function create_if_block_1(ctx) {
  var _p;

  var current;
  var default_slot_template =
    /*$$slots*/
    ctx[7]['default'];
  var default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null,
  );
  var p_levels = [
    /*rest*/
    ctx[1],
    {
      class:
        /*skeletonClassName*/
        ctx[2],
    },
  ];
  var p_data = {};

  for (var i = 0; i < p_levels.length; i += 1) {
    p_data = assign(p_data, p_levels[i]);
  }

  return {
    c: function c() {
      _p = element('p');
      if (default_slot) default_slot.c();
      set_attributes(_p, p_data);
    },
    m: function m(target, anchor) {
      insert(target, _p, anchor);

      if (default_slot) {
        default_slot.m(_p, null);
      }

      current = true;
    },
    p: function p(ctx, dirty) {
      if (default_slot) {
        if (
          default_slot.p &&
          dirty &
            /*$$scope*/
            64
        ) {
          default_slot.p(
            get_slot_context(
              default_slot_template,
              ctx,
              /*$$scope*/
              ctx[6],
              null,
            ),
            get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx[6],
              dirty,
              null,
            ),
          );
        }
      }

      set_attributes(
        _p,
        get_spread_update(p_levels, [
          dirty &
            /*rest*/
            2 &&
            /*rest*/
            ctx[1],
          dirty &
            /*skeletonClassName*/
            4 && {
            class:
              /*skeletonClassName*/
              ctx[2],
          },
        ]),
      );
    },
    i: function i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(_p);
      if (default_slot) default_slot.d(detaching);
    },
  };
} // (1:0) {#if tag === 'div'}

function create_if_block(ctx) {
  var div;
  var current;
  var default_slot_template =
    /*$$slots*/
    ctx[7]['default'];
  var default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null,
  );
  var div_levels = [
    /*rest*/
    ctx[1],
    {
      class:
        /*skeletonClassName*/
        ctx[2],
    },
  ];
  var div_data = {};

  for (var i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }

  return {
    c: function c() {
      div = element('div');
      if (default_slot) default_slot.c();
      set_attributes(div, div_data);
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      current = true;
    },
    p: function p(ctx, dirty) {
      if (default_slot) {
        if (
          default_slot.p &&
          dirty &
            /*$$scope*/
            64
        ) {
          default_slot.p(
            get_slot_context(
              default_slot_template,
              ctx,
              /*$$scope*/
              ctx[6],
              null,
            ),
            get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx[6],
              dirty,
              null,
            ),
          );
        }
      }

      set_attributes(
        div,
        get_spread_update(div_levels, [
          dirty &
            /*rest*/
            2 &&
            /*rest*/
            ctx[1],
          dirty &
            /*skeletonClassName*/
            4 && {
            class:
              /*skeletonClassName*/
              ctx[2],
          },
        ]),
      );
    },
    i: function i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(div);
      if (default_slot) default_slot.d(detaching);
    },
  };
}

function create_fragment(ctx) {
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var current;
  var if_block_creators = [
    create_if_block,
    create_if_block_1,
    create_if_block_2,
    create_if_block_3,
    create_if_block_4,
    create_if_block_5,
    create_if_block_6,
    create_else_block,
  ];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
      /*tag*/
      ctx[0] === 'div'
    )
      return 0;
    if (
      /*tag*/
      ctx[0] === 'p'
    )
      return 1;
    if (
      /*tag*/
      ctx[0] === 'h1'
    )
      return 2;
    if (
      /*tag*/
      ctx[0] === 'h2'
    )
      return 3;
    if (
      /*tag*/
      ctx[0] === 'h3'
    )
      return 4;
    if (
      /*tag*/
      ctx[0] === 'h4'
    )
      return 5;
    if (
      /*tag*/
      ctx[0] === 'h5'
    )
      return 6;
    return 7;
  }

  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[
    current_block_type_index
  ](ctx);
  return {
    c: function c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m: function m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var dirty = _ref[0];
      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx, dirty);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[
            current_block_type_index
          ](ctx);
          if_block.c();
        }

        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function o(local) {
      transition_out(if_block);
      current = false;
    },
    d: function d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) detach(if_block_anchor);
    },
  };
}

function instance($$self, $$props, $$invalidate) {
  var _$$props = $$props,
    _$$props$tag = _$$props.tag,
    tag = _$$props$tag === void 0 ? 'span' : _$$props$tag;
  var _$$props2 = $$props,
    _$$props2$effect = _$$props2.effect,
    effect = _$$props2$effect === void 0 ? undefined : _$$props2$effect;
  var _$$props3 = $$props,
    _$$props3$class = _$$props3['class'],
    className = _$$props3$class === void 0 ? undefined : _$$props3$class;
  var rest = {};
  var _$$props4 = $$props,
    _$$props4$$$slots = _$$props4.$$slots,
    $$slots = _$$props4$$$slots === void 0 ? {} : _$$props4$$$slots,
    $$scope = _$$props4.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate(
      5,
      ($$props = assign(
        assign({}, $$props),
        exclude_internal_props($$new_props),
      )),
    );
    if ('tag' in $$new_props) $$invalidate(0, (tag = $$new_props.tag));
    if ('effect' in $$new_props) $$invalidate(3, (effect = $$new_props.effect));
    if ('class' in $$new_props)
      $$invalidate(4, (className = $$new_props['class']));
    if ('$$scope' in $$new_props)
      $$invalidate(6, ($$scope = $$new_props.$$scope));
  };

  var skeletonClassName;

  $$self.$$.update = function () {
    $: Object.keys($$props).forEach(function (prop) {
      if (prop !== 'tag' && prop !== 'effect' && prop !== 'class') {
        $$invalidate(1, (rest[prop] = $$props[prop]), rest);
      }
    });

    if (
      $$self.$$.dirty &
      /*effect, className*/
      24
    ) {
      $: $$invalidate(
        2,
        (skeletonClassName = [
          'skeleton-text',
          effect && 'skeleton-effect-' + effect,
          className,
        ]
          .filter(function (c) {
            return !!c;
          })
          .join(' ')),
      );
    }
  };

  $$props = exclude_internal_props($$props);
  return [
    tag,
    rest,
    skeletonClassName,
    effect,
    className,
    $$props,
    $$scope,
    $$slots,
  ];
}

var SkeletonText = /*#__PURE__*/ (function (_SvelteComponent) {
  _inheritsLoose(SkeletonText, _SvelteComponent);

  function SkeletonText(options) {
    var _this;

    _this = _SvelteComponent.call(this) || this;
    init(
      _assertThisInitialized(_this),
      options,
      instance,
      create_fragment,
      safe_not_equal,
      {
        tag: 0,
        effect: 3,
        class: 4,
      },
    );
    return _this;
  }

  return SkeletonText;
})(SvelteComponent);

export default SkeletonText;