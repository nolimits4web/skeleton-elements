import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';

declare const SkeletonText: DefineComponent<
  {
    /**
     * HTML element tag
     *
     * @default 'span'
     */
    tag: { type: StringConstructor };

    /**
     * Animation effect
     */
    effect: { type: StringConstructor };
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin
>;

export default SkeletonText;
