<template>
  <div class="edit-section px-7 py-3">
    <textarea name="textarea" rows="3" cols="25" placeholder="Escribe aquí..." v-model="newText"/>
    <div align="right">
      <button type="button" @click="updateToDo(id)" class="rounded bg-darkPurple p-2 text-white hover:bg-indigo-600">OK</button>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
import { doc, updateDoc } from "firebase/firestore";

import { db } from '../firebase/firebaseConfig';

export default { 
  name: 'EditTodo',
  props: ['todo', 'id'],
  data(){
    return{
      newText: '',
    }
  },
  setup(props, {emit}){
    const closeNewText = () => {
      emit('closeNewText');
    }
    return { closeNewText };
  },
  methods: {
    async updateToDo(id) {
      const docRef = doc(db, "notes", id);
      if(this.newText !== ""){
        await updateDoc(docRef, {
        text: this.newText,
      });
      }
      this.newText = '';
      this.$emit('closeNewText');
      window.location.reload(true);
    }
  }
}
</script>
