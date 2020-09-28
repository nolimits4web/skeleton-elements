# Skeleton Elements React

Skeleton elements (aka UI Skeletons, Skeleton Screens, Ghost Elements) - UI for improved perceived performance

* [Documentation](#documentation)
* [Installation](#installation)
* [Styles](#styles)
* [Components](#components)
* [Usage](#usage)
* [Contribution](#contribution)
* [Licence](#licence)

## Documentation

See the [documentation]() with examples and API documentation.

## Installation

With npm:

```
npm i skeleton-elements --save
```

## Styles

Skeleton Elements requires stylesheet to be included:

```
<link rel="stylesheet" href="path/to/skeleton-elements.css>
```

Wiht bunder (like webpack) you can import syles directly from JavaScript:

```
import 'skeleton-elements/skeleton-elements.css';
```

Or it can be included for each component separately:

* `skeleton-elements/skeleton-avatar.css` - Avatar component
* `skeleton-elements/skeleton-block.css` - Block component
* `skeleton-elements/skeleton-image.css` - Image component
* `skeleton-elements/skeleton-text.css` - Text component
* `skeleton-elements/skeleton-effects.css` - Effects

### SCSS

`SCSS` styles are also included:

* `skeleton-elements/skeleton-elements.scss` - All styles
* `skeleton-elements/skeleton-avatar.scss` - Avatar component
* `skeleton-elements/skeleton-block.scss` - Block component
* `skeleton-elements/skeleton-image.scss` - Image component
* `skeleton-elements/skeleton-text.scss` - Text component
* `skeleton-elements/skeleton-effects.scss` - Effects

## Components

The following components are available:

* `SkeletonAvatar` - responsive avatar placeholder
* `SkeletonBlock` - block placeholder
* `SkeletonImage` - responsive image placeholder
* `SkeletonText` - skeleton text (uses custom Skeleton font)

## Usage

See the [documentation](https://skeleton-elements.dev/react/) with examples and API documentation.

```jsx
import React, { useState } from 'react';

// import Skeleton components
import { SkeletonAvatar, SkeletonText } from 'skeleton-elements/react';

// import Skeleton styles
import 'skeleton-elements/skeleton-elements.css';

const App = () => {
  const [ loading, setLoading ] = useState(true);
  // ...
  return (
    <div id="app">
      ...
      {loading && (
        <div className="user">
          <div className="user-avatar">
            <SkeletonAvatar effect="fade" size={120} />
          </div>
          <div className="user-name">
            <SkeletonText effect="fade">John Doe</SkeletonText>
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

Yes please! See the [contributing guidelines](https://github.com/nolimits4web/skeleton-elements/blob/master/CONTRIBUTING.md) for details.

## Licence

This project is licensed under the terms of the [MIT license](https://github.com/nolimits4web/skeleton-elements/blob/master/LICENSE).
