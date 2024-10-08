<template>
  <div id="app">
    <Header />
    <div class="container">
      <Sidebar />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<style>
.container {
  display: flex;
}
</style>
