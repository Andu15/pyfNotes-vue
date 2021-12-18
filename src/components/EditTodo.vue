<template>
  <div class="edit-section">
    <textarea name="textarea" rows="3" cols="30" placeholder="Escribe aquí..." v-model="newText"/>
    <div>
      <button type="button" @click="updateToDo(id)">Aceptar</button>
    </div>
  </div>
</template>

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
    }
  }
}
</script>
