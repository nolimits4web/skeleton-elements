import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';

declare const SkeletonAvatar: DefineComponent<
  {
    /**
     * HTML element tag
     *
     * @default 'span'
     */
    tag: {
      type: StringConstructor;
    };

    /**
     * Avatar size in px
     *
     * @default 48
     */
    size: {
      type: NumberConstructor;
    };

    /**
     * CSS color
     *
     * @default undefined
     */
    color: {
      type: StringConstructor;
    };

    /**
     * Defines whether to show icon or not
     *
     * @default true
     */
    showIcon: {
      type: BooleanConstructor;
    };

    /**
     * Icon CSS color
     */
    iconColor: {
      type: StringConstructor;
    };

    /**
     * Avatar CSS border radius
     *
     * @default '50%''
     */
    borderRadius: {
      type: StringConstructor;
    };

    /**
     * Animation effect
     */
    effect: {
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

export default SkeletonAvatar;
