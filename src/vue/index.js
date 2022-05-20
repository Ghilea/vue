import { createApp } from 'vue';
import { store } from '@comp/store';
import App from '@comp/app';
import Router from '@comp/routes';

const app = createApp(App);
app.use(store);
app.use(Router);
app.mount("#app");