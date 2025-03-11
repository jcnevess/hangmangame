import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import data from '@/assets/data/data.json'

export const useSolutionStore = defineStore('solution', () => {
  const gameData = ref(data)

  const selectedCategory = ref()

  const categories = computed(() => Object.keys(gameData.value.categories))

  const getWordByCategory = computed(() => {
    return (category) => {
      let words = gameData.value.categories[category]
      const index = Math.floor(Math.random() * words.length)
      return words[index].name
    }
  })

  function setSelectedCategory(newCategory) {
    selectedCategory.value = newCategory
  }

  return { categories, getWordByCategory, selectedCategory, setSelectedCategory }
})
