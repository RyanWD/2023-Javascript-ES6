<template>
    <div>
       <h1 class="text-red-500">Event id {{ $route.params.id }}</h1> 
    </div>
</template>


<style lang="scss" scoped>

</style>

<script setup>
const route = useRoute();

console.log(route.params.id)

</script>