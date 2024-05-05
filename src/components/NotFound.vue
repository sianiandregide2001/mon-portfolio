<template>
    <div class="not-found">
      <img src="../assets/corriger-erreur-404-740x447.jpg" alt="404" class="not-found-image">
      <h2>404</h2>
      <p>Désolé, la page que vous recherchez est introuvable.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  };
  </script>
  
  <style>
  .not-found {
    text-align: center;
    margin-top: 50px;
  }
  
  .not-found-image {
    width: 200px;
    height: auto;
    margin-bottom: 20px;
  }
  </style>
  