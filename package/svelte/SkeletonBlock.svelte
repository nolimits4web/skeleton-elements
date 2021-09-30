{#if tag === 'div'}
  <div {...rest} style={skeletonStyle} class={skeletonClassName}><slot /></div>
{:else if tag === 'p'}
  <p {...rest} style={skeletonStyle} class={skeletonClassName}><slot /></p>
{:else if tag === 'h1'}
  <h1 {...rest} style={skeletonStyle} class={skeletonClassName}><slot /></h1>
{:else if tag === 'h2'}
  <h2 {...rest} style={skeletonStyle} class={skeletonClassName}><slot /></h2>
{:else if tag === 'h3'}
  <h3 {...rest} style={skeletonStyle} class={skeletonClassName}><slot /></h3>
{:else if tag === 'h4'}
  <h4 {...rest} style={skeletonStyle} class={skeletonClassName}><slot /></h4>
{:else if tag === 'h5'}
  <h5 {...rest} style={skeletonStyle} class={skeletonClassName}><slot /></h5>
{:else}
  <span {...rest} style={skeletonStyle} class={skeletonClassName}><slot /></span>
{/if}
<script>
  export let width = undefined;
  export let height = undefined;

  export let tag = 'div';
  export let effect = undefined;
  export let borderRadius = undefined;

  export let style = undefined;
  let className = undefined;
  export { className as class };

  let rest = {};
  $: Object.keys($$props).forEach((prop) => {
    if (
      prop !== 'width'
      && prop !== 'height'
      && prop !== 'tag'
      && prop !== 'effect'
      && prop !== 'style'
      && prop !== 'class'
    ) {
      rest[prop] = $$props[prop];
    }
  });

  $: skeletonStyle = style || '';
  $: if (width) skeletonStyle += `;width: ${width}`;
  $: if (height) skeletonStyle += `;height: ${height}`;
  $: if (borderRadius) skeletonStyle += `;border-radius: ${borderRadius}`;

  $: skeletonClassName = [
    'skeleton-block',
    effect && `skeleton-effect-${effect}`,
    className
  ]
    .filter(c => !!c)
    .join(' ');

</script>
