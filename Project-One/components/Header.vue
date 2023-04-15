<template>
    <div>
        <header>
            <ul class="flex">
                <li class="m-3" v-for="link in links" :key="link.name">
                    <NuxtLink class="btn inline" :to="link.link">{{ link.name }}</NuxtLink>
                </li>
            </ul>
        </header>
    </div>
</template>

<script setup>

const links = ref([
    { name: 'home', link: '/' },
    { name: 'events', link: '/events' },
    { name: 'custom', link: '/custom' },
])

</script>

<style lang="scss" scoped></style>