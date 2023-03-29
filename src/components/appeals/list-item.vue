<script setup>
defineProps({
  listItem: Object
})
defineEmits(['edit', 'remove'])
</script>

<template>
  <div
      class="list-item"
  >
    <h3 class="list-item_name">{{listItem.name}}</h3>
    <p class="list-item_appeal">{{listItem.appeal}}</p>

    <div class="actions">
      <button class="action-btn btn-edit" @click="$emit('edit')">Edit</button>
      <button class="action-btn btn-delete" @click="$emit('remove')">Delete</button>
    </div>
  </div>
</template>

<style scoped>
.list-item {
  border: 1px solid var(--color-gray);
  margin-bottom: 1.5rem;
  border-radius: 0.75rem;
  padding: 1rem;
}
.list-item_name {
  font-size: 1.5rem;
}
.list-item_appeal {
  font-size: 1rem;
}
.actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.action-btn {
  width: 3rem;
  height: 1.5rem;
  outline: none;
  border: none;
  border-radius: 0.2rem;
  color: var(--color-text);
  cursor: pointer;
}
.btn-edit {
  margin-right: 0.5rem;
  background-color: var(--color-background-header);
}
.btn-delete {
  background-color: var(--color-danger);
}

</style>
