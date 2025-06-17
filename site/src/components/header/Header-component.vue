<script setup lang="ts">
  import { content } from './Header.module.css';
</script>

<template>
    <header :class="content">
        <slot/>
    </header>
</template>
