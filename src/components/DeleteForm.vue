<template>
    <div class="overlay" v-if="isVisible">
      <div class="modal-container">
        <h3>Xác nhận xóa</h3>
        <p>Bạn có chắc chắn muốn xóa sản phẩm này không?</p>
        <div class="buttons">
          <button @click="close">Cancel</button>
          <button @click="confirmDelete">Delete</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    isVisible: Boolean,
  });
  const emit = defineEmits(['close', 'delete']);
  
  const close = () => {
    emit('close');
  };
  
  const confirmDelete = () => {
    emit('delete');
    close();
  };
  </script>
  
  <style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    gap: 10px;
  }
  
  button {
    padding: 8px 12px; 
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    opacity: 0.8;
  }
  
  button:nth-child(1) {
    background-color: gray;
    color: white;
  }
  
  button:nth-child(2) { 
    background-color: #f44336;
    color: white;
  }
  </style>
  