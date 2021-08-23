import { SvelteComponentTyped } from 'svelte';

interface SkeletonBlockProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  /**
   * Avatar block CSS width
   *
   * @default undefined
   */
  width: string;

  /**
   * Avatar block CSS height
   *
   * @default undefined
   */
  height: string;

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

class SkeletonBlock extends SvelteComponentTyped<
  SkeletonBlockProps,
  {},
  { default: {} }
> {}

export default SkeletonBlock;
