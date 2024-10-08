<template>
  <div class="overlay" v-if="isVisible">
    <div class="form-container">
      <h2>{{ isEdit ? 'Edit Product' : 'Add New Product' }}</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="product.name" required />
        </div>
        <div class="form-group">
          <label for="image">Image:</label>
          <input type="text" id="image" v-model="product.image" required />
        </div>
        <div class="form-group">
          <label for="price">Price:</label>
          <input type="number" id="price" v-model="product.price" required />
        </div>
        <div class="form-group">
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" v-model="product.quantity" required />
        </div>
        <div class="buttons">
          <button type="button" @click="closeForm">Close</button>
          <button type="submit">{{ isEdit ? 'Save' : 'Add' }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  isVisible: Boolean,
  isEdit: Boolean,
  editProductData: Object,
});

const emit = defineEmits(['close', 'save', 'add']);
const product = ref({
  name: '',
  price: '',
  quantity: '',
  image: '',
});
watch(
  () => props.editProductData,
  (newValue) => {
    if (newValue) {
      product.value = { ...newValue };
    } else {
      resetForm();
    }
  }
);
const closeForm = () => {
  resetForm(); 
  emit('close');
};
const resetForm = () => {
  product.value = {
    name: '',
    price: '',
    quantity: '',
    image: '',
  };
};
const validateForm = () => {
  const { name, price, quantity, image } = product.value;

  if (!name || !image) {
    alert('Name và Image không được để trống');
    return false;
  }

  if (price < 10000) {
    alert('Giá phải lớn hơn hoặc bằng 10.000 đ');
    return false;
  }

  if (quantity < 1 || quantity > 100) {
    alert('Số lượng phải từ 1 đến 100');
    return false;
  }

  return true;
};
const submitForm = () => {
  if (!validateForm()) return;

  if (props.isEdit) {
    emit('save', { ...product.value });
  } else {
    emit('add', { ...product.value });
  }
  closeForm();
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Màu nền mờ */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.form-container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 400px;
  max-width: 100%;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

button {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: gray;
  color: white;
}
button[type="submit"] {
  background-color: blue;
}
</style>
