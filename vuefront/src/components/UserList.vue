<template>
  <div>
    <ul id="userList">
      <li v-for="(user, index) in users" :key="index">
        {{ user.name.fistname }}
        <button v-on:click="showUser(user)">Ver</button>
        <button v-on:click="editUser(user)">Editar</button>
        <button v-on:click="removeUser(user)">Eliminar</button>
      </li>
    </ul>

    <div>
      <h2>Descripcion de usuario:</h2>
      <label>Nombre: </label> <label> {{ this.user.name.fistname }} </label
      ><br />
      <label>Apellido: </label> <label> {{ this.user.name.lastname }} </label
      ><br />
      <label>Nombre de usuario: </label> {{ this.user.username }} <label></label
      ><br />
      <label>Tipo de identificación: </label> {{ this.user.userid.idtype }}
      <label></label><br />
      <label>Numero de identificación: </label> {{ this.user.userid.idvalue }}
      <label></label><br />
      <label>Contraseña: </label> <label> {{ this.user.password }} </label
      ><br />
      <label>Activo: </label> <label> {{ this.user.state }} </label><br />
      <label>Foto: </label> <label> {{ this.user.photo }} </label><br />
      <div><img :src="this.user.photo" /></div>
    </div>
  </div>
</template>

<script>
import Eventbus from "../bus";
import axios from "axios";

const url = "http://localhost:3000/users";

export default {
  data() {
    return {
      users: "",
      user: {
        name: {
          fistname: "",
          lastname: "",
        },
        username: "",
        photo: "",
        password: "",
        state: "",
        userid: {
          idtype: "",
          idvalue: "",
        },
      },
    };
  },
  mounted() {
    Eventbus.$on("getUsers", () => {
      axios.get(url + "/").then((result) => {
        this.users = result.data;
        console.log("get Users");
        console.log(url);
        console.log(result.data);
      });
    });
  },
  created() {
    this.getUsers();
  },
  methods: {
    saveEdit: function() {
      console.log("save");
    },
    editUser: function(user) {
      this.$emit("click", user);
    },
    removeUser: function(user) {
      axios.defaults.baseURL = url;
      axios.delete(url + "/delete/" + user._id).then((res) => {
        if (res.status >= 200 && res.status < 300) {
          console.log("delete exitoso");
          this.getUsers();
        } else {
          console.log("No pudo borrarse al usuario");
        }
      });
    },
    getUsers() {
      axios.get(url + "/").then((result) => {
        this.users = result.data;
      });
    },
    showUser(user) {
      this.user = user;
    },
  },
};
</script>

<style></style>
