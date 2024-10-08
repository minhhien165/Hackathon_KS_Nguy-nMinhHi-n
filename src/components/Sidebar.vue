<template>
    <div class="sidebar">
      <router-link to="/admin">Dashboard</router-link>
      <router-link to="/admin/manager-category">Manager Category</router-link>
      <router-link to="/admin/manager-product">Manager Product</router-link>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .sidebar {
    width: 200px;
    height: 80vh;
    background-color: #000;
    color: #fff;
    padding: 10px;
  }
  a {
    display: block;
    color: white;
    padding: 10px 0;
    text-decoration: none;
  }
  a.router-link-exact-active {
    background-color: #444;
  }
  </style>
  