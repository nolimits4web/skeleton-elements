# Skeleton Elements Vue

Skeleton elements (aka UI Skeletons, Skeleton Screens, Ghost Elements) are basically "grey box" representations of UI that will be available (loaded) soon. They are designed to improve perceived performance.

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
npm i @skeleton-elements/vue --save
```

## Styles

Skeleton Elements requires stylesheet to be included:

```
<link rel="stylesheet" href="path/to/skeleton-elements.css>
```

Wiht bunder (like webpack) you can import syles directly from JavaScript:

```
import '@skeleton-elements/vue/skeleton-elements.css';
```

Or it can be included for each component separately:

* `@skeleton-elements/vue/skeleton-avatar.css` - Avatar component
* `@skeleton-elements/vue/skeleton-block.css` - Block component
* `@skeleton-elements/vue/skeleton-image.css` - Image component
* `@skeleton-elements/vue/skeleton-text.css` - Text component
* `@skeleton-elements/vue/skeleton-effects.css` - Effects

### SCSS

`SCSS` styles are also included:

* `@skeleton-elements/vue/skeleton-elements.scss` - All styles
* `@skeleton-elements/vue/skeleton-avatar.scss` - Avatar component
* `@skeleton-elements/vue/skeleton-block.scss` - Block component
* `@skeleton-elements/vue/skeleton-image.scss` - Image component
* `@skeleton-elements/vue/skeleton-text.scss` - Text component
* `@skeleton-elements/vue/skeleton-effects.scss` - Effects

## Components

The following components are available:

* `SkeletonAvatar` - responsive avatar placeholder
* `SkeletonBlock` - block placeholder
* `SkeletonImage` - responsive image placeholder
* `SkeletonText` - skeleton text (uses custom Skeleton font)

## Usage

See the [documentation]() for more examples and API documentation.

```html
<template>
  <div id="app">
    ...
    <div v-if="loading" class="user">
      <div class="user-avatar">
        <skeleton-avatar effect="fade" :size="120" />
      </div>
      <div class="user-name">
        <skeleton-text effect="fade">John Doe</skeleton-text>
      </div>
    </div>
    ...
  </div>
</template>
<script>
  // import Skeleton components
  import { SkeletonAvatar, SkeletonText } from '@skeleton-elements/vue';

  // import Skeleton styles
  import '@skeleton-elements/vue/skeleton-elements.css';

  export default {
    // register components
    components: {
      SkeletonAvatar,
      SkeletonText,
    },
    data() {
      return {
        loading: true,
      };
    },
  };
</script>
```

## Contribution

Yes please! See the [contributing guidelines](https://github.com/nolimits4web/skeleton-elements/blob/master/CONTRIBUTING.md) for details.

## Licence

This project is licensed under the terms of the [MIT license](https://github.com/nolimits4web/skeleton-elements/blob/master/LICENSE).
