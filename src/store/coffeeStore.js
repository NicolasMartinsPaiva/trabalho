import { reactive } from 'vue'

// Estado global simples (sem bibliotecas externas) usando reactive()
export const store = reactive({
  cafes: [
    { id: 1, nome: 'Bourbon Amarelo', origem: 'Minas Gerais', avaliacoes: [] },
    { id: 2, nome: 'Catuaí Vermelho', origem: 'Paraná', avaliacoes: [] },
    { id: 3, nome: 'Arara', origem: 'Espírito Santo', avaliacoes: [] },
    { id: 4, nome: 'Mundo Novo', origem: 'Bahia', avaliacoes: [] },
  ],
})

// Calcula a média (0 a 10) de um café com base nas avaliações registradas
export function mediaCafe(cafe) {
  if (!cafe.avaliacoes.length) return 0
  const soma = cafe.avaliacoes.reduce((total, av) => {
    const media = (av.aroma + av.docura + av.acidez + av.corpo + av.finalizacao) / 5
    return total + media
  }, 0)
  return soma / cafe.avaliacoes.length
}

// Adiciona uma nova avaliação a um café
export function adicionarAvaliacao(cafeId, avaliacao) {
  const cafe = store.cafes.find((c) => c.id === cafeId)
  if (cafe) cafe.avaliacoes.push(avaliacao)
}

// Total de avaliações registradas em todo o campeonato
export function totalAvaliacoes() {
  return store.cafes.reduce((total, cafe) => total + cafe.avaliacoes.length, 0)
}

// Ranking dos cafés ordenado da maior para a menor média
export function ranking() {
  return [...store.cafes].sort((a, b) => mediaCafe(b) - mediaCafe(a))
}
