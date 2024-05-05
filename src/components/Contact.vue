<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1 id="contact">Contactez-nous</h1>
  <div id="container">
    <div id="contact-info">
      <h2>Contact info</h2>
      <div class="contact-item">
        <img src="../assets/pointeur-de-localisation.png" alt="localisation" class="post">
        <address><a href="https://www.google.com/maps/dir/45.9008593,6.125">2 passage de gruffaz <br>74000 Annecy</a></address>
      </div>
      <div class="contact-item">
        <img src="../assets/telegramme.png" alt="Email" class="post">
        <address><a href="mailto:sianiandregide2001@yahoo.com">sianiandregide2001@yahoo.com</a></address>
      </div>
      <div class="contact-item">
        <img src="../assets/viber.png" alt="telephone" class="post">
        <address><a href="tel:0749504366">0749504366</a></address>
      </div>
    </div>

    <div id="contact-form">
      <h2>Envoyez votre message</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="firstName">Prénom:</label>
          <input type="text" id="firstName" v-model="firstName" required>
        </div>
        <div>
          <label for="lastName">Nom:</label>
          <input type="text" id="lastName" v-model="lastName" required>
        </div>
        <div>
          <label for="subject">Objet:</label>
          <input type="text" id="subject" v-model="subject" required>
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      subject: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      // Formatage des données
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        subject: this.subject,
        message: this.message
      };
      
      // Envoi des données au serveur
      this.sendEmail(data);
    },
    sendEmail(data) {
      // Ici, vous enverriez l'e-mail en utilisant une requête HTTP vers votre serveur
      // Exemple avec Axios :
      // axios.post('/api/send-email', data)
      //   .then(response => {
      //     console.log('E-mail envoyé avec succès');
      //   })
      //   .catch(error => {
      //     console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
      //   });
      console.log('Envoi de l\'e-mail...', data);
    }
  }
};
</script>

<style>
/* Style pour le conteneur du formulaire de contact */
#container {
margin: 0 auto; /* Centrer le conteneur horizontalement */
padding: 20px; /* Ajouter un peu d'espace intérieur */
display: flex;/* Activer la disposition Flexbox */
  justify-content: inherit; /* Distribuer l'espace entre les éléments */
}

/* Style pour le formulaire de contact */
form {
margin-bottom: 20px; /* Ajouter de la marge en bas */
}

/* Style pour les étiquettes des champs */
label {
display: block; /* Afficher les étiquettes en bloc */
font-weight: bold; /* Mettre le texte en gras */
}

/* Style pour les champs de texte et la zone de texte */
input[type="text"],
textarea {
width: calc(350% - 20px); /* Occupent toute la largeur moins 20px pour laisser un peu d'espace sur les côtés */
padding: 10px; /* Ajouter un espace intérieur de 10px */
border: 1px solid #ccc; /* Ajouter une bordure de 1px solide gris clair */
border-radius: 5px; /* Arrondir les coins avec un rayon de 5px */
box-sizing: border-box; /* Inclure le padding et la bordure dans la largeur totale */
}

/* Style spécifique pour la zone de texte */
textarea {
height: 150px; /* Définir une hauteur de 150px */
}

/* Style pour le bouton de soumission */
button[type="submit"] {
background-color: #007bff; /* Fond bleu */
color: #fff; /* Texte blanc */
padding: 10px 20px; /* Ajouter un espace intérieur de 10px en haut et en bas, 20px à gauche et à droite */
border: none; /* Pas de bordure */
border-radius: 5px; /* Arrondir les coins */
cursor: pointer; /* Curseur pointeur au survol */
}

/* Style lorsque le bouton de soumission est survolé */
button[type="submit"]:hover {
background-color: #0056b3; /* Fond bleu plus foncé */
}

/* Style lorsque le bouton de soumission est en focus */
button[type="submit"]:focus {
outline: none; /* Ne pas afficher la bordure de focus */
}
.post{
  width: 30px;
  height: 30px;
}
/* Style pour la section des informations de contact */
#contact-info {
  flex: 0 0 30%; /* Définir la base de flexibilité à 50% de l'espace restant */
  margin-right: 10px; /* Ajouter une marge à droite */
}
/* Style pour la section du formulaire de contact */
#container form {
  flex: 0 0 60%; /* Définir la base de flexibilité à 50% de l'espace restant */
}
#contact-info {
  display: flex;
  flex-direction: column;
}

.contact-item {
  margin-bottom: 10px;
}

</style>