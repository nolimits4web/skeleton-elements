<div class={`theme theme-${theme}`}>
  <div class="container">
    <p class="buttons">
      <button type="button" on:click={() => load('fade')}>Fade</button>
      <button type="button" on:click={() => load('pulse')}>Pulse</button>
      <button type="button" on:click={() => load('wave')}>Wave</button>

      <label>
        <input type="radio" checked={theme === 'light'} on:change={() => theme = 'light'} />
        <span>Light</span>
      </label>
      <label>
        <input type="radio" checked={theme === 'dark'} on:change={() => theme = 'dark'} />
        <span>Dark</span>
      </label>
    </p>

    <SkeletonText effect={effect} tag="h1">Loading Page Title</SkeletonText>
    <div class="demo-cols">
      <div class="demo-col">
        <SkeletonImage effect={effect} width={400} height={200} />
        <SkeletonText effect={effect} tag="h2">Loading Placeholder</SkeletonText>
        <SkeletonText effect={effect} tag="p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum animi nihil ullam! Asperiores recusandae ullam deleniti, modi adipisci omnis alias quis magnam quod quidem dolores exercitationem dolor repellendus neque ex.</SkeletonText>
      </div>
      <div class="demo-col">
        <ul class="demo-list">
          {#each demoListItems as item}
            <li class={effect ? `skeleton-effect-${effect}` : ''}>
              <div class="demo-list-avatar">
                <SkeletonAvatar size={100} />
              </div>
              <div class="demo-list-content">
                <SkeletonText tag="p" class="demo-list-title">{item.title}</SkeletonText>
                <SkeletonText tag="p" class="demo-list-description">{item.description}</SkeletonText>
                <SkeletonBlock width="30%" height="0.75em" />
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>
<script>
  import {
    SkeletonText,
    SkeletonBlock,
    SkeletonImage,
    SkeletonAvatar,
  } from '../../src/svelte';

  let effect = null;
  let theme = 'light';

  const demoItem = {
    title: 'Placeholder name',
    description: 'Lorem ipsum, dolor sit amet consectetur',
  }
  const demoListItems = Array.from({ length: 4 }).map((el) => ({ ...demoItem }));

  function load(eff) {
    if (effect) return;
    effect = eff;
    setTimeout(() => {
      effect = null;
    }, 3000);
  }
</script>
