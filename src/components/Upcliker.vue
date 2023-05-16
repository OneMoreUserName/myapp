<template>
    <span>{{ count }}</span>
    <div class="flex">
        <div class="btn btn-primary" type="button" @click="increase()">Жмакни</div>
        <div class="btn btn-danger" type="button" @click="clear()">Сбросить</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

function increase() {
    count.value++;
}

function clear() {
    count.value = 0;
}
</script>

<style scoped></style>