import 'normalize.css';
import '../../src/skeleton-elements.scss';
import '../demo.scss';

import App from './App.svelte';

// eslint-disable-next-line no-new
new App({
  target: document.getElementById('app'),
});
