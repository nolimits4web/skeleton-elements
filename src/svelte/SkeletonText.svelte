{#if tag === 'div'}
  <div {...rest} class={skeletonClassName}><slot /></div>
{:else if tag === 'p'}
  <p {...rest} class={skeletonClassName}><slot /></p>
{:else if tag === 'h1'}
  <h1 {...rest} class={skeletonClassName}><slot /></h1>
{:else if tag === 'h2'}
  <h2 {...rest} class={skeletonClassName}><slot /></h2>
{:else if tag === 'h3'}
  <h3 {...rest} class={skeletonClassName}><slot /></h3>
{:else if tag === 'h4'}
  <h4 {...rest} class={skeletonClassName}><slot /></h4>
{:else if tag === 'h5'}
  <h5 {...rest} class={skeletonClassName}><slot /></h5>
{:else}
  <span {...rest} class={skeletonClassName}><slot /></span>
{/if}
<script>
  export let tag = 'span';
  export let effect = undefined;

  let className = undefined;
  export { className as class };

  const rest = {};

  $: Object.keys($$props).forEach((prop) => {
    if (
      prop !== 'tag'
      && prop !== 'effect'
      && prop !== 'class'
    ) {
      rest[prop] = $$props[prop];
    }
  });

  $: skeletonClassName = [
    'skeleton-text',
    effect && `skeleton-effect-${effect}`,
    className
  ]
    .filter(c => !!c)
    .join(' ');

</script>
