
<script setup lang="ts">
const client = useSupabaseClient()
const logout = async () => {
    const { error } = await client.auth.signOut()
    console.log('error', error)
    navigateTo('/notes')
}
</script>

<template>
    <div>
        <ul class="flex flex-auto">
            <li>Testing Auth</li>
            <li>
                <button @click="logout()">Logout</button>

            </li>

        </ul>
    </div>
</template>


<style scoped></style>

