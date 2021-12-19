<template>
  <div class="modal-container" v-show="modalActive">
    <div class="modal grid grid-cols-1 p-20">
      <h3 class="text-center text-white">ESCRIBE TU NOTA</h3>
      <textarea rows="5" class="cursor-text rounded m-3" v-model="textToDo" required="true"></textarea>
      <p v-if="error.length" class="text-glowingOrange">{{error}}</p>
      <div class="grid grid-cols-2 py-5">
        <button @click="close" type="button" class="text-white cursor-pointer p-2">CANCELAR</button>
        <button @click="addToDo" class="text-white cursor-pointer bg-indigo-700 p-2 rounded hover:bg-indigo-600">ANADIR</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .modal-container{
    background: rgba(32,35,41,.8);
    position: fixed;
    top: -10px;
    left: -20px;
    right: -20px;
    bottom: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal{
    background-color: #1C9C47;
    border-radius: 20px;
  }
</style>

<script>
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import { auth } from '../firebase/firebaseConfig';
import { db } from '../firebase/firebaseConfig';

export default {
  name: 'Modal',
  props: ["modalActive"],
  setup(props, {emit}){
    const close = () => {
      emit('close');
    }
    return { close };
  },
  data(){
    return {
      textToDo: '',
      error: '',
    }
  },
  methods: {
    async addToDo(){
      const user = auth.currentUser;
      if(this.textToDo){
        await addDoc(collection(db, "notes"), {
        userId: user.uid,
        author: user.displayName,
        text: this.textToDo,
        completed: false,
        timestamp: serverTimestamp(),
        });
        this.error = '';
        this. textToDo = '';
        this.$emit('close');
        window.location.reload(true);
      } else {
        this.error = 'Debes escribir algún texto';
      }
    }
  }
}
</script>
