import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Creations from './components/Creations.vue';
import Contact from './components/Contact.vue';
import NotFound from './components/NotFound.vue';


// Configuration de Vue Router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Creations',
      name: 'Creations',
      component: Creations
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/:catchAll(.*)', // Catch-all route for any unmatched paths
      component: NotFound,
    },
  ]
});

// Création de l'instance Vue.js
createApp(App)
  .use(router)
  .mount('#app');
