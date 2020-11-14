<template>
  <div class="form-wrapper">
    <label>Nombre: </label><br />
    <input v-model="user.name.firstname" required /><br />

    <label>Apellido: </label><br />
    <input v-model="user.name.lastname" required /><br />

    <label>Nombre de usuario: </label><br />
    <input v-model="user.username" required /><br />

    <label>Contraseña: </label><br />
    <input v-model="user.password" required /><br />

    <label>Foto: </label><br />
    <input v-model="user.photo" required /><br />

    <label>Activar usuario </label
    ><input type="checkbox" id="checkbox" v-model="user.active" /><br />

    <button color="success" class="mr-4" @click="sendChangesDepen()">
      Guardar
    </button>

    <div>
      <UserList />
    </div>
  </div>
</template>

<script>
import UserList from "./components/UserList";
export default {
  name: "App",
  components: {
    UserList,
  },
  data() {
    return {
      user: {
        name: { firstname: "", lastname: "" },
        username: "",
        password: "",
        foto: "",
        active: false,
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
