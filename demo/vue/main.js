import Vue from 'vue';

import 'normalize.css';
import '../../src/skeleton-elements.scss';
import '../demo.scss';

import App from './App.vue';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: (h) => h(App),
});
