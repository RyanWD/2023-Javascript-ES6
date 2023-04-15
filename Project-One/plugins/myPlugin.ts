export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            sayHelloYo: (msg: string) => `Hello ${msg}`
        }
    }
})