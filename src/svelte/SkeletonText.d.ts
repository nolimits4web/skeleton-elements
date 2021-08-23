import { SvelteComponentTyped } from 'svelte';

interface SkeletonTextProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  /**
   * Animation effect
   */
  effect: 'fade' | 'pulse' | 'blink' | 'wave';
}

class SkeletonText extends SvelteComponentTyped<
  SkeletonTextProps,
  {},
  { default: {} }
> {}

export default SkeletonText;
