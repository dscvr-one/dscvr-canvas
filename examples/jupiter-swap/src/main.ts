import SolanaWallets from 'solana-wallets-vue';
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.use(SolanaWallets);

app.mount('#app');
