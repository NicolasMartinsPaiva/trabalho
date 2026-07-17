<script setup>
import { store, totalAvaliacoes } from '../store/coffeeStore.js'
import xicara from '../assets/img/xicara.png'
import logoPessoa from '../assets/img/logo_pessoa.png'
import pasta from '../assets/img/pasta.png'
import flor from '../assets/img/flor.png'
</script>

<template>
  <main class="main">
    <section class="hero">
      <img :src="xicara" alt="" class="hero-icon" />
      <h1 class="hero-title">COFFEE QUALITY CHALLENGE</h1>
      <p class="hero-subtitle">Campeonato de Avaliação Sensorial de Cafés Especiais</p>
      <p class="hero-text">Avalie, compare e descubra os melhores cafés através dos seus sentidos.</p>
    </section>

    <section class="stats">
      <div class="box">
        <img :src="logoPessoa" alt="" class="box-icon" />
        <div>
          <p>Cafés Participantes</p>
          <h2>{{ store.cafes.length }}</h2>
        </div>
      </div>

      <div class="box">
        <img :src="pasta" alt="" class="box-icon" />
        <div>
          <p>Avaliações Registradas</p>
          <h2>{{ totalAvaliacoes() }}</h2>
        </div>
      </div>
    </section>

    <div class="button-area">
      <RouterLink to="/cafes" class="button">Ver Cafés</RouterLink>
    </div>

    <section class="about">
      <img :src="flor" alt="" class="about-img" />
      <div>
        <h2>Sobre o Campeonato</h2>
        <p>
          Este campeonato tem como objetivo promover a qualidade dos cafés através de
          avaliações sensoriais baseadas na metodologia SCA.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* HERO */
.hero {
  max-width: 700px;
  margin: 60px auto;
  text-align: center;
}

.hero-icon {
  width: 70px;
  margin-bottom: 20px;
}

.hero-title {
  font-size: 38px;
  margin-bottom: 15px;
}

.hero-subtitle {
  font-weight: 600;
  margin-bottom: 10px;
}

.hero-text {
  color: #666;
}

/* CARDS */
.stats {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 40px 0;
  flex-wrap: wrap;
}

.box {
  background: white;
  padding: 20px;
  width: 250px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
}

.box-icon {
  width: 40px;
}

.box h2 {
  margin-top: 5px;
}

/* BOTÃO */
.button-area {
  text-align: center;
  margin: 40px 0;
}

.button {
  background: #6b4226;
  color: white;
  text-decoration: none;
  padding: 12px 35px;
  border-radius: 8px;
  font-weight: bold;
  display: inline-block;
}

.button:hover {
  background: #55331d;
}

/* SOBRE */
.about {
  max-width: 800px;
  margin: 50px auto;
  background: white;
  border-radius: 12px;
  padding: 30px;
  display: flex;
  align-items: center;
  gap: 25px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  flex-wrap: wrap;
}

.about-img {
  width: 90px;
}

.about h2 {
  margin-bottom: 10px;
}

.about p {
  color: #555;
  line-height: 1.6;
}
</style>
