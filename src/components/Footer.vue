<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="footer">
    <div class="container">
      <ul class="social-icons">
        <li><a href="https://github.com/dashboard" target="_blank"><img src="../assets/GitHub.png" alt="github" width="30" height="30"></a></li>
        <li><a href="https://www.linkedin.com/in/andre-gide-siani/" target="_blank"><img src="../assets/linkedin.png" alt="linkedin" width="30" height="30"></a></li>
        <li><a href="https://twitter.com/andregide/" target="_blank"><img src="../assets/twitter.png" alt="twitter" width="30" height="30"></a></li>
      </ul><br>
      <p>Dernière mise à jour : {{ lastUpdate }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      lastUpdate: "2023-11-14", // Mettre à jour la date
    };
  },
};
</script>

<style>
.footer {
  background-color: #d7e798;
  color: #000;
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.social-icons {
  padding: 0;
  margin: 0;
  display: flex;
}

.social-icons li {
  display: flex;
  margin: 0 5px;
  flex-direction: row;
}

.social-icons a {
  color: #000;
  text-decoration: none;
}

.social-icons a:hover {
  opacity: 0.7;
}
</style>
