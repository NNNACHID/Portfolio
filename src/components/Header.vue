<template>
    <header class=" bg-indigo-700 text-white py-20">
        <div class="container mx-auto px-4 flex flex-col items-center text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ profile.name }}</h1>
            <h2 class="text-2xl md:text-3xl mb-6 text-indigo-200">{{ profile.title }}</h2>
            <p class="max-w-2xl mb-8 text-lg">{{ profile.summary }}</p>
            <div class="flex space-x-4">
                <a href="#contact"
                    class="bg-white text-indigo-700 px-6 py-2 rounded-md font-medium hover:bg-indigo-100 transition-colors">
                    Contact
                </a>
                <a href="#projects"
                    class="border border-white px-6 py-2 rounded-md font-medium hover:bg-indigo-600 transition-colors">
                    Voir mes projets
                </a>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent} from 'vue';

export default defineComponent({
    setup() {
        const profile = {
            name: 'Nicolas Nachid',
            title: 'DevSecOps Engineer',
            summary: 'Spécialiste en DevSecOps avec plus de 5 ans d\'expérience dans l\'intégration de la sécurité dans les pipelines CI/CD et l\'automatisation des infrastructures.',
            about: 'Je suis un ingénieur DevSecOps passionné par l\'automatisation, la sécurité et l\'infrastructure as code. Mon objectif est d\'aider les organisations à construire des pipelines de livraison sécurisés et efficaces. Je suis spécialisé dans l\'intégration de la sécurité dès les premières étapes du développement logiciel.',
            details: {
                'Localisation': 'Annemasse, France',
                'Expérience': '5+ ans',
                'Disponibilité': 'Disponible',
                'Email': 'nachid.pro@gmail.com'
            }
        }

        return {
        profile,
        }
    }

})
</script>