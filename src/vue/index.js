import { createApp } from 'vue';
import { store } from './components/store';
import App from './components/app';

const app = createApp(App);
app.use(store);
app.mount("#app");