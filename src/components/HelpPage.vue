<script setup>
import IconBack from './icons/IconBack.vue'
</script>

<template>
  <div class="container">
    <header class="header">
      <button class="button-back" @click="$router.back()">
        <IconBack></IconBack>
      </button>
      <h1 class="title">Como Jogar?</h1>
    </header>

    <main class="help-cards">
      <div class="help-card">
        <div class="help-title title-number">01</div>
        <h2 class="help-title title-text">escolha uma categoria</h2>
        <p class="help-text">
          Primeiro, escolha uma categoria de palavras, como animais ou filmes. O jogo então
          seleciona aleatoriamente uma palavra secreta daquela categoria e mostra espaços em branco
          para cada letra da palavra.
        </p>
      </div>

      <div class="help-card">
        <div class="help-title title-number">02</div>
        <h2 class="help-title title-text">advinhe as letras</h2>
        <p class="help-text">
          Advinhe as letras. O jogo preenche os espaços em branco relevantes se o seu palpite
          estiver correto. Se estiver errado, você perde uma vida, que se acabam após oito palpites
          incorretos.
        </p>
      </div>

      <div class="help-card">
        <div class="help-title title-number">03</div>
        <h2 class="help-title title-text">Ganhe ou perca</h2>
        <p class="help-text">
          Você ganha ao adivinhar todas as letras da palavra antes que suas vidas acabem. Se suas
          vidas acabarem antes de você adivinhar a palavra, você perde.
        </p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 768px;
  padding: clamp(2rem, calc(1.5rem + 3.75vw), 5rem) clamp(1.5rem, calc(1.5rem + 3.75vw), 5rem);
  gap: clamp(2rem, calc(1.5rem + 3.75vw), 5rem);
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
  width: clamp(40px, calc(40px + 2.5vw), 70px);
  height: clamp(40px, calc(40px + 2.5vw), 70px);
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
  font-size: clamp(3rem, calc(6vw + 1rem), 5rem);
  text-align: center;
  text-transform: none;
  position: relative;
  -webkit-text-stroke: 7px var(--color-dark-grayish-blue);
}

.title::before {
  content: 'Como Jogar?';
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
    /*padding: 5rem;*/
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
