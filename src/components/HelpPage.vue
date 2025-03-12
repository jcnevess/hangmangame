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
        <h2 class="help-title">
          <span class="title-number">01</span>
          <span class="title-text">choose a category</span>
        </h2>
        <p class="help-text">
          First, choose a word category, like animals or movies. The computer then randomly selects
          a secret word from that topic and shows you blanks for each letter of the word.
        </p>
      </div>

      <div class="help-card">
        <h2 class="help-title">
          <span class="title-number">02</span>
          <span class="title-text">guess letters</span>
        </h2>
        <p class="help-text">
          Take turns guessing letters. The computer fills in the relevant blank spaces if your guess
          is correct. If it’s wrong, you lose some health, which empties after eight incorrect
          guesses.
        </p>
      </div>

      <div class="help-card">
        <h2 class="help-title">
          <span class="title-number">03</span>
          <span class="title-text">Win or lose</span>
        </h2>
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
  background-image: linear-gradient(180deg, hsl(270, 96%, 10%), hsl(238, 58%, 37%));
  padding: 2rem 1.5rem;
  gap: 5rem;
  flex-direction: column;
  display: flex;
  overflow: scroll;
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
  letter-spacing: 0.1ch;
  line-height: 120%;
  font-size: 3rem;
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
  gap: 1.5rem;
}

.help-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-color: var(--color-white);
  border-radius: 20px;
}

.help-title {
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
  line-height: 120%;
  letter-spacing: 0.05ch;
  font-weight: normal;
}

.title-number {
  color: var(--color-blue);
}

.help-text {
  text-transform: none;
  line-height: 120%;
  letter-spacing: 0.05ch;
  color: hsl(250, 35%, 62%);
}
</style>
