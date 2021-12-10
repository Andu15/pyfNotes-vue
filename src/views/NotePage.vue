<template>
  <section class="">
    <div class="grid grid-cols-2">
      <img class="md:w-40" src="../assets/pyfLogo.png"/>
      <p class="text-right text-white mr-4 text-xl sm:text-4xl md:7xl my-auto font-semibold">NOTAS</p>
    </div>
    <div class="grid grid-cols-1 my-6">
      <h1 class="text-glowingOrange text-center mb-2">Hola, !</h1>
      <p class="text-white text-center mb-4">Actualmente tienes {} nota creada</p>
      <input class="text-white w-80 m-auto rounded-2xl px-4 lg:px-8 py-2 lg:py-4" type="search" placeholder="🔍 Busca una nota"/>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
      <div v-bind:key="todo.id" v-for="todo in copyTodos">
        <Cards v-bind:todo="todo" v-on:delete-todo="deleteTodo"/>
      </div>
    </div>
    <div class="grid grid-cols-2">
      <a @click="signout" class="Logout">Cerrar Sesión</a>
      <button class="CreateTodoButton">+</button>
    </div>
    <Modal />
  </section>
</template>

<script>
  import { onBeforeMount } from 'vue';
  import { useRouter } from 'vue-router';
  import { auth } from '../firebase/firebaseConfig';
  import {
  onAuthStateChanged,
  signOut
  } from "firebase/auth";
  import Cards from '../components/Cards.vue';
  import Modal from '../components/Modal.vue';
  

  export default {
    name: 'NotePage',
    components: {
    Cards,
    Modal
  },
  data(){
    return{
      todos: [
        {
          id: 0,
          title: 'comprar la cena',
          completed: false
        },
        {
          id: 1,
          title: 'sacar a pasear al perro',
          completed: true
        },
        {
          id: 2,
          title: 'jugar Xbox',
          completed: false
        },
        {
          id: 3,
          title: 'bañar al gato',
          completed: true
        },
        {
          id: 4,
          title: 'salir de compras',
          completed: false
        }
      ],
      copyTodos: []
    }
  },
  created(){
    this.copyTodos = [...this.todos]
  },
  methods:{
    deleteTodo(id){
      // console.log(id)
      this.todos = this.todos.filter((todo) => todo.id !== id);
      this.copyTodos = [...this.todos];
    },
    signout () {
      signOut(auth).then(() => {
        console.log('¡Sesión cerrada! Inicia sesión.');
      }).catch((error) => {
        console.log(error)
      });
     }
  },
  setup(){
    const router = useRouter();

    onBeforeMount(()=>{
    //observable de firebase
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.replace('/login');
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          // const uid = user.uid;
          // ...
        } else {
          router.go('/notes');
        }
      });
    })
  }
  }
</script>