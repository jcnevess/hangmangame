<script setup>
import IconPlay from './icons/IconPlay.vue'
</script>

<template>
  <main class="menu">
    <div class="container">
      <div class="logo">
        <img src="@/assets/images/logo.svg" alt="The Hangman Game" role="heading" />
      </div>
      <RouterLink to="/category" class="play-link" role="button">
        <div class="play-button">
          <IconPlay class="play-icon"></IconPlay>
        </div>
      </RouterLink>
      <RouterLink to="/help">
        <button class="help">how to play</button>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
.menu {
  background-image: linear-gradient(
    180deg,
    hsl(230, 56.3%, 46.7%) 0%,
    hsla(230, 100%, 23.7%, 83%) 100%
  );
  border-radius: 48px;
  box-shadow:
    inset 0 -8px 0 4px #140e66,
    inset 0 6px 0 8px #2463ff;
  margin: auto 1.5rem;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  padding-inline: 2rem;
  position: relative;
  top: -56px;
}

.menu img {
  width: 100%;
}

.play-link {
  display: block;
  border-radius: 100%;
}

.play-button {
  background-image: var(--gradient-pink);
  box-shadow:
    inset 0 -4px 0 5px #243041,
    inset 0 -12px 0 11px #9d2df5;
  border-radius: 100%;
  width: 160px;
  aspect-ratio: 1;
  display: flex;
  place-items: center;
}

.play-button:hover,
.play-button:active {
  background-color: rgba(100, 100, 100, 25%);
  background-blend-mode: color-dodge;
}

.play-icon {
  height: 50px;
}

.help {
  color: var(--color-white);
  background-color: var(--color-blue);
  font-family: 'Mouse Memoirs', sans-serif;
  text-transform: uppercase;
  border-radius: 40px;
  font-size: 2rem;
  padding: 0.75rem 3.5rem;
  border: none;
  box-shadow:
    inset 0 -2px 0 3px #140e66,
    inset 0 1px 0 6px #3c74ff;
  letter-spacing: 0.2ch;
  cursor: pointer;
}

.help:hover,
.help:active {
  background-image: linear-gradient(180deg, rgba(100, 100, 100, 25%), rgba(100, 100, 100, 25%));
  background-blend-mode: color-dodge;
}
</style>
