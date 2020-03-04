import 'normalize.css';
import '../../src/skeleton-elements.scss';
import '../demo.scss';

import App from './App.svelte';

const app = new App({
  target: document.getElementById('app'),
});