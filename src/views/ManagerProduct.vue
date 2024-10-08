<template>
    <div>
      <div class="header">
        <h4>Manager Product</h4>
        <button @click="showAddForm">Add New Product</button>
      </div>
  
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          <ProductItem
            v-for="(product, index) in products"
            :key="product.id"
            :product="product"
            :index="index + 1"
            @edit="openEditForm"
            @delete="showDeleteModal(product.id)"
          />
        </tbody>
      </table>
  
      <ConfirmationModal
        :isVisible="showDeleteModalState"
        @close="closeDeleteModal"
        @delete="deleteProduct"
      />

      <!-- Form thêm/sửa sản phẩm -->
      <ProductForm
        :isVisible="showForm"
        :isEdit="isEdit"
        :editProductData="editingProduct"
        @close="closeForm"
        @save="updateProduct"
        @add="addProduct"
      />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductItem from '../components/ProductItem.vue';
import ProductForm from '../components/ProductForm.vue';
import ConfirmationModal from '../components/DeleteForm.vue';

const products = ref(JSON.parse(localStorage.getItem('products')) || []);
const showForm = ref(false);
const isEdit = ref(false);
const editingProduct = ref(null);
const showDeleteModalState = ref(false);
let productToDelete = null; 

const showAddForm = () => {
  isEdit.value = false;
  showForm.value = true;
};

const openEditForm = (id) => {
  const product = products.value.find((p) => p.id === id);
  if (product) {
    editingProduct.value = { ...product };
    isEdit.value = true;
    showForm.value = true;
  }
};

const showDeleteModal = (id) => {
  productToDelete = id;
  showDeleteModalState.value = true; 
};

const closeDeleteModal = () => {
  showDeleteModalState.value = false;
  productToDelete = null; 
};
const deleteProduct = () => {
  products.value = products.value.filter((product) => product.id !== productToDelete);
  saveToLocalStorage();
  closeDeleteModal();
};
const saveToLocalStorage = () => {
  localStorage.setItem('products', JSON.stringify(products.value));
};
const closeForm = () => {
  showForm.value = false;
  editingProduct.value = null;
};
const addProduct = (newProduct) => {
  newProduct.id = products.value.length ? Math.max(...products.value.map(p => p.id)) + 1 : 1; // Tạo ID mới
  products.value.push(newProduct);
  saveToLocalStorage();
};
const updateProduct = (updatedProduct) => {
  const index = products.value.findIndex((p) => p.id === updatedProduct.id);
  if (index !== -1) {
    products.value[index] = { ...updatedProduct };
    saveToLocalStorage();
  }
};

</script>

  
  
<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
  }
  
  h4 {
    margin: 0;
  }
  
  button {
    padding: 8px 12px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: blue;
  }
  
  table {
    width: 75vw;
    margin: 20px;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 12px;
    border: 1px solid #ccc;
    text-align: center;
    vertical-align: middle;
  }
  
  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
  
  td img {
    width: 80px;
    height: auto;
  }
  
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .form-container {
    background: white;
    padding: 20px;
    width: 400px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  form div {
    margin-bottom: 15px;
  }
  
  input {
    width: calc(100% - 20px);
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
</style>
  