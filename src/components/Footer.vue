<template>
    <footer class="bg-indigo-900 text-white py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="text-xl font-bold mb-4 md:mb-0">Nicolas <span class="text-indigo-300">Nachid</span></div>
                <div class="flex space-x-4">
                    <a v-for="social in socials" :key="social.name" :href="social.url"
                        class="hover:text-indigo-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            :class="`lucide lucide-${social.icon}`">
                            <path v-if="social.icon === 'github'"
                                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path v-if="social.icon === 'linkedin'"
                                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect v-if="social.icon === 'linkedin'" x="2" y="9" width="4" height="12" />
                            <circle v-if="social.icon === 'linkedin'" cx="4" cy="4" r="2" />
                        </svg>
                    </a>
                </div>
            </div>
            <div class="text-center mt-6 text-indigo-200">
                <p>© {{ new Date().getFullYear() }} Nicolas Nachid Portfolio. Tous droits réservés.</p>
            </div>
        </div>
    </footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    setup() {
        const socials = [
            { name: 'GitHub', icon: 'github', url: 'https://github.com/NNNACHID' },
            { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/nicolas-nachid/' },
        ]

        return {
            socials,
        }
    }
})
</script>
