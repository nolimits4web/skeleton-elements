# Skeleton Elements Svelte

Skeleton elements (aka UI Skeletons, Skeleton Screens, Ghost Elements) - UI for improved perceived performance

* [Documentation](#documentation)
* [Installation](#installation)
* [Styles](#styles)
* [Components](#components)
* [Usage](#usage)
* [Contribution](#contribution)
* [Licence](#licence)

## Documentation

See the [documentation](https://skeleton-elements.dev/svelte/) with examples and API documentation.

## Installation

With npm:

```
npm i @skeleton-elements/svelte --save
```

## Styles

Skeleton Elements requires stylesheet to be included:

```
<link rel="stylesheet" href="path/to/skeleton-elements.css>
```

Wiht bunder (like webpack) you can import syles directly from JavaScript:

```
import '@skeleton-elements/svelte/skeleton-elements.css';
```

Or it can be included for each component separately:

* `@skeleton-elements/svelte/skeleton-avatar.css` - Avatar component
* `@skeleton-elements/svelte/skeleton-block.css` - Block component
* `@skeleton-elements/svelte/skeleton-image.css` - Image component
* `@skeleton-elements/svelte/skeleton-text.css` - Text component
* `@skeleton-elements/svelte/skeleton-effects.css` - Effects

### SCSS

`SCSS` styles are also included:

* `@skeleton-elements/svelte/skeleton-elements.scss` - All styles
* `@skeleton-elements/svelte/skeleton-avatar.scss` - Avatar component
* `@skeleton-elements/svelte/skeleton-block.scss` - Block component
* `@skeleton-elements/svelte/skeleton-image.scss` - Image component
* `@skeleton-elements/svelte/skeleton-text.scss` - Text component
* `@skeleton-elements/svelte/skeleton-effects.scss` - Effects

## Components

The following components are available:

* `SkeletonAvatar` - responsive avatar placeholder
* `SkeletonBlock` - block placeholder
* `SkeletonImage` - responsive image placeholder
* `SkeletonText` - skeleton text (uses custom Skeleton font)

## Usage

See the [documentation]() for more examples and API documentation.

```html
<div id="app">
  ...
  {#if loading}
    <div class="user">
      <div class="user-avatar">
        <SkeletonAvatar effect="fade" size={120} />
      </div>
      <div class="user-name">
        <SkeletonText effect="fade">John Doe</SkeletonText>
      </div>
    </div>
  {/if}
  ...
</div>
<script>
  // import Skeleton components
  import { SkeletonAvatar, SkeletonText } from '@skeleton-elements/svelte';

  // import Skeleton styles
  import '@skeleton-elements/svelte/skeleton-elements.css';

  let loading = true;
</script>
```

## Contribution

Yes please! See the [contributing guidelines](https://github.com/nolimits4web/skeleton-elements/blob/master/CONTRIBUTING.md) for details.

## Licence

This project is licensed under the terms of the [MIT license](https://github.com/nolimits4web/skeleton-elements/blob/master/LICENSE).
