import React from 'react';

const SkeletonText = ({ tag: Tag = 'span', className, children, ...other }) => {
  const skeletonClassName = `skeleton-text${className ? ` ${className}` : ''}`;

  return (
    <Tag className={skeletonClassName} {...other}>{children}</Tag>
  )
};

export default SkeletonText;
