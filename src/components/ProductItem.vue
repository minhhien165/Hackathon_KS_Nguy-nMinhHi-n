<template>
    <tr>
      <td>{{ index }}</td>
      <td><img :src="product.image" alt="product.name" class="product-image"></td>
      <td>{{ product.name }}</td>
      <td>{{ product.price }} đ</td>
      <td>{{ product.quantity }}</td>
      <td class="option-cell">
        <button class="edit" @click="editProduct">Edit</button>
        <button class="delete" @click="deleteProduct">Delete</button>
      </td>
    </tr>
  </template>
  
  <script setup>
  import { defineEmits, defineProps } from 'vue';
  
  const props = defineProps({
    product: Object,
    index: Number,
  });
  
  const emit = defineEmits(['edit', 'delete']);
  
  const editProduct = () => {
    emit('edit', props.product.id);
  };
  
  const deleteProduct = () => {
    emit('delete', props.product.id);
  };
  </script>
  
  <style scoped>
  .product-image {
    width: 80px;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  
  .option-cell {
  justify-content: center;
  gap: 10px;
}

td {
  text-align: center;
  vertical-align: middle;
  border: 1px solid #adb5bd;
  padding: 8px; 
}
.option-cell button {
  border: none; 
  padding: 8px 12px;
  border-radius: 4px;
}

.edit{
  background-color: orange;
  color: white;
  margin-right: 10px ;
}

.delete{
  background-color: red;
  color: white;
  margin-left: 10px;
}

td {
  text-align: center;
  vertical-align: middle;
  border: 1px solid #adb5bd; 
  padding: 8px;
}

table {
  width: 100%;
  border-collapse: collapse; 
}

th, td {
  border: 1px solid #adb5bd; 
  padding: 8px;
}

.product-image{
    height: 50px;
    width: auto;
}
</style>
  