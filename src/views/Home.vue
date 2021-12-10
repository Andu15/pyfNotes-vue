<template>
  <div class="text-center text-white py-6">
    <h1 class="text-2xl sm:text-3xl md:text-5xl font-semibold py-3">Bienvenid@ a P&F Notes</h1>
    <a href="/login"><button class="btn btn-indigo sm:text-lg md:text-2xl">COMENZAR</button></a>
    <img class="mx-auto p-left-20" src="../assets/p&f.png"/>
  </div>
</template>

<script>
import NProgress from 'nprogress';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  async created(){
    NProgress.done()
  }
}
</script>
