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
        INGRESO
      </p>
      <form
        autocomplete="off"
        class="
          col-span-2
          p-6
          my-10
          md:my-14
          mx-auto
          text-left text-3xl
          md:text-4xl
          lg:text-6xl
        "
        @submit.prevent="loginWithEmail(this.email, this.password)"
      >
        <label class="block text-white mt-4 md:mt-8" for="email">Correo:</label>
        <input
          class="block w-full bg-transparent border-b-4 text-white"
          type="text"
          id="email"
          v-model="email"
          required="true"
        />
        <label class="block text-white mt-4 md:mt-8" for="password"
          >Contraseña:</label
        >
        <input
          class="block w-full bg-transparent border-b-4 text-white"
          type="password"
          id="password"
          v-model="password"
          required="true"
        />
        <button
          @click.prevent="recoverPassword(this.email)"
          class="
            ref ref-orange
            text-right
            sm:text-lg
            md:text-xl
            lg:text-3xl
            xl:text-4xl
          "
        >
          ¿Olvidaste tu contraseña?
        </button>
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
          value="INGRESAR"
        />
      </form>
      <img class="h-65" src="../assets/Phineas_100.png" />
      <div
        class="
          text-center
          my-auto
          text-lg
          sm:text-xl
          md:text-2xl
          lg:text-4xl
          xl:text-6xl
          2xl:text-8xl
        "
      >
        <p class="text-white">¿Aun no tienes una cuenta?</p>
        <a
          class="ref ref-orange sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl"
          href="/register"
          >Registrate Aquí</a
        >
      </div>
    </div>
  </section>
</template>

<script>
import NProgress from "nprogress";
import swal from "sweetalert";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "../firebase/firebaseConfig";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    loginWithEmail(email, password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          swal("! Bien !", "Ya te encuentras logueado", "success");
          this.$router.replace("notes");
          window.location.reload(true);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          switch (errorCode) {
            case "auth/wrong-password":
              swal("Error!", "⚡ La contraseña es incorrecta ⚡", "error");
              break;
            case "auth/invalid-email":
              swal(
                "Error!",
                "⚡ Lo lamentamos, el correo que ingresaste no es valido ⚡",
                "error"
              );
              break;
            case "auth/user-not-found":
              swal(
                "Error!",
                "⚡ Usuario y/o contraseña incorrecta ⚡",
                "error"
              );
              break;
            default:
              swal("Error!", errorMessage, "error");
          }
        });
    },
    recoverPassword(email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          swal(
            "!Revisa tu correo!",
            "Te hemos enviado un correo para reestablecer tu contraseña",
            "success"
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          switch (errorCode) {
            case "auth/missing-email":
              swal(
                "Error!",
                "⚡ Por favor ingresa tu correo electrónico ⚡",
                "error"
              );
              break;
            case "auth/user-not-found":
              swal(
                "Error!",
                "⚡ El correo ingresado no esta registrado en nuestra base de datos ⚡",
                "error"
              );
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
