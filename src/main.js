import { createApp } from 'vue';

import { auth } from './firebase/firebaseConfig';
import App from './App.vue';
import router from './router';
import store from './store';

auth.onAuthStateChanged(function(user){
  console.log(user);
  createApp(App).use(store).use(router).mount('#app');
});
