<script setup lang="ts">
// From composables folder
const { sayHello } = useUtils();
sayHello('Testing')

// From plugins folder
const { $sayHelloYo } = useNuxtApp()
</script>

<template>
    <div>
        <h1>Index page</h1>
        <p>{{ $sayHelloYo('World') }}</p>
        <Bell />
        <img src="~/assets/bg.png" alt="" srcset="">
    </div>
</template>


<style lang="scss" scoped>

</style>