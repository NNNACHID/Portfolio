<script setup lang="ts">
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="container mx-auto h-full max-h-full gap-y-7">
    <Header />
    <div class="row sticky-parent">
      <Navbar />
      <div class="col-12 col-md-12 col-lg-10">
        <Content />
        <Footer />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
