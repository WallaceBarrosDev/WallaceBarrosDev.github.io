<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import { ref } from 'vue';

const showHeader = ref<boolean>(false);
const user = ref({
  firstName: 'john',
  lastName: 'doe'
})

</script>

<template>
  <main>
    <HeaderComponent v-show="showHeader"/>
    <h1>Teste</h1>
    <p>{{ user.firstName }}</p>
    <p>{{ user.lastName }}</p>
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
</style>