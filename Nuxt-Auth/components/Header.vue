
<script setup lang="ts">
const client = useSupabaseClient()
const logout = async () => {
    const { error } = await client.auth.signOut()
    console.log('error', error)
    navigateTo('/notes')
}

const user = useSupabaseUser()

</script>

<template>
    <header class="py-4 bg-gray-900">
        <div class="container flex items-center justify-between mx-auto">
           <NuxtLink class="text-lg font-bold text-white" to="/">My Nuxt Supabase app</NuxtLink>
            <button v-if="user" class="w-auto px-4 py-2 font-semibold text-white bg-red-600 rounded hover:bg-red-700" @click="logout()">
                Signout
            </button>
        </div>
    </header>
</template>


<style scoped></style>

