<template>
  <section class="text-white text-lg md:text-3xl">
    <div class="grid grid-cols-2 py-8">
      <div class="my-auto mr-4 m-4 md:m-8 lg:m-14">
        <p class="text-right font-semibold">Oops!</p>
        <p class="text-right font-semibold">No encontramos lo que buscas</p>
      </div>
      <img class="rounded-full h-40 md:h-80 w-40 md:w-80 m-left md:ml-4" src="../assets/oops.jpeg"/>
      <div class="col-span-2 text-center my-8">
        <p class="font-semibold">Pero... no te vayas!</p>
        <p class="font-semibold">puedes pulsar aquí </p>
      </div>
      <div class="col-span-2 relative mx-auto p-2">
        <img class="w-80 m-auto rounded-xl" src="../assets/refbtn.jpeg"/>
        <a class="btn btn-indigo absolute -mt-9 w-80 text-center" href="/">Ir a Inicio</a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'NotFound',
  }
</script>