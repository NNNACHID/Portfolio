<template>
    <section id="skills" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-8 text-center text-indigo-700">Compétences</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div v-for="(category, index) in skills" :key="index" class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-4 text-indigo-600">{{ category.category }}</h3>
                    <div class="space-y-3">
                        <div v-for="skill in category.items" :key="skill.name" class="space-y-1">
                            <div class="flex justify-between text-black">
                                <span>{{ skill.name }}</span>
                                <span>{{ skill.level }}%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-indigo-600 h-2 rounded-full" :style="{ width: `${skill.level}%` }"></div>
                            </div>
                        </div>
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
        const skills = [
            {
                category: 'DevOps',
                items: [
                    { name: 'Docker', level: 95 },
                    { name: 'Kubernetes', level: 90 },
                    { name: 'CI/CD', level: 95 },
                    { name: 'Terraform', level: 85 },
                    { name: 'Ansible', level: 80 }
                ]
            },
            {
                category: 'Sécurité',
                items: [
                    { name: 'SAST/DAST', level: 90 },
                    { name: 'Pentest', level: 75 },
                    { name: 'Compliance', level: 85 },
                    { name: 'Vault', level: 80 },
                    { name: 'Container Security', level: 90 }
                ]
            },
            {
                category: 'Cloud & Développement',
                items: [
                    { name: 'AWS', level: 85 },
                    { name: 'Python', level: 90 },
                    { name: 'Go', level: 90 },
                    { name: 'Bash', level: 85 },
                    { name: 'Git', level: 95 }
                ]
            }
        ]

        return {
            skills,
        }
    }
})
</script>