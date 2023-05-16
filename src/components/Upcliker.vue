<template>
    <span>{{count}}</span>
    <div pill type="button" variant="primary" @click="increase()">Жмакни</div>
    <div type="button" variant="danger" @click="clear()">Сбросить</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

function increase(){
    count.value++;
}
function clear(){
    count.value = 0;
}
</script>

<style scoped></style>