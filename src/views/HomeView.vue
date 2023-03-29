<script setup>
import AppealsForm from "../components/appeals/form.vue";

import { useStore } from 'vuex'
import { useNotification } from "@kyvg/vue3-notification";
const { notify}  = useNotification()

const store = useStore()
const createHandler = (data) => {
  store.dispatch('createAppeal', data)
  notify({
    type: "success",
    text: "Appeal created",
    duration: 1000,
  });
}
</script>

<template>
  <AppealsForm
      title="Create"
      @submit="createHandler"
  />
</template>
