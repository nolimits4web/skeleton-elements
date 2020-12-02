import * as React from 'react';

interface SkeletonBlockOptions extends React.HTMLAttributes<HTMLElement> {
  /**
   * HTML element tag
   *
   * @default 'div'
   */
  tag: string;

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

declare const SkeletonBlock: React.FunctionComponent<SkeletonBlockOptions>;

export default SkeletonBlock;
