import React from 'react';

const SkeletonBlock = ({
  tag: Tag = 'div',
  width,
  height,
  borderRadius,
  effect,
  className,
  style,
  children,
  ...other
} = {}) => {
  const skeletonStyle = style || {};
  if (width) skeletonStyle.width = width;
  if (height) skeletonStyle.height = height;
  if (borderRadius) skeletonStyle.borderRadius = borderRadius;

  const skeletonClassName = [
    'skeleton-block',
    effect && `skeleton-effect-${effect}`,
    className,
  ]
    .filter((c) => !!c)
    .join(' ');

  return (
    <Tag style={skeletonStyle} className={skeletonClassName} {...other}>
      {children}
    </Tag>
  );
};

export default SkeletonBlock;
