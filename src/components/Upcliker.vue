<template>
    <div class="col-4 row">
        <div class="col-4 m-2 btn btn-primary" type="button" @click="increase()">Побольше</div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useClickerStore } from '../store/clickerStore';

const clickerStore = useClickerStore();
const route = useRoute();

onMounted(() => {
    
})

function increase() {
    clickerStore.count++;
}

</script>

<style scoped></style>