<script setup>
import logo from '../assets/img/logo.png'
</script>

<template>
  <header class="header">
    <div class="header-container">
      <RouterLink to="/">
        <img :src="logo" alt="Logo" class="logo" />
      </RouterLink>

      <nav class="nav">
        <ul class="menu">
          <li><RouterLink to="/" active-class="active" exact-active-class="active">Home</RouterLink></li>
          <li><RouterLink to="/cafes" active-class="active">Cafés</RouterLink></li>
          <li><RouterLink to="/avaliar" active-class="active">Avaliar</RouterLink></li>
          <li><RouterLink to="/ranking" active-class="active">Ranking</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: white;
  border-bottom: 1px solid #ddd;
}

.header-container {
  max-width: 1100px;
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 160px;
  display: block;
}

.menu {
  display: flex;
  list-style: none;
  gap: 30px;
}

.menu a {
  text-decoration: none;
  color: #555;
  font-weight: 600;
}

.menu a.active {
  color: #6b4226;
}
</style>
