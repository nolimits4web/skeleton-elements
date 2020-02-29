import React from 'react';

const SkeletonText = ({
  tag: Tag = 'span',
  effect,
  className,
  children,
  ...other
} = {}) => {
  const skeletonClassName = [
    'skeleton-text',
    effect && `skeleton-effect-${effect}`,
    className
  ]
    .filter(c => !!c)
    .join(' ');

  return (
    <Tag className={skeletonClassName} {...other}>{children}</Tag>
  )
};

export default SkeletonText;
