<template>
    <span>{{ count }}</span>
    <div class="col-4 row">
        <div class="col-4 btn btn-primary" type="button" @click="increase()">Побольше</div>
        <div class="col-4 btn btn-primary" type="button" @click="decrease()">Поменьше</div>
        <div class="col-4 btn btn-danger" type="button" @click="clear()">Сбросить</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

function increase() {
    count.value++;
}
function decrease() {
    count.value--;
}
function clear() {
    count.value = 0;
}
</script>

<style scoped></style>