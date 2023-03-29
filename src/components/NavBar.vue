<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/list">List</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 1rem;
  padding: 1rem;
  background-color: var(--color-background-header);
}
nav a.router-link-exact-active {
  color: var(--color-gray);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  color: var(--color-gray);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-gray);
  text-decoration: none;
  color: var(--color-text);
}

nav a:hover {
  color: var(--color-gray);
}
nav a:first-of-type {
  border: 0;
}
</style>
