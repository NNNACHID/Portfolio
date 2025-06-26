<template>
    <section id="projects" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-8 text-center text-indigo-700">Projets</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="(project, index) in projects" :key="index"
                    class="bg-white rounded-lg overflow-hidden shadow-md">
                    <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2 text-indigo-700">{{ project.title }}</h3>
                        <p class="text-gray-600 mb-4">{{ project.description }}</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span v-for="(tech, techIndex) in project.technologies" :key="techIndex"
                                class="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">
                                {{ tech }}
                            </span>
                        </div>
                        <a :href="project.link"
                            class="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">Voir le projet
                            →</a>
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
        const projects = [
            {
                title: 'SecurePipeline',
                description: 'Plateforme CI/CD sécurisée avec intégration automatique de tests de sécurité et de conformité.',
                image: '/placeholder.svg?height=200&width=400',
                technologies: ['GitLab CI', 'Docker', 'Trivy', 'OWASP ZAP', 'Python'],
                link: '#'
            },
            {
                title: 'CloudGuard',
                description: 'Solution de surveillance et de protection des environnements cloud multi-fournisseurs.',
                image: '/placeholder.svg?height=200&width=400',
                technologies: ['AWS', 'Azure', 'Terraform', 'Go', 'Prometheus'],
                link: '#'
            },
            {
                title: 'ComplianceAutomator',
                description: 'Outil d\'automatisation pour la vérification de conformité des infrastructures cloud.',
                image: '/placeholder.svg?height=200&width=400',
                technologies: ['Python', 'AWS Config', 'Kubernetes', 'Bash', 'Grafana'],
                link: '#'
            }
        ]

        return {
            projects,
        }
    }
})
</script>