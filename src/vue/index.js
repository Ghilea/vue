import { createApp } from 'vue';
import { store } from './components/store';
import App from './components/app';
import Router from './components/routes';

const app = createApp(App);
app.use(store);
app.use(Router);
app.mount("#app");