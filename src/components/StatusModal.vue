<script setup>
import { computed, onUpdated, useTemplateRef } from 'vue'

const props = defineProps({
  status: {
    type: String,
    required: true,
  },
  showModal: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['continueGame', 'changeCategory', 'quitGame', 'closeModal'])

const statusModal = useTemplateRef('statusModal')

const statusText = computed(() => {
  let text = ''

  if (props.status === 'win') {
    text = 'you win'
  } else if (props.status === 'lose') {
    text = 'you lose'
  } else if (props.status === 'pause') {
    text = 'paused'
  }

  return text
})

onUpdated(() => {
  if (props.showModal) {
    statusModal.value.showModal()
  } else {
    statusModal.value.close()
  }
})

function closeModal() {
  if (props.status === 'pause') {
    emit('continueGame')
  } else {
    emit('closeModal')
  }
}
</script>

<template>
  <dialog ref="statusModal" class="modal-container" @cancel="closeModal">
    <h1 class="title">{{ statusText }}</h1>
    <div class="modal-body">
      <div class="modal-buttons">
        <button @click="emit('continueGame')">continue</button>
        <button @click="emit('changeCategory')">new category</button>
        <button @click="emit('quitGame')" class="button-quit">quit game</button>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.modal-container[open] {
  margin: auto;
  border: none;
  background-color: transparent;
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
  user-select: none;
  width: 90%;
  max-width: 592px;
}

.modal-container::backdrop {
  background-image: linear-gradient(
    180deg,
    hsla(264, 87%, 12%, 50%),
    hsla(242, 74%, 27%, 50%) 70%,
    hsla(253, 69%, 28%, 50%)
  );
}

.modal-body {
  background-image: linear-gradient(180deg, hsl(230, 56%, 47%), hsla(230, 100%, 24%, 0.83));
  padding: 6rem 1.75rem;
  border-radius: 48px;
  box-shadow:
    inset 0 -8px 0 4px var(--color-dark-navy),
    inset 0 6px 0 8px var(--color-blue);
  position: relative;
}

.title {
  font-size: 6rem;
  font-weight: 100;
  text-transform: capitalize;
  text-align: center;
  background: var(--gradient-blue);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 1;
  left: 0;
  top: 50px;
  filter: drop-shadow(9px 0px 0px var(--color-dark-grayish-blue))
    drop-shadow(-9px 0px 0px var(--color-dark-grayish-blue))
    drop-shadow(0px 9px 0 var(--color-dark-grayish-blue))
    drop-shadow(0px -9px 0 var(--color-dark-grayish-blue));
}

.modal-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

button {
  text-transform: uppercase;
  color: var(--color-white);
  background-color: var(--color-blue);
  border: 1px solid var(--color-dark-navy);
  border-radius: 40px;
  padding: 0.75rem;
  font-family: 'Mouse Memoirs', sans-serif;
  font-size: 2rem;
  letter-spacing: 0.1ch;
  padding-inline: 4rem;
  box-shadow:
    inset 0 -2px 0 2px var(--color-dark-navy),
    inset 0 3px 0 3px var(--color-blue-shadow);
}

.button-quit {
  background-image: var(--gradient-pink);
  box-shadow:
    inset 0 -2px 0 2px var(--color-dark-navy),
    inset 0 3px 0 3px var(--color-pink);
}
</style>
