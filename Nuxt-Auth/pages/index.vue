<script setup lang="ts">
const email = ref<string>('')
const password = ref<string>('')
const isSignUp = ref<boolean>(false)
const client = useSupabaseClient()

const signUp = async () => {
    const { data, error } = await client.auth.signUp({
        email: email.value,
        password: password.value,
    })
    console.log('user', data)
    console.log('error', error)
}
const login = async () => {
    const { data, error } = await client.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    })
    console.log('user', data)
    console.log('error', error)
}

const user = useSupabaseUser()
onMounted(() => {
    watchEffect(() => {
        if (user.value) {
            navigateTo('/notes')
        }
    })
})
</script>

<template>
    <div>
        <div class="flex flex-col items-center justify-center min-h-minusHeader bg-gray-100">
            <div class="w-full max-w-md">
                <div class="mb-4 text-xl font-bold text-center">{{ isSignUp ? 'Sign up' : 'Login' }}</div>
                <form @submit.prevent="() => (isSignUp ? signUp() : login())"
                    class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-lg">
                    <div class="mb-4">
                        <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                            Email
                        </label>
                        <input name="email" type="email" placeholder="Email" v-model="email">
                    </div>

                    <div class="mb-6">
                        <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                            Password
                        </label>
                        <input name="password" type="password" placeholder="Password" v-model="password">
                    </div>

                    <div class="flex items-center justify-between">
                        <button type="submit" class="btn">
                            <span v-if="isSignUp"> Sign up </span>
                            <span v-else> Log in </span>
                        </button>
                    </div>
                </form>
            </div>
            <button @click="isSignUp = !isSignUp" class="w-full mt-8 text-sm text-center underline text-slate-500">
            <span v-if="isSignUp"> Have an account? Log in instead</span>
            <span v-else> Create a new account </span>
        </button>
        <NuxtLink to="/password" class="w-full text-sm text-center underline text-slate-500">
            Forgotten password?
        </NuxtLink>
        </div>



    
    </div>
</template>



<style scoped></style>