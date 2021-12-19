<template>
  <section class="modal">
    <div class="grid grid-cols-2">
      <img class="md:w-40" src="../assets/pyfLogo.png"/>
      <p class="text-right text-white mr-4 text-xl sm:text-4xl md:7xl my-auto font-semibold">NOTAS</p>
    </div>
    <div class="grid grid-cols-1 my-6">
      <h1 class="text-glowingOrange text-center mb-2 font-semibold">Hola, <span v-if="userName.length">{{userName}}</span>!</h1>
      <p class="text-white text-center mb-4">Actualmente tienes {{this.todos.length}} notas creadas</p>
      <input class="w-80 m-auto rounded-2xl px-4 lg:px-8 py-2 lg:py-4" type="search" placeholder="🔍 Busca una nota" v-model="inputSearch" v-on:input="querySearch"/>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
      <div v-for="(todo, index) in copyTodos" :key="index">
        <Cards v-bind:todo="todo" v-on:delete-todo="deleteTodo"/>
      </div>
    </div>
    <div class="grid grid-cols-2">
      <a @click="signout" class="Logout">Cerrar Sesión</a>
      <button type="button" @click="toggleModal" class="CreateTodoButton">+</button>
    </div>
    <Modal :modalActive="modalActive" @close="toggleModal" />
  </section>
</template>

<script>
  import NProgress from "nprogress";
  import { ref } from '@vue/reactivity';
  import {
  signOut
  } from "firebase/auth";
  import { collection, doc, getDocs, deleteDoc, query, onSnapshot, where } from "firebase/firestore";

  import Cards from '../components/Cards.vue';
  import Modal from '../components/Modal.vue';
  import { auth, db } from '../firebase/firebaseConfig';

  export default {
    name: 'NotePage',
    components: {
    Cards,
    Modal,
  },
  data(){
    return{
      todos: [],
      copyTodos: [],
      userName: '',
      inputSearch: '',
    }
  },
  created(){
    this.copyTodos = this.todos;
  },
  methods:{
    signout () {
      signOut(auth).then(() => {
        console.log('¡Sesión cerrada! Inicia sesión.');
        this.$router.replace("login");
        window.location.reload(true);
      }).catch((error) => {
        console.log(error)
      });
     },
    async getToDo () {
      const user = auth.currentUser;

      const q = query(collection(db, "notes"), where("userId", "==", user.uid));
      const querySnapshot = await getDocs(q);

      await querySnapshot.forEach((doc) => {
        this.todos.push({id: doc.id, ...doc.data()});
      });

      NProgress.done();
    },
    async deleteTodo(id){
      await deleteDoc(doc(db, "notes", id));
    },
    async getOnSnapshot () {
      const user = auth.currentUser;

      const q = query(collection(db, "notes"), where("userId", "==", user.uid));
      onSnapshot (q, (querySnapshot) => {
        const newNotes = [];
        querySnapshot.forEach((doc) => {
          newNotes.push({id: doc.id, ...doc.data()});
        });
      });
    },
    async getNameUser () {
      await auth.currentUser ? this.userName = auth.currentUser.displayName : this.userName = 'nuevo usuario';
    },
    querySearch(){
      if(this.inputSearch.trim() === ''){
        this.copyTodos = [...this.todos];
      } else{
        const temp = this.todos.filter((todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = this.inputSearch.toLowerCase();
          return todoText.includes(searchText);
        });
        this.copyTodos = [...temp];
      }
    }
  },
  mounted() {
      this.getToDo();
      this.getNameUser();
      this.getOnSnapshot();
    },
  setup(){
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    }
    return { modalActive, toggleModal };
  }
}
</script>