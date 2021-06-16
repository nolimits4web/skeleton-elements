# Skeleton Elements

Skeleton elements (aka UI Skeletons, Skeleton Screens, Ghost Elements) - UI for improved perceived performance

* [Documentation](#documentation)
* [Installation](#installation)
* [Styles](#styles)
* [Usage](#usage)
* [Contribution](#contribution)
* [Licence](#licence)

## Documentation

See the [documentation](https://skeleton-elements.dev/) with examples and API documentation.

## Installation

With npm:

```
npm i skeleton-elements --save
```

## Styles

Skeleton Elements requires stylesheet to be included:

```
<link rel="stylesheet" href="path/to/skeleton-elements.css" />
```

With bundler (like webpack) you can import styles directly from JavaScript:

```
import 'skeleton-elements/skeleton-elements.css';
```

Or it can be included for each component separately:

* `skeleton-elements/skeleton-block.css` - Block component
* `skeleton-elements/skeleton-text.css` - Text component
* `skeleton-elements/skeleton-effects.css` - Effects

### SCSS

`SCSS` styles are also included:

* `skeleton-elements/skeleton-elements.scss` - All styles
* `skeleton-elements/skeleton-block.scss` - Block component
* `skeleton-elements/skeleton-text.scss` - Text component
* `skeleton-elements/skeleton-effects.scss` - Effects

## Usage

See the [documentation](https://skeleton-elements.dev) for more examples and API documentation.

```html
<style>
  .user-avatar .skeleton-block {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
</style>
<div id="app">
  ...
  <div class="user">
    <div class="user-avatar">
      <div class="skeleton-block skeleton-effect-fade"></div>
    </div>
    <div class="user-name">
      <span class="skeleton-text skeleton-effect-fade">John Doe</span>
    </div>
  </div>
  ...
</div>

```

## Contribution

Yes please! See the [contributing guidelines](https://github.com/nolimits4web/skeleton-elements/blob/master/CONTRIBUTING.md) for details.

## Licence

This project is licensed under the terms of the [MIT license](https://github.com/nolimits4web/skeleton-elements/blob/master/LICENSE).
