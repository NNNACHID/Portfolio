<template>
    <section id="experience" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-8 text-center text-indigo-700">Expérience</h2>
            <div class="space-y-8">
                <div v-for="(job, index) in experiences" :key="index" class="border-l-4 border-indigo-500 pl-4 ml-4">
                    <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 class="text-xl font-semibold text-indigo-600">{{ job.title }}</h3>
                        <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">{{ job.period
                        }}</span>
                    </div>
                    <div class="text-lg font-medium mb-2 text-black">{{ job.company }}</div>
                    <p class="text-gray-600 mb-4">{{ job.description }}</p>
                    <div class="flex flex-wrap gap-2">
                        <span v-for="(tech, techIndex) in job.technologies" :key="techIndex"
                            class="bg-gray-100 px-3 py-1 rounded-full text-sm text-black">
                            {{ tech }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    setup() {
        const experiences = [
            {
                title: 'Back-end/DevOps',
                company: 'CHECK',
                period: '2021 - Présent',
                description: 'Responsable de l\'implémentation et de la gestion des pratiques DevSecOps. Mise en place de pipelines CI/CD sécurisés et automatisation de l\'infrastructure cloud.',
                technologies: ['Kubernetes', 'AWS', 'Docker', 'Github actions', 'Golang']
            },
            {
                title: 'Back-end/DevOps',
                company: 'Symotronic',
                period: '2021 - Présent',
                description: 'Responsable de l\'implémentation et de la gestion des pratiques DevSecOps. Mise en place de pipelines CI/CD sécurisés et automatisation de l\'infrastructure cloud.',
                technologies: ['Kubernetes', 'AWS', 'Terraform', 'GitLab CI', 'Docker']
            },
            {
                title: 'Fullstack',
                company: 'Trinum',
                period: '2019 - 2021',
                description: 'Développement et maintenance de l\'infrastructure cloud. Implémentation de solutions d\'automatisation et de monitoring.',
                technologies: ['Azure', 'Jenkins', 'Ansible', 'Prometheus', 'Grafana']
            },
            {
                title: 'Fullstack',
                company: 'Isalean',
                period: '2017 - 2019',
                description: 'Analyse de vulnérabilités et mise en place de solutions de sécurité. Participation à l\'intégration de la sécurité dans le cycle de développement.',
                technologies: ['OWASP', 'Nessus', 'Burp Suite', 'Python', 'Linux']
            }
        ]

        return {
            experiences,
        }
    }
})
</script>