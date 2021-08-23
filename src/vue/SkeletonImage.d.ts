import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';

declare const SkeletonImage: DefineComponent<
  {
    /**
     * HTML element tag
     *
     * @default 'span'
     */
    tag: { type: StringConstructor };

    /**
     * Image width in px
     *
     * @default 1200
     */
    width: { type: NumberConstructor };

    /**
     * Image height in px
     *
     * @default 600
     */
    height: { type: NumberConstructor };

    /**
     * CSS color
     *
     * @default undefined
     */
    color: { type: StringConstructor };

    /**
     * Defines whether to show icon or not
     *
     * @default true
     */
    showIcon: { type: BooleanConstructor };

    /**
     * Icon CSS color
     */
    iconColor: { type: StringConstructor };

    /**
     * Animation effect
     */
    effect: { type: StringConstructor };

    /**
     * Border radius
     *
     * @default undefined
     */
    borderRadius: { type: StringConstructor };
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin
>;

export default SkeletonImage;
