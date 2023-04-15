<script setup lang="ts">
const user = useSupabaseUser()
onMounted(() => {
    watchEffect(() => {
        if (!user.value) {
            navigateTo('/')
        }
    })
})
</script>

<template>
    <div>
        <div class="mt-8 mb-16">Hello</div>
    </div>
</template>



<style scoped>

</style>