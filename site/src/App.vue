<script setup lang="ts">
import { ref } from 'vue';

const text = ref<string>('Hello word')

</script>

<template>
  <main>
    <input
      v-model="text"
      type="text"
    >
    <p>{{ text }}</p>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #f0f0f0;
}
.title {
  color: green;
  font-size: large;
}
.title-home {
  color: greenyellow;
  font-size: xx-large;
}
</style>