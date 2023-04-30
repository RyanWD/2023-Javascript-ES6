<template>
    <div>
        <form @submit.prevent="sendRecoveryEmail()" class="flex flex-col gap-2">
            <input type="email" placeholder="Email" v-model="email" class="p-2 bg-gray-600 rounded">
            
            <button type="submit" class="p-2 text-white bg-green-500 rounded">
              Send recovery email
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
const email = ref<string>('')
const client = useSupabaseClient()

 const sendRecoveryEmail = async () => {
    const { data, error } = await client.auth.resetPasswordForEmail(email.value, {
        redirectTo: '/updatePassword',
    })
 }
  
</script>

<style scoped>

</style>