<template>
    <nav class="bg-indigo-700 text-white shadow-lg">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <div class="text-xl font-bold">Nicolas <span class="text-indigo-300">Nachid</span></div>
            <div class="hidden md:flex space-x-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                    class="hover:text-indigo-200 transition-colors">
                    {{ item.name }}
                </a>
            </div>
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-menu">
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
            </button>
        </div>
        <!-- Mobile menu -->
        <div v-if="mobileMenuOpen" class="md:hidden px-4 py-2 bg-indigo-800">
            <a v-for="item in navigation" :key="item.name" :href="item.href" class="block py-2 hover:text-indigo-200">
                {{ item.name }}
            </a>
        </div>
    </nav>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'


export default defineComponent({
    name: 'DevSecOpsPortfolio',
    setup() {
        const mobileMenuOpen = ref(false)

        const navigation = [
            { name: 'Accueil', href: '#' },
            { name: 'À propos', href: '#about' },
            { name: 'Compétences', href: '#skills' },
            { name: 'Expérience', href: '#experience' },
            { name: 'Projets', href: '#projects' },
            { name: 'Contact', href: '#contact' }
        ]

        return {
            mobileMenuOpen,
            navigation,
        }
    }
})
</script>