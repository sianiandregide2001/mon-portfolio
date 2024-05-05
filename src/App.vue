<template>
  <div id="app">
    <AppHeader/>
    <main> <!-- Ajoutez une marge supérieure pour éviter le chevauchement -->
      <router-view />
      <Home/>
      <AppContact/>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/Header.vue';
import AppFooter from './components/Footer.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Importez les composants pour les différentes pages ici
import Home from './components/Home.vue';
import AppCreations from './components/Creations.vue';
import AppContact from './components/Contact.vue';
import NotFound from './components/NotFound.vue';


const routes = [
  { path: '/', name: 'Accueil', component: Home },
  { path: '/contact', name: 'Contact', component: AppContact },
  { path: '/Creations',   name: 'Creations',component: AppCreations},
  { path: '/:catchAll(.*)',component: NotFound,},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default {
  name: 'App',
  components: {
    AppHeader,
    Home,
    AppContact,
    AppFooter,
    
  },
  router,
};
</script>

<style>
/* Style pour l'élément racine de l'application */
#app {
  font-family: 'Times New Roman', sans-serif; /* Utilisation d'une police de caractères générique */
  margin: 0; /* Réinitialisation des marges */
  padding: 0; /* Réinitialisation des rembourrages */
}
/* Style pour le contenu principal */
main {
  margin-top: 100px; /* Ajoutez une marge supérieure pour éviter le chevauchement avec l'en-tête */
  padding: 20px; /* Ajoutez un espacement intérieur pour le contenu */
}

/* Style pour les liens de navigation */
nav a {
  text-decoration: none; /* Supprimez la soulignement des liens */
  color: #333; /* Couleur de texte pour les liens */
}

nav a:hover {
  color: #007bff; /* Couleur de texte au survol */
}


</style>
