<template>
  <div class="todo" v-bind:class="{completed: todo.completed}">
    <div class="todo-body" >
      <input type="checkbox"
        v-on:change="checkTodo"
      >
      {{todo.text}}
      <EditTodo v-bind:id="todo.id" v-if="show" @closeNewText="toggleShow"/>
    </div>
    <div class="grid grid-cols-2">
      <button class="ml-4 my-4 min-h-fit" @click="toggleShow"><img class="todo-btn-edit" src="https://img.icons8.com/dusk/64/000000/edit--v1.png"/></button>
      <button class="mr-4 my-4 min-h-fit" @click="$emit('delete-todo', todo.id)"><img class="todo-btn-delete" src="https://img.icons8.com/stickers/100/000000/delete-forever.png"/></button>
    </div>
  </div>
</template>

<style scoped>
  .todo{
    width: 98%;
    margin: 0px auto;
    padding: 4px;
    /* background-color:silver; */
  }
  .todo-body{
    /* display: inline; */
  }
  .todo-actions{

  }
  .btn-action{
    /* height: 20px; */
  }
  .todo-btn-edit{
    float: left;
    height: 25px;
  }
  .todo-btn-delete{
    float: right;
    height: 25px;
  }
  .checkbox{
    cursor: pointer;
    margin: 0 20px 0 0;
  }
  .completed{
    color: #ccc;
    text-decoration: line-through;
  }
  .todo:not(.completed):hover{
    background-color: #eee;
    border-radius: 5px;
  }
</style>

<script>
import EditTodo from './EditTodo.vue';

  export default {
    name: 'Cards',
    components: {
    EditTodo,
    },
    props: ['todo'],
    data(){
      return{
        show: false,
      }
    },
    methods: {
      checkTodo(){
        // eslint-disable-next-line vue/no-mutating-props
        this.todo.completed = !this.todo.completed;
      },
      toggleShow(){
        this.show = !this.show;
      }
    }
  }
</script>