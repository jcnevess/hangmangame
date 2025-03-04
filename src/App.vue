<script setup>
import { computed, ref } from 'vue'

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

const wordToGuess = ref(
  'Porto Alegre'
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, ''),
)

const guestInProgress = ref(
  wordToGuess.value
    .replace(/\w/g, '*')
    .split('')
    .map((letter) => {
      letter === '*' ? undefined : letter
    }),
)

const usedLetters = ref([])

const livesLeft = ref(8)

const wonGame = computed(() => guestInProgress.value.join('') === wordToGuess.value)

const loseGame = computed(() => livesLeft.value === 0)

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
</script>

<template>
  <main>
    <section class="guess-screen">
      <span
        v-for="(letter, index) in guestInProgress"
        :key="`${letter}-${index}`"
        class="letter letter-slot guess-slot"
      >
        {{ letter }}
      </span>
    </section>

    <section class="keyboard">
      <button
        v-for="letter in alphabet"
        :key="letter"
        class="alphabet-letter letter-slot guess-button"
        :disabled="isUsedLetter(letter) || loseGame || wonGame"
        @click="makeGuess(letter)"
      >
        {{ letter }}
      </button>
    </section>
  </main>
</template>

<style scoped>
.letter-slot {
  font-family: 'Mouse Memoirs', sans-serif;
  border-radius: 7.5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.guess-button {
  text-transform: uppercase;
  font-size: 1.5rem;
  color: var(--color-dark-navy);
  width: 28px;
  height: 56px;
  border: none;
}

.guess-slot {
  color: var(--color-white);
  background-color: var(--color-blue);
  font-size: 2.25rem;
  width: 36px;
  height: 62px;
  box-shadow:
    inset 0 -2px 0 3px var(--color-dark-navy-shadow),
    inset 0 1px 0 6px var(--color-blue-shadow);
  border-radius: 12px;
}

.keyboard {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 1.5rem 0.5rem;
}

.guess-screen {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem 0.75rem;
}
</style>
