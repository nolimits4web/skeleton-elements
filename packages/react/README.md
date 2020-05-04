# Skeleton Elements React

## Documentation

See the [documentation]() with examples and API documentation.

## Installation

With npm:

```
npm i @skeleton-elements/react --save
```

## Styles

Skeleton Elements requires stylesheet to be included:

```
<link rel="stylesheet" href="path/to/skeleton-elements.css>
```

Wiht bunder (like webpack) you can import syles directly from JavaScript:

```
import '@skeleton-elements/react/skeleton-elements.css';
```

Or it can be included for each component separately:

* `@skeleton-elements/react/skeleton-avatar.css` - Avatar component
* `@skeleton-elements/react/skeleton-block.css` - Block component
* `@skeleton-elements/react/skeleton-image.css` - Image component
* `@skeleton-elements/react/skeleton-text.css` - Text component
* `@skeleton-elements/react/skeleton-effects.css` - Effects

### SCSS

`SCSS` styles are also included:

* `@skeleton-elements/react/skeleton-elements.scss` - All styles
* `@skeleton-elements/react/skeleton-avatar.scss` - Avatar component
* `@skeleton-elements/react/skeleton-block.scss` - Block component
* `@skeleton-elements/react/skeleton-image.scss` - Image component
* `@skeleton-elements/react/skeleton-text.scss` - Text component
* `@skeleton-elements/react/skeleton-effects.scss` - Effects

## Components

There are following elements are available:

* `SkeletonAvatar` - responsive avatar placeholder
* `SkeletonBlock` - block placeholder
* `SkeletonImage` - responsive image placeholder
* `SkeletonText` - skeleton text (uses custom Skeleton font)

## Usage

See the [documentation]() for more examples and API documentation.

```jsx
import React, { useState } from 'react';
import { SkeletonAvatar, SkeletonText } from '@skeleton-elements/react';

const App = () => {
  const [ loading, setLoading ] = useState(true);
  // ...
  return (
    <div id="app">
      { /*... */ }
      {loading && (
        <div class="user">
          <div class="user-avatar">
            <SkeletonAvatar size={120} />
          </div>
          <div class="user-name">
            <SkeletonText>John Doe</SkeletonText>
          </div>
        </div>
      )}
      ...
    </div>
  );
}

export default App;
```

## Contribution

Yes please! See the [contributing guidelines]() for details.

## Licence

This project is licensed under the terms of the [MIT license](https://github.com/nolimits4web/skeleton-elements/blob/master/LICENSE).
