# Skeleton Elements

## Documentation

See the [documentation]() with examples and API documentation.

## Installation

With npm:

```
npm i @skeleton-elements/core --save
```

## Styles

Skeleton Elements requires stylesheet to be included:

```
<link rel="stylesheet" href="path/to/skeleton-elements.css>
```

Wiht bunder (like webpack) you can import syles directly from JavaScript:

```
import '@skeleton-elements/core/skeleton-elements.css';
```

Or it can be included for each component separately:

* `@skeleton-elements/core/skeleton-block.css` - Block component
* `@skeleton-elements/core/skeleton-text.css` - Text component
* `@skeleton-elements/core/skeleton-effects.css` - Effects

### SCSS

`SCSS` styles are also included:

* `@skeleton-elements/core/skeleton-elements.scss` - All styles
* `@skeleton-elements/core/skeleton-block.scss` - Block component
* `@skeleton-elements/core/skeleton-text.scss` - Text component
* `@skeleton-elements/core/skeleton-effects.scss` - Effects

## Usage

See the [documentation]() for more examples and API documentation.

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
