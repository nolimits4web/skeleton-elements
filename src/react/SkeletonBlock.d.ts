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
   * Animation effectt
   */
  effect: 'fade' | 'pulse' | 'blink' | 'wave';
}

declare const SkeletonBlock: React.FunctionComponent<SkeletonBlockOptions>;

export default SkeletonBlock;
