<script setup>
import { ranking, mediaCafe } from '../store/coffeeStore.js'

const medalhas = ['🥇', '🥈', '🥉']
</script>

<template>
  <main class="main">
    <section class="ranking">
      <h1 class="title">🏆 Ranking Geral</h1>

      <table class="table">
        <tbody>
          <tr v-for="(cafe, index) in ranking()" :key="cafe.id">
            <td>{{ medalhas[index] || '' }}</td>
            <td>{{ index + 1 }}º</td>
            <td>
              <strong>{{ cafe.nome }}</strong>
              {{ cafe.origem }}
            </td>
            <td>{{ mediaCafe(cafe).toFixed(1) }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding: 0 20px 40px;
}

.ranking {
  width: 100%;
  max-width: 800px;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
}

.title {
  font-size: 26px;
  margin-bottom: 15px;
  padding: 0 5px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table tr {
  border-bottom: 1px solid #ddd;
}

.table tr:last-child {
  border-bottom: none;
}

.table td {
  padding: 18px;
  font-size: 18px;
}

.table td:first-child {
  width: 60px;
  text-align: center;
  font-size: 28px;
}

.table td:nth-child(2) {
  width: 60px;
  font-weight: bold;
}

.table td:last-child {
  text-align: right;
  font-weight: bold;
  color: #6b4226;
}

.table strong {
  display: block;
  margin-bottom: 5px;
}
</style>
