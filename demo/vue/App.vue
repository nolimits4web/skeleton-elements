<template>
  <div :class="`theme theme-${theme}`">
    <div class="container">
      <p class="buttons">
        <button type="button" @click="load('fade')">Fade</button>
        <button type="button" @click="load('pulse')">Pulse</button>
        <button type="button" @click="load('wave')">Wave</button>

        <label>
          <input
            type="radio"
            :checked="theme === 'light'"
            @change="theme = 'light'"
          />
          <span>Light</span>
        </label>
        <label>
          <input
            type="radio"
            :checked="theme === 'dark'"
            @change="theme = 'dark'"
          />
          <span>Dark</span>
        </label>
      </p>

      <skeleton-text :effect="effect" tag="h1"
        >Loading Page Title</skeleton-text
      >
      <div class="demo-cols">
        <div class="demo-col">
          <skeleton-image :effect="effect" :width="400" :height="200" />
          <skeleton-text :effect="effect" tag="h2"
            >Loading Placeholder</skeleton-text
          >
          <skeleton-text :effect="effect" tag="p"
            >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            animi nihil ullam! Asperiores recusandae ullam deleniti, modi
            adipisci omnis alias quis magnam quod quidem dolores exercitationem
            dolor repellendus neque ex.</skeleton-text
          >
        </div>
        <div class="demo-col">
          <ul class="demo-list">
            <li
              v-for="(item, itemIndex) in demoListItems"
              :key="itemIndex"
              :class="effect ? `skeleton-effect-${effect}` : ''"
            >
              <div class="demo-list-avatar">
                <skeleton-avatar :size="100" />
              </div>
              <div class="demo-list-content">
                <skeleton-text tag="p" class="demo-list-title">{{
                  item.title
                }}</skeleton-text>
                <skeleton-text tag="p" class="demo-list-description">{{
                  item.description
                }}</skeleton-text>
                <skeleton-block width="30%" height="0.75em" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    SkeletonText,
    SkeletonBlock,
    SkeletonImage,
    SkeletonAvatar,
  } from '../../src/vue';

  export default {
    components: {
      SkeletonText,
      SkeletonBlock,
      SkeletonImage,
      SkeletonAvatar,
    },
    data() {
      const demoItem = {
        title: 'Placeholder name',
        description: 'Lorem ipsum, dolor sit amet consectetur',
      };
      return {
        effect: null,
        theme: 'light',
        demoListItems: Array.from({ length: 4 }).map((el) => ({ ...demoItem })),
      };
    },
    methods: {
      load(eff) {
        if (this.effect) return;
        this.effect = eff;
        setTimeout(() => {
          this.effect = null;
        }, 3000);
      },
    },
  };
</script>
