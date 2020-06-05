import * as React from 'react';

interface SkeletonBlockOptions extends React.HTMLAttributes<HTMLElement> {
  /**
   * HTML element tag
   *
   * @default 'div'
   */
  tag: string;

  /**
   * Block CSS width
   *
   * @default undefined
   */
  width: string;

  /**
   * Block CSS height
   *
   * @default undefined
   */
  height: string;

  /**
   * Animation effectt
   */
  effect: 'fade' | 'pulse' | 'blink';
}

declare const SkeletonBlock: React.FunctionComponent<SkeletonBlockOptions>;

export default SkeletonBlock;
