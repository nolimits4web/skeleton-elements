import * as React from 'react';

interface SkeletonImageOptions extends React.HTMLAttributes<HTMLElement> {
  /**
   * HTML element tag
   *
   * @default 'span'
   */
  tag: string;

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

declare const SkeletonImage: React.FunctionComponent<SkeletonImageOptions>;

export default SkeletonImage;
