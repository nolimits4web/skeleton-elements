import * as React from 'react';

interface SkeletonAvatarOptions extends React.HTMLAttributes<HTMLElement> {
  /**
   * HTML element tag
   *
   * @default 'span'
   */
  tag: string;

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

declare const SkeletonAvatar: React.FunctionComponent<SkeletonAvatarOptions>;

export default SkeletonAvatar;
