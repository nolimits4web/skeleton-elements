import { SvelteComponentTyped } from 'svelte';

interface SkeletonImageProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  /**
   * Image width in px
   *
   * @default 1200
   */
  width: number;

  /**
   * Image height in px
   *
   * @default 600
   */
  height: number;

  /**
   * CSS color
   *
   * @default undefined
   */
  color: string;

  /**
   * Defines whether to show icon or not
   *
   * @default true
   */
  showIcon: boolean;

  /**
   * Icon CSS color
   */
  iconColor: string;

  /**
   * Animation effect
   */
  effect: 'fade' | 'pulse' | 'blink' | 'wave';

  /**
   * Border radius
   *
   * @default undefined
   */
  borderRadius: string;
}

class SkeletonImage extends SvelteComponentTyped<
  SkeletonImageProps,
  {},
  { default: {} }
> {}

export default SkeletonImage;
