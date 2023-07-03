<template>
  <div class="m-4">
    <div>HelloWorld</div>
    <RouterView/>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import router from './router';

onMounted (() => router.push({name: 'Home'}))
</script>

<style scoped>
</style>