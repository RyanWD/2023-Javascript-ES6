// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss"],
	// custom tailwindcss path
	tailwindcss: {
		cssPath: "~/assets/main.css",
	},
})
