import { createApp } from 'vue';

import 'normalize.css';
import '../../src/scss/skeleton-elements.scss';
import '../demo.scss';

import App from './App.vue';

const app = createApp(App);

app.mount('#app');
