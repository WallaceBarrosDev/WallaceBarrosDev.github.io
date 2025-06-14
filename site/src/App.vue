<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import { ref } from 'vue';

const showHeader = ref<boolean>(false);
const user = ref({
  firstName: 'john',
  lastName: 'doe'
})
const isHome = ref<boolean>(true)

</script>

<template>
  <main>
    <HeaderComponent v-show="showHeader"/>

    <h1 :class="{'title': true, 'title-home': isHome }">Teste</h1>

    <template v-for="prop in user">
      <p> {{ prop }}</p>
    </template>
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