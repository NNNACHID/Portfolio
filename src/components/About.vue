<template>
    <section id="about" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-8 text-center text-indigo-700">À propos</h2>
            <div class="flex flex-col md:flex-row items-center gap-8">
                <div class="md:w-1/3">
                    <div class="rounded-full overflow-hidden w-64 h-64 mx-auto border-4 border-indigo-500">
                        <img src="../assets/photos/nicolas_check.png" alt="About"
                            class="w-full h-full object-cover" />
                    </div>
                </div>
                <div class="md:w-2/3">
                    <p class="text-lg mb-4 text-black">{{ info.about }}</p>
                    <div class="grid grid-cols-2 gap-4 mt-6">
                        <div v-for="(value, key) in info.details" :key="key" class="flex items-center">
                            <span class="font-semibold text-indigo-700 mr-2">{{ key }}:</span>
                            <span class="text-black">{{ value }}</span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import { defineComponent} from 'vue';


export default defineComponent({
    setup() {
        const info = {
            about: 'Je suis un ingénieur DevSecOps passionné par l\'automatisation, la sécurité et l\'infrastructure as code. Mon objectif est d\'aider les organisations à construire des pipelines de livraison sécurisés et efficaces. Je suis spécialisé dans l\'intégration de la sécurité dès les premières étapes du développement logiciel.',
            details: {
                'Localisation': 'Annemasse, France',
                'Expérience': '3+ ans',
                'Disponibilité': 'Disponible',
                'Email': 'nachid.pro@gmail.com'
            }
        }

        return {
        info,
        }
    }
})
</script>