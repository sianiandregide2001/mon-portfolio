<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="creations">
      <div v-for="(creation, index) in creations" :key="index" class="creation">
        <img :src="creation.image" :alt="creation.title" class="creation-image" @click="openModal(creation)">
        <h3 class="creation-title">{{ creation.title }}</h3>
      </div>
      <Modal :isOpen="isModalOpen" :creation="selectedCreation" @close="closeModal" />
    </div>
  </template>
  
  <script>
  import Modal from './Modal.vue'; // Importer le composant Modal
  
  export default {
    components: {
      Modal
    },
    data() {
      return {
        creations: [
          {
            title: 'Mon cv',
            image: 'chemin/vers/image1.jpg',
            date: '01/01/2022',
            technologies: 'HTML, CSS',
            github: 'lien-vers-github1'
          },
          {
            title: 'Projet 2',
            image: 'chemin/vers/image2.jpg',
            date: '02/01/2022',
            technologies: 'React, JavaScript, Bootstrap',
            github: 'lien-vers-github2'
          },
          {
            title: 'Projet 3',
            image: 'chemin/vers/image3.jpg',
            date: '03/01/2022',
            technologies: 'Angular, TypeScript, SCSS',
            website: 'lien-vers-site3',
            github: '' // Aucun repository GitHub pour ce projet
          }
        ],
        isModalOpen: false,
        selectedCreation: null
      };
    },
    methods: {
      openModal(creation) {
        this.isModalOpen = true;
        this.selectedCreation = creation;
      },
      closeModal() {
        this.isModalOpen = false;
        this.selectedCreation = null;
      }
    }
  };
  </script>
  
  <style>
  /* Ajoutez vos styles CSS ici */
  .creations {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .creation {
    width: 30%;
    margin-bottom: 20px;
    cursor: pointer;
  }
  
  .creation-image {
    width: 100%;
    border-radius: 5px;
  }
  
  .creation-title {
    text-align: center;
  }
  </style>
  