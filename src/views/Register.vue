<template>
  <section class="">
    <div class="grid grid-cols-2">
      <img class="md:w-40" src="../assets/pyfLogo.png" />
      <p
        class="
          text-right text-white
          mr-4
          text-xl
          sm:text-4xl
          md:7xl
          my-auto
          font-semibold
        "
      >
        REGISTRO
      </p>
      <form
        @submit.prevent="register(this.email, this.password)"
        class="
          col-span-2
          p-6
          mt-10
          md:my-14
          mx-auto
          text-xl
          md:text-3xl
          lg:text-5xl
        "
        autocomplete="off"
      >
        <label class="block text-white mt-4 md:mt-8" for="name">Nombre:</label>
        <input
          class="block w-full bg-transparent border-b-4 text-white outline-none"
          type="text"
          id="name"
          v-model="name"
          required="true"
        />
        <label class="block text-white mt-4 md:mt-8" for="email">Correo:</label>
        <input
          class="block w-full bg-transparent border-b-4 text-white outline-none"
          type="text"
          id="email"
          v-model="email"
          required="true"
        />
        <label class="block text-white mt-4 md:mt-8" for="pass"
          >Contraseña:</label
        >
        <input
          class="block w-full bg-transparent border-b-4 text-white outline-none"
          type="password"
          id="pass"
          v-model="password"
          required="true"
        />
        <label class="block text-white mt-4 md:mt-8" for="select"
          >Personaje favorito:</label
        >
        <select
          class="
            select-content
            bg-gray-300
            outline-none
            border-none
            rounded
            text-white
            p-1
            sm:p-2
            md:p-4
          "
          id="select"
          v-model="select"
          required="true"
        >
          <option value="none" selected></option>
          <option value="Phineas">Phineas Flynn</option>
          <option value="Ferb">Ferb Fletcher</option>
          <option value="Candace">Candace Flynn</option>
          <option value="Perry">Perry/Agente P</option>
          <option value="Heinz">Heinz Doofenshmirtz</option>
          <option value="Isabella">Isabella Garcia-Shapiro</option>
        </select>
        <input
          class="
            btn btn-indigo
            sm:text-lg
            md:text-2xl
            block
            mt-4
            md:mt-8
            mx-auto
          "
          type="submit"
          value="CREAR CUENTA"
        />
      </form>
      <div class="text-right text-center my-auto">
        <p class="text-white sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl">
          ¿Ya tienes cuenta?
        </p>
        <a
          href="/login"
          class="ref ref-orange sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl"
          >Click aquí</a
        >
      </div>
      <img class="h-40 mx-auto mb-5" src="../assets/ferb.png" />
    </div>
  </section>
</template>

<script>
import NProgress from "nprogress";
import swal from "sweetalert";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "../firebase/firebaseConfig";

export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      select: "",
    };
  },
  methods: {
    register(email, password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          // GUARDAR DATOS DE USUARIO EN EL CURRENTUSER
          updateProfile(auth.currentUser, {
            displayName: this.name,
            photoURL: this.select,
          });
          swal("! Registrado !", "Ya puedes iniciar sesión", "success");
          this.name = "";
          this.email = "";
          this.password = "";
          this.select = "";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          switch (errorCode) {
            case "auth/email-already-in-use":
              swal(
                "Error!",
                "⚡ El correo electrónico ingresado ya existe ⚡",
                "error"
              );
              break;
            case "auth/invalid-email":
              swal(
                "Error!",
                "⚡ Lo lamentamos, el correo que ingresaste no es valido ⚡",
                "error"
              );
              break;
            case "auth/uid-already-exists":
              swal("Error!", "Correo electrónico inválido", "error");
              break;
            default:
              swal("Error!", errorMessage, "error");
          }
        });
    },
  },
  async created() {
    NProgress.done();
  },
};
</script>