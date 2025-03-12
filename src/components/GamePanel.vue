<script setup>
import { computed, ref, watch } from 'vue'

import IconMenu from '@/components/icons/IconMenu.vue'
import IconHeart from '@/components/icons/IconHeart.vue'
import StatusModal from '@/components/StatusModal.vue'
import { useRouter } from 'vue-router'
import { useSolutionStore } from '@/stores/solution'

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

const INITIAL_LIVES = 8

const router = useRouter()

const solutionStore = useSolutionStore()

const currentCategory = ref(solutionStore.selectedCategory ?? 'Movies')

const wordToGuess = ref(sanitize(solutionStore.getWordByCategory(currentCategory.value)))

const guestInProgress = ref(wordToGuess.value.replace(/\w/g, '*').split(''))

const usedLetters = ref([])

const livesLeft = ref(INITIAL_LIVES)

const gameIsPaused = ref(false)

const showModal = ref(false)

const wonGame = computed(() => guestInProgress.value.join('') === wordToGuess.value)

const loseGame = computed(() => livesLeft.value === 0)

const status = computed(() => {
  if (gameIsPaused.value) {
    return 'pause'
  } else if (wonGame.value) {
    return 'win'
  } else if (loseGame.value) {
    return 'lose'
  } else {
    return ''
  }
})

watch([wonGame, loseGame], () => {
  if (wonGame.value || loseGame.value) {
    showModal.value = true
  }
})

function sanitize(word) {
  return word
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

function makeGuess(guessLetter) {
  usedLetters.value = [...usedLetters.value, guessLetter]

  let indexesLettersFound = []
  for (let i = 0; i < wordToGuess.value.length; i++) {
    if (guessLetter === wordToGuess.value[i]) {
      indexesLettersFound.push(i)
    }
  }

  guestInProgress.value = guestInProgress.value.map((letter, index) => {
    if (indexesLettersFound.indexOf(index) >= 0) {
      return wordToGuess.value[index]
    } else {
      return letter
    }
  })

  // Wrong guess
  if (indexesLettersFound.length === 0) {
    livesLeft.value = livesLeft.value - 1
  }
}

function isUsedLetter(letter) {
  return usedLetters.value.indexOf(letter) >= 0
}

function showMenu() {
  showModal.value = true

  if (!wonGame.value && !loseGame.value) {
    gameIsPaused.value = true
  }
}

function hideMenu() {
  showModal.value = false
}

function continueGame() {
  hideMenu()
  gameIsPaused.value = false
}

function resetAndQuitGame() {
  resetGame()
  router.push('/')
}

function resetGame() {
  gameIsPaused.value = false
  showModal.value = false
  livesLeft.value = INITIAL_LIVES
  usedLetters.value = []
}

function resetAndChangeCategory() {
  resetGame()
  router.push('/category')
}
</script>

<template>
  <div class="container">
    <header>
      <div class="header-controls">
        <button class="menu-button" role="navigation" title="Toggle Menu" @click="showMenu">
          <IconMenu></IconMenu>
        </button>
        <div class="category">{{ currentCategory }}</div>
      </div>
      <div class="lives-monitor">
        <progress
          id="lives-meter"
          class="lives-meter"
          :value="livesLeft"
          max="8"
          title="lives left"
        ></progress>
        <div class="heart-icon">
          <IconHeart></IconHeart>
        </div>
      </div>
    </header>

    <section class="guess-screen">
      <div
        v-for="(word, index) in guestInProgress.join('').split(' ')"
        :key="`${word}-${index}`"
        class="guess-word"
      >
        <span
          v-for="(letter, index) in word"
          :key="`${letter}-${index}`"
          class="letter-slot guess-slot"
          :class="{
            'guess-slot-empty': letter === '*',
          }"
          >{{ letter === '*' ? '&nbsp;' : letter }}</span
        >
      </div>
    </section>

    <section class="keyboard">
      <button
        v-for="letter in alphabet"
        :key="letter"
        class="letter-slot guess-button"
        :disabled="isUsedLetter(letter) || loseGame || wonGame"
        @click="makeGuess(letter)"
      >
        {{ letter }}
      </button>
    </section>
  </div>

  <StatusModal
    :status
    :show-modal="showModal"
    @continue-game="continueGame"
    @close-modal="hideMenu"
    @quit-game="resetAndQuitGame"
    @change-category="resetAndChangeCategory()"
  ></StatusModal>
</template>
<style scoped>
.letter-slot {
  font-family: 'Mouse Memoirs', sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
}

.guess-button {
  font-size: 1.5rem;
  color: var(--color-dark-navy);
  width: 100%;
  border-radius: 8px;
  border: none;
  line-height: 150%;
  letter-spacing: -0.02ch;
  padding: 0.5rem;
  cursor: pointer;
}

.guess-button:hover,
.guess-button:active {
  color: var(--color-white);
  background-color: var(--color-blue);
}

.guess-slot {
  border-radius: 12px;
  color: var(--color-white);
  background-color: var(--color-blue);
  font-size: 2.5rem;
  line-height: 120%;
  letter-spacing: 0.05ch;
  padding: 0.5rem 0.75rem;
  box-shadow:
    inset 0 -2px 0 3px var(--color-dark-navy-shadow),
    inset 0 1px 0 6px var(--color-blue-shadow);
  width: 40px;
}

.guess-slot-empty {
  opacity: 0.25;
}

.keyboard {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 1.5rem max(0.5rem, 2dvw);
  justify-items: center;
}

.guess-screen {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem 0.75rem;
}

.guess-word {
  display: flex;
  column-gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.category {
  color: var(--color-white);
  text-transform: capitalize;
  font-size: 2.5rem;
  font-weight: 500;
}

.menu-button {
  border-radius: 50%;
  border: none;
  background-image: var(--gradient-pink);
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.menu-button:hover,
.menu-button:active {
  background-color: hsla(0, 0%, 100%, 0.25);
  background-blend-mode: color-dodge;
}

.menu-button svg {
  width: 50%;
}

.heart-icon {
  height: 24px;
}

.lives-monitor {
  display: flex;
  gap: 1rem;
  align-items: center;
}

progress[value] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 10px;
  background: var(--color-white);
  padding: 0.25rem;
  width: 62px;
}

progress[value]::-webkit-progress-bar {
  background: var(--color-white);
  border-radius: 10px;
}

progress[value]::-webkit-progress-value {
  border-radius: 10px;
  background: var(--color-dark-navy);
}

progress[value]::-moz-progress-bar {
  background: var(--color-dark-navy);
  border-radius: 10px;
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  width: 100%;
  padding: 3rem 1.75rem;
}

@media (min-width: 376px) {
  .guess-button {
    font-size: 3rem;
    border-radius: 24px;
  }

  .guess-slot {
    font-size: 4rem;
    padding: 1rem 2rem;
    border-radius: 32px;
  }
}
</style>
