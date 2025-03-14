<script setup>
import IconBack from './icons/IconBack.vue'
</script>

<template>
  <div class="container">
    <header class="header">
      <button class="button-back" @click="$router.back()">
        <IconBack></IconBack>
      </button>
      <h1 class="title">How to Play</h1>
    </header>

    <main class="help-cards">
      <div class="help-card">
        <div class="help-title title-number">01</div>
        <h2 class="help-title title-text">choose a category</h2>
        <p class="help-text">
          First, choose a word category, like animals or movies. The computer then randomly selects
          a secret word from that topic and shows you blanks for each letter of the word.
        </p>
      </div>

      <div class="help-card">
        <div class="help-title title-number">02</div>
        <h2 class="help-title title-text">guess letters</h2>
        <p class="help-text">
          Take turns guessing letters. The computer fills in the relevant blank spaces if your guess
          is correct. If it’s wrong, you lose some health, which empties after eight incorrect
          guesses.
        </p>
      </div>

      <div class="help-card">
        <div class="help-title title-number">03</div>
        <h2 class="help-title title-text">Win or lose</h2>
        <p class="help-text">
          You win by guessing all the letters in the word before your health runs out. If the health
          bar empties before you guess the word, you lose.
        </p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 768px;
  padding: 2rem 1.5rem;
  gap: clamp(2rem, calc(1.5rem + 4vw), 5rem);
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
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: clamp(40px, calc(40px + 2vw), 60px);
  height: clamp(40px, calc(40px + 2vw), 60px);
}

.button-back:hover,
.button-back:active {
  background-color: hsla(0, 0%, 100%, 0.25);
  background-blend-mode: color-dodge;
}

.button-back svg {
  width: clamp(18px, calc(12px + 1vw), 28px);
}

.title {
  letter-spacing: 0.1ch;
  line-height: 120%;
  font-size: clamp(3rem, calc(6vw + 1rem), 7rem);
  text-align: center;
  text-transform: none;
  position: relative;
  -webkit-text-stroke: 7px var(--color-dark-grayish-blue);
}

.title::before {
  content: 'How to Play';
  position: absolute;
  background: var(--gradient-blue);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-stroke-width: 0px;
}

.help-cards {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1.5rem;
}

.help-card {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(2, auto);
  gap: 1rem;
  padding: 2rem;
  background-color: var(--color-white);
  border-radius: 20px;
}

.help-title {
  font-size: 1.5rem;
  line-height: 120%;
  letter-spacing: 0.05ch;
  font-weight: normal;
  text-align: center;
}

.title-number {
  color: var(--color-blue);
}

.title-text {
  font-size: clamp(1.5rem, calc(1rem + 2vw), 3rem);
}

.help-text {
  grid-column: 1/3;
  text-transform: none;
  line-height: 120%;
  letter-spacing: 0.05ch;
  color: hsl(250, 35%, 62%);
  text-align: center;
  font-size: clamp(1rem, calc(0.9rem + 1vw), 1.625rem);
}

@media (min-width: 520px) {
  .help-card {
    column-gap: 2rem;
  }

  .title {
    -webkit-text-stroke: 18px var(--color-dark-grayish-blue);
    flex-grow: 1;
  }

  .title-number {
    grid-row: 1/3;
    font-size: 5.5rem;
  }

  .help-text {
    grid-column: unset;
  }

  .header {
    position: relative;
  }

  .button-back {
    position: absolute;
    z-index: 1;
  }
}

@media (min-width: 840px) {
  .container {
    max-width: unset;
    padding: 5rem;
  }

  .help-cards {
    flex-direction: row;
  }

  .help-card {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
    flex-grow: 1;
    flex-basis: 0;
    min-width: 0;
  }

  .title-number {
    grid-row: 1 / span 1;
  }
}
</style>
