<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-500">
    <Navbar />
    <Header />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<style scoped></style>
