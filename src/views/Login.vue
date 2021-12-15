<template>
  <section class="">
    <div class="grid grid-cols-2">
      <img class="md:w-40" src="../assets/pyfLogo.png"/>
      <p class="text-right text-white mr-4 text-xl sm:text-4xl md:7xl my-auto font-semibold">INGRESO</p>
      <form autocomplete="off" class="col-span-2 p-6 my-10 md:my-14 mx-auto text-left text-3xl md:text-4xl lg:text-6xl">
        <label class="block text-white mt-4 md:mt-8" for="fname">Correo:</label>
        <input class="block w-full bg-transparent border-b-4 text-white" type="text" id="fname" name="fname">
        <label class="block text-white mt-4 md:mt-8" for="lname">Contraseña:</label>
        <input class="block w-full bg-transparent border-b-4 text-white" type="password" id="lname" name="lname">
        <a class="ref ref-orange text-right sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">¿Olvidaste tu contraseña?</a>
        <input class="btn btn-indigo sm:text-lg md:text-2xl block mt-4 md:mt-8 mx-auto" type="submit" value="INGRESAR" >
      </form>
      <img class="h-65" src="../assets/Phineas_100.png"/>
      <div class="text-center my-auto text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-8xl">
        <p class="text-white">¿Aun no tienes una cuenta?</p>
        <a class="ref ref-orange sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl" href="/register">Registrate Aquí</a>
      </div>
    </div>
  </section>
</template>

<script>
import NProgress from 'nprogress';
  // import { onMounted } from 'vue';

  export default {
  name: 'Login',
  components: {
    // HelloWorld
  },
  async created(){
    NProgress.done();
  }
  //   setup(){
  //     onMounted(()=>{
  //       console.log('Hola mundo')
  //     })
  //   }
}
</script>
