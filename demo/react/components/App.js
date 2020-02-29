import React from 'react';
import { SkeletonText, SkeletonBlock, SkeletonImage, SkeletonAvatar } from '../../../src/react';

const App = () => {
  return (
    <div className="container">
      <p>Hello 2</p>
      <p>
        <SkeletonText>Opa</SkeletonText>
      </p>
      <SkeletonBlock tag="p" width="300px" />
      <SkeletonBlock tag="p" width="600px" />
      <p>
        <SkeletonImage width={96} height={96} />
      </p>
      <p>
        <SkeletonAvatar size={320} />
      </p>
    </div>
  );
};

export default App;
