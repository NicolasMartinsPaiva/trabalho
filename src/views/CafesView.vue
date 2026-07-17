<script setup>
import { store } from '../store/coffeeStore.js'
import graoCafe from '../assets/img/grao-cafe.png'
</script>

<template>
  <main class="main">
    <h1 class="title">☕ Cafés Participantes</h1>

    <section class="cafes">
      <div class="card" v-for="cafe in store.cafes" :key="cafe.id">
        <div class="info">
          <img :src="graoCafe" alt="" class="icon" />
          <div>
            <h3>{{ cafe.nome }}</h3>
            <p>Origem: {{ cafe.origem }}</p>
          </div>
        </div>

        <RouterLink :to="{ path: '/avaliar', query: { cafe: cafe.id } }" class="button">
          Avaliar
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.main {
  max-width: 900px;
  margin: 50px auto;
  padding: 0 20px;
}

.title {
  font-size: 32px;
  margin-bottom: 30px;
}

.cafes {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* CARD */
.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  flex-wrap: wrap;
  gap: 15px;
}

.info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.icon {
  width: 45px;
}

.info h3 {
  margin-bottom: 5px;
}

.info p {
  color: #666;
}

.button {
  text-decoration: none;
  background: #6b4226;
  color: white;
  padding: 10px 25px;
  border-radius: 8px;
  font-weight: bold;
}

.button:hover {
  background: #55331d;
}
</style>
