import { SvelteComponentTyped } from 'svelte';

interface SkeletonAvatarProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  /**
   * Avatar size in px
   *
   * @default 48
   */
  size: number;

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
   * Avatar CSS border radius
   *
   * @default '50%''
   */
  borderRadius: string;

  /**
   * Animation effect
   */
  effect: 'fade' | 'pulse' | 'blink' | 'wave';
}

class SkeletonAvatar extends SvelteComponentTyped<
  SkeletonAvatarProps,
  {},
  { default: {} }
> {}

export default SkeletonAvatar;
