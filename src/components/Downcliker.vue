<template>
    <span>{{ count }}</span>
    <div class="col-4 row">
        <div class="col-4 m-2 btn btn-primary" type="button" @click="decrease()">Поменьше</div>
        <div class="col-4 m-2 btn btn-danger" type="button" @click="clear()">Сбросить</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const count = ref(new Number(`${route.params.count}`));

onMounted(() => {
    console.log(`count: ${route.params.count}`);
})

function decrease() {
    count.value--;
}
function clear() {
    count.value = 0;
}

</script>

<style scoped></style>