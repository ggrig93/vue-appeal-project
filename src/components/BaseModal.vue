<script setup>
defineEmits(['close'])

</script>
<template>
  <div class="modal-wrap">
    <div class="modal-content">
      <div class="close-wrap">
        <img
            src="@/assets/close.svg"
            alt="close"
            class="close"
            @click="$emit('close')"
        />
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  min-height: 100vh;
  z-index: 22;
}
.modal-content {
  background-color: var(--color-text);
  padding: 1rem;
  border-radius: 0.5rem;
  width: 700px;
}
.close-wrap {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.close {
  width: 1.5rem;
  cursor: pointer;
}
</style>
