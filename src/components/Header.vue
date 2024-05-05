<template>
  <header>
    <div class="container">
      <div class="logo" @click="scrollToTop">
        <a href="#">
          <img src="../assets/web-development-coding-programming-internet-260nw-1171281475-1.jpg" alt="Logo" />
        </a>
      </div>
      <nav>
        <ul>
          <li><a href="#presentation">Présentation</a></li>
          <li><a href="#creations">Créations</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:70px;
  background-image: url(https://www.shutterstock.com/image-photo/web-development-concept-person-using-260nw-1890313726.jpg);
  background-size: cover;
}

.logo {
  flex: 1 0 auto;
}

.logo img {
  width: 80px;
  height: auto;
  border-radius: 50%;
}

nav {
  flex: 1 0 auto;
  text-align: right;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  display: inline-block;
  margin: 0 10px;
}

nav ul li a {
  color: #08ec36;
  font-family: Arial, sans-serif;
  font-weight: bold;
  text-decoration: underline;/* Souligne l'élément de menu actif */
}

nav ul li a:hover {
  color: #eeda2a;
  box-shadow: 0 2px 4px #3c0beed7; /* Ajoute une ombre au survol */

}
</style>
