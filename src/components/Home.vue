<template>
    <span>{{ clickerStore.count }}</span>
    <Upcliker/>
    <Downcliker/>
    <Clear/>
</template>

<script setup lang="ts">
import Downcliker from './Downcliker.vue';
import Upcliker from './Upcliker.vue';
import { useClickerStore } from '../store/clickerStore';
import Clear from './Clear.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const clickerStore = useClickerStore();
</script>

<style scoped></style>
