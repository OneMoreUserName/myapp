<template>
    <div class="col-4 row">
        <div class="col-4 m-2 btn btn-primary" type="button" @click="decrease()">Поменьше</div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useClickerStore } from '../store/clickerStore';

const clickerStore = useClickerStore();


onMounted(() => {
})

function decrease() {
    clickerStore.count--;
}

</script>

<style scoped></style>