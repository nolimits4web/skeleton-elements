import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';

declare const SkeletonBlock: DefineComponent<
  {
    /**
     * HTML element tag
     *
     * @default 'div'
     */
    tag: {
      type: StringConstructor;
    };

    /**
     * Avatar block CSS width
     *
     * @default undefined
     */
    width: {
      type: StringConstructor;
    };

    /**
     * Avatar block CSS height
     *
     * @default undefined
     */
    height: {
      type: StringConstructor;
    };

    /**
     * Animation effect
     */
    effect: {
      type: StringConstructor;
    };

    /**
     * Border radius
     *
     * @default undefined
     */
    borderRadius: {
      type: StringConstructor;
    };
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin
>;

export default SkeletonBlock;
