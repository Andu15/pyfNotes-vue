<template>
  <div class="grid grid-cols-1">
    <h2>Escribe tu nota</h2>
    <textarea v-model="body"></textarea>
    <div class="grid grid-cols-2">
      <button>CANCELAR</button>
      <button>ANADIR</button>
    </div>
  </div>
</template>

<script>
import {uuid} from 'vue-uuid';
  export default{
    name: 'Modal',
    data(){
      return{
        body: ''
      }
    },
    methods: {
      addTodo(e){
        e.preventDefault();
        const newTodo = {
          id: uuid.v4(),
          title: this.title,
          completed: false
        }
        this.title = '';
        this.$emit('add-todo', newTodo)
      }
    }
  }
</script>

<style scoped>
</style>