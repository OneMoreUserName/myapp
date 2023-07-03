<template>
    <div class="col-4 row">
        <div class="col-4 m-2 btn btn-danger" type="button" @click="clear()">Сбросить</div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useClickerStore } from '../store/clickerStore';
const clickerStore = useClickerStore();
onMounted(() => {
})

function clear() {
    clickerStore.count = 0;
}

</script>

<style scoped></style>