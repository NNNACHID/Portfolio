<script setup lang="ts">
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="container mx-auto h-full max-h-full max-w-lg md:max-w-2/4 pt-32 px-5 md:pt-24">
    <Header />
    <div class="flex flex-row">
      <Navbar />
      <div class="basis-2/3">
        <Content />
        <Footer />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
