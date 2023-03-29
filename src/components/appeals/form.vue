<script setup>
import {onMounted, reactive} from "vue";

const props = defineProps({
  title: String,
  data: Object
})
const emit = defineEmits(['submit'])

let form = reactive({
  name: '',
  appeal: '',
})
const submitHandler = () => {
  emit('submit', {...form})
  form.name = ''
  form.appeal = ''
}
onMounted(() => {
  if(props.title === 'Edit') {
    form.name = props.data.name
    form.appeal = props.data.appeal
  }
})
</script>

<template>
  <div class="page-wrapper">
    <h1 class="title">{{title}} Appeal</h1>
    <form @submit.prevent="submitHandler" class="form">
      <input
          v-model="form.name"
          placeholder="Name"
          required
      />
      <input
          v-model="form.appeal"
          placeholder="Appeal"
          required
      />
      <button type="submit" class="btn-create">{{ title }}</button>
    </form>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}

.form input {
  height: 2.5rem;
  margin-bottom: 1.5rem;
  outline: none;
  border-radius: 0.75rem;
  padding: 0 5px;
  border: 1px solid var(--color-gray);
}
.btn-create {
  height: 2.5rem;
  outline: none;
  border-radius: 0.75rem;
  border: none;
  color: var(--color-text);
  background-color: var(--color-background-header);
  cursor: pointer;
}
</style>
