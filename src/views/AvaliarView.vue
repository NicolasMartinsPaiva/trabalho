<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { store, adicionarAvaliacao } from '../store/coffeeStore.js'

const route = useRoute()

const cafeId = ref(Number(route.query.cafe) || store.cafes[0].id)
const aroma = ref(8)
const docura = ref(9)
const acidez = ref(7)
const corpo = ref(8)
const finalizacao = ref(9)
const mensagem = ref('')

const mediaAtual = computed(() => {
  const soma =
    Number(aroma.value) +
    Number(docura.value) +
    Number(acidez.value) +
    Number(corpo.value) +
    Number(finalizacao.value)
  return (soma / 5).toFixed(1)
})

function salvar() {
  adicionarAvaliacao(cafeId.value, {
    aroma: Number(aroma.value),
    docura: Number(docura.value),
    acidez: Number(acidez.value),
    corpo: Number(corpo.value),
    finalizacao: Number(finalizacao.value),
  })
  mensagem.value = 'Avaliação salva com sucesso!'
  setTimeout(() => (mensagem.value = ''), 2500)
}
</script>

<template>
  <main class="main">
    <section class="form">
      <h1 class="title">✏️ Nova Avaliação</h1>

      <div class="field">
        <label for="cafe">Café</label>
        <select id="cafe" v-model="cafeId">
          <option v-for="cafe in store.cafes" :key="cafe.id" :value="cafe.id">
            {{ cafe.nome }}
          </option>
        </select>
      </div>

      <div class="grid">
        <div class="field">
          <label>Aroma</label>
          <input type="number" min="0" max="10" v-model="aroma" />
        </div>

        <div class="field">
          <label>Doçura</label>
          <input type="number" min="0" max="10" v-model="docura" />
        </div>

        <div class="field">
          <label>Acidez</label>
          <input type="number" min="0" max="10" v-model="acidez" />
        </div>

        <div class="field">
          <label>Corpo</label>
          <input type="number" min="0" max="10" v-model="corpo" />
        </div>

        <div class="field">
          <label>Finalização</label>
          <input type="number" min="0" max="10" v-model="finalizacao" />
        </div>

        <div class="media">
          <p>Média Atual</p>
          <h2>{{ mediaAtual }}</h2>
        </div>
      </div>

      <button class="button" @click="salvar">💾 Salvar Avaliação</button>
      <p v-if="mensagem" class="mensagem">{{ mensagem }}</p>
    </section>

    <section class="about">
      <h2>Metodologia</h2>

      <p>As avaliações seguem os critérios da metodologia SCA.</p>

      <ul>
        <li>Aroma</li>
        <li>Doçura</li>
        <li>Acidez</li>
        <li>Corpo</li>
        <li>Finalização</li>
      </ul>

      <p>Cada critério recebe uma nota de 0 a 10.</p>

      <p>A média final é calculada pela média das notas.</p>
    </section>
  </main>
</template>

<style scoped>
.main {
  max-width: 1000px;
  margin: 50px auto;
  padding: 0 20px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

/* FORMULÁRIO */
.form {
  flex: 2;
  min-width: 280px;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
}

.title {
  margin-bottom: 25px;
}

.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.field label {
  margin-bottom: 8px;
  font-weight: 600;
}

.field input,
.field select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 25px;
}

.media {
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.media h2 {
  color: #6b4226;
  margin-top: 5px;
}

.button {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 8px;
  background: #6b4226;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.button:hover {
  background: #55331d;
}

.mensagem {
  text-align: center;
  color: green;
  font-weight: 600;
  margin-top: 12px;
}

/* METODOLOGIA */
.about {
  flex: 1;
  min-width: 220px;
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  height: fit-content;
}

.about h2 {
  margin-bottom: 15px;
}

.about p {
  margin-bottom: 12px;
  line-height: 1.5;
}

.about ul {
  margin-left: 20px;
  margin-bottom: 15px;
}
</style>
