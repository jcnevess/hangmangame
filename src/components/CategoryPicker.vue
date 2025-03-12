<script setup>
import { useRouter } from 'vue-router'
import IconBack from './icons/IconBack.vue'
import { useSolutionStore } from '@/stores/solution'

const router = useRouter()

const solutionStore = useSolutionStore()

function startNewGame(category) {
  solutionStore.setSelectedCategory(category)
  router.push('/game')
}
</script>

<template>
  <div class="container">
    <div class="header">
      <button class="button-back" @click="router.back()">
        <IconBack></IconBack>
      </button>
      <h1 class="title">Pick a Category</h1>
    </div>
    <div class="categories">
      <button
        v-for="category in solutionStore.categories"
        :key="category"
        class="category"
        @click="startNewGame(category)"
      >
        {{ category }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  background-image: linear-gradient(180deg, hsl(270, 96%, 10%), hsl(238, 58%, 37%));
  padding-top: 2rem;
  padding-inline: 1.5rem;
  gap: 5rem;
  flex-direction: column;
  display: flex;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-back {
  background-image: var(--gradient-pink);
  border-radius: 100%;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.button-back:hover,
.button-back:active {
  background-color: hsla(0, 0%, 100%, 0.25);
  background-blend-mode: color-dodge;
}

.button-back svg {
  width: 18px;
}

.title {
  font-size: 3rem;
  letter-spacing: 0.1ch;
  text-align: center;
  text-transform: none;
  -webkit-text-stroke: 7px var(--color-dark-grayish-blue);
}

.title::before {
  content: 'Pick a Category';
  position: absolute;
  background: var(--gradient-blue);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-stroke-width: 0px;
}

.categories {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: stretch;
  flex-grow: 1;
  justify-content: center;
}

.category {
  font-family: 'Mouse Memoirs', sans-serif;
  font-size: 1.5rem;
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 0.15ch;
  border: none;
  background-color: var(--color-blue);
  border-radius: 20px;
  padding: 1.5rem 4rem;
  box-shadow:
    inset 0 -2px 0 3px #140e66,
    inset 0 1px 0 6px #3c74ff;
  cursor: pointer;
}

.category:hover,
.category:active {
  background-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0.25), hsla(0, 0%, 100%, 0.25));
  background-blend-mode: color-dodge;
}
</style>
