<script setup>
import { useStore } from 'vuex'
import {computed, reactive, ref} from "vue";
import ListItem from "./list-item.vue";
import BaseModal from "../BaseModal.vue";
import AppealsForm from "../appeals/form.vue";

const store = useStore()

const list = computed(() => store.getters.appeals)

let showModal = ref(false)
let currentAppealIndex = ref()
const deleteAppeal = (idx) => {
  if(confirm('Are you sure?')) {
    store.commit('deleteAppeal',idx)
  }
}
const editAppeal = (i) => {
  showModal.value = true
  currentAppealIndex.value = i
}
const editHandler = (data) => {
  store.commit('editAppeal', {
    index: currentAppealIndex.value,
    data
  })
  showModal.value = false
}
</script>

<template>
  <div class="page-wrapper">
    <div v-if="list.length" class="list-wrapper">
      <h1 class="title">Appeals list</h1>
      <div class="list">
        <list-item
            v-for="(appeal, i) in list"
            :key="i"
            :listItem="appeal"
            @remove="deleteAppeal(i)"
            @edit="editAppeal(i)"
        />
      </div>
    </div>
    <div v-else class="empty-list">Empty list</div>
  </div>
  <base-modal
      v-if="showModal"
      @close="showModal = false"
  >
    <AppealsForm
        title="Edit"
        :data="list[currentAppealIndex]"
        @submit="editHandler"
    />
  </base-modal>
</template>

<style scoped>
.empty-list {
  color: var(--color-gray);
  text-align: center;
}
</style>
