<span
  {...rest}
  class={skeletonClassName}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    preserveAspectRatio="none"
  >
    <rect
      width={size}
      height={size}
      fillRule="evenodd"
      style={color ? `fill: ${color}` : ''}
      rx={borderRadius}
    />
    {#if showIcon}
      <path style={color ? `fill: ${iconColor}` : ''} d={multiplyPoints('M28.22461,27.1590817 C34.9209931,27.1590817 40.6829044,21.1791004 40.6829044,13.3926332 C40.6829044,5.69958662 34.8898972,0 28.22461,0 C21.5594557,0 15.7663156,5.82423601 15.7663156,13.4549579 C15.7663156,21.1791004 21.5594557,27.1590817 28.22461,27.1590817 Z M8.66515427,56 L47.7841986,56 C52.6739629,56 54.4181241,54.5984253 54.4181241,51.8576005 C54.4181241,43.8219674 44.358068,32.7341519 28.22461,32.7341519 C12.0600561,32.7341519 2,43.8219674 2,51.8576005 C2,54.5984253 3.74402832,56 8.66515427,56 Z')}/>
    {/if}
  </svg>
  <slot />
</span>
<script>
  import multiplySvgPoints from '../utils/multiply-svg-points.js';

  export let size = 48;

  export let color = undefined;
  export let iconColor = undefined;
  export let showIcon = true;
  export let borderRadius = '50%';
  export let effect = undefined;

  let className = undefined;
  export { className as class };

  let rest = {};
  $: Object.keys($$props).forEach((prop) => {
    if (
      prop !== 'size'
      && prop !== 'color'
      && prop !== 'iconColor'
      && prop !== 'showIcon'
      && prop !== 'effect'
      && prop !== 'borderRadius'
      && prop !== 'class'
    ) {
      rest[prop] = $$props[prop];
    }
  });

  $: skeletonClassName = [
    'skeleton-avatar',
    effect && `skeleton-effect-${effect}`,
    className
  ]
    .filter(c => !!c)
    .join(' ');

  function multiplyPoints(pointsString) {
    return multiplySvgPoints(pointsString, 56, size, size);
  }

</script>
