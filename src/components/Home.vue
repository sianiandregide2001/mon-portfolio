<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="home">
      <h1>SIANI ANDRE GIDE</h1>
      <h1 id="presentation">Bienvenue sur mon portfolio!</h1>
      <p>Bonjour à tous ! Je suis <strong>SIANI ANDRE GIDE</strong>, un passionné de développement web, et je suis ravi de vous accueillir sur mon portfolio. <br>
        Je suis un développeur web débutant avec une grande passion pour la création de sites web dynamiques et innovants. Mon parcours dans le domaine du développement a commencé il y a 1 an. <br>
        Au fil de mon apprentissage, j'ai acquis des compétences dans plusieurs technologies clés du web, notamment HTML, CSS et JavaScript. J'ai également exploré des frameworks populaires comme Vue.js et des bibliothèques comme Bootstrap pour créer des interfaces utilisateur modernes et réactives. <br>
        Ce portfolio est le reflet de mes premiers pas dans le monde du développement web. Vous y trouverez des projets que j'ai réalisés lors de ma formation et de mes expérimentations personnelles. Chaque projet représente un défi que j'ai relevé avec enthousiasme et détermination. <br>
        Mon objectif est de continuer à apprendre et à progresser dans le domaine du développement web. Je suis ouvert aux conseils, aux retours d'expérience et aux opportunités de collaboration avec d'autres passionnés du web. <br>
        Merci d'avoir pris le temps de découvrir mon portfolio. J'espère que mes réalisations vous inspireront et vous donneront un aperçu de mes compétences et de ma motivation à devenir un développeur web accompli.</p>
      
        <div><h1 id="creations">Mes créations</h1></div>
        <div class="creations">
        <div v-for="creation in creations" :key="creation.id" class="creation" @click="openModal(creation)">
          <img :src="creation.imageUrl" alt="Image de la création">
          <h3 class="creation-title">{{ creation.title }}</h3>
        </div>
      </div>
  
      <!-- Modal -->
      <div v-if="selectedCreation" class="modal" @click="closeModal">
        <div class="modal-content">
          <h2>{{ selectedCreation.title }}</h2>
          <p>Date de création : {{ selectedCreation.date }}</p>
          <p>Technologies utilisées : {{ selectedCreation.technologies }}</p>
          <a :href="selectedCreation.link" target="_blank">Visiter le site</a>
          <a :href="selectedCreation.githubLink" target="_blank">Voir sur GitHub</a>
          <span class="close">&times;</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fullName: 'Votre Nom Complet',
        presentation: 'Une courte présentation',
        creations: [
          {
            id: 1,
            title: 'Mon cv',
            imageUrl: 'https://png.pngtree.com/element_our/png/20181226/professional-cv-resume-template-design-for-a-creative-person-png_279516.jpg',
            date: '19/12/2023',
            technologies: 'HTML et CSS',
            githubLink: 'https://github.com/sianiandregide2001/cv-deumou.git'
          },
          {
            id: 2,
            title: 'Dynamiser un espace commentaire',
            imageUrl: 'https://png.pngtree.com/png-vector/20191027/ourmid/pngtree-comment-icon-isolated-on-background-png-image_1875255.jpg',
            date: '12/02/2024',
            technologies: 'Javascript',
            githubLink: 'https://github.com/sianiandregide2001/dynamiser-un-espace-commentaire.git'
          },
          {
            id: 3,
            title: 'Cahier de charge',
            imageUrl: 'https://t4.ftcdn.net/jpg/04/53/48/05/360_F_453480520_ffT886xF6RSOEKdPbiVIsPqII3KnafZt.jpg',
            date: '18/01/2024',
            githubLink: 'https://github.com/sianiandregide2001/cahier-de-charge-pdf.git'
          }
        ],
        selectedCreation: null
      };
    },
    methods: {
      openModal(creation) {
        this.selectedCreation = creation;
      },
      closeModal() {
        this.selectedCreation = null;
      }
    }
  };
  </script>
  
  <style scoped> 
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative; /* Ajout de position relative au parent */
}

.creations {
  display: flex;
  justify-content: center;
}

.creation {
  margin: 50px;
  cursor: pointer;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 5px;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>

  