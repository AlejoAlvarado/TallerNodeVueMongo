<template>
  <div class="form-wrapper">
    <label>Nombre: </label><br />
    <input v-model="user.name.fistname" /><br />

    <label>Apellido: </label><br />
    <input v-model="user.name.lastname" /><br />

    <label>Nombre de usuario: </label><br />
    <input v-model="user.username" /><br />

    <label>Tipo de identificación: </label><br />
    <input v-model="user.userid.idtype" /><br />

    <label>Número de identificación: </label><br />
    <input v-model="user.userid.idvalue" /><br />

    <label>Contraseña: </label><br />
    <input v-model="user.password" /><br />

    <label>Foto: </label><br />
    <input v-model="user.photo" /><br />

    <label>Activar usuario </label
    ><input type="checkbox" id="checkbox" v-model="user.active" /><br />

    <button
      v-if="editmode"
      color="success"
      class="mr-4"
      v-on:click="sendEditUser"
    >
      Guardar
    </button>

    <button v-else color="success" class="mr-4" v-on:click="sendChangesUser">
      Crear
    </button>

    <div>
      <UserList @click="editUser" />
    </div>
  </div>
</template>

<script>
import UserList from "./components/UserList";
import axios from "axios";
export default {
  name: "App",
  components: {
    UserList,
  },
  data() {
    return {
      user: {
        name: { fistname: "", lastname: "" },
        username: "",
        password: "",
        photo: "",
        active: false,
        userid: { idtype: "", idvalue: "" },
        id: "",
      },
      editmode: false,
    };
  },
  methods: {
    sendChangesUser: function() {
      let data = {
        name: {
          fistname: this.user.name.firstname,
          lastname: this.user.name.lastname,
        },
        username: this.user.username,
        photo: this.user.photo,
        password: this.user.password,
        state: this.user.active,
        userid: {
          idtype: this.user.userid.idtype,
          idvalue: this.user.userid.idvalue,
        },
      };
      axios.defaults.baseURL = "http://localhost:3000";
      axios.post("/users/create/", data).then((res) => {
        if (res.status >= 200 && res.status < 300) {
          console.log("Usuario guardado con éxito");
          (this.user.name.firstname = ""),
            (this.user.name.lastname = ""),
            (this.user.username = ""),
            (this.user.password = ""),
            (this.user.photo = ""),
            (this.user.active = ""),
            (this.user.userid.idtype = ""),
            (this.user.userid.idvalue = "");
        } else {
          console.log("Ocurrió un error");
        }
      });
    },
    sendEditUser: function() {
      let data = {
        name: {
          fistname: this.user.name.firstname,
          lastname: this.user.name.lastname,
        },
        username: this.user.username,
        photo: this.user.photo,
        password: this.user.password,
        state: this.user.active,
        userid: {
          idtype: this.user.userid.idtype,
          idvalue: this.user.userid.idvalue,
        },
      };
      axios.defaults.baseURL = "http://localhost:3000";
      axios.put(`/users/edit/${this.user.id}`, data).then((res) => {
        if (res.status >= 200 && res.status < 300) {
          console.log("El user ha sido editado");
          (this.user.name.firstname = ""),
            (this.user.name.lastname = ""),
            (this.user.username = ""),
            (this.user.password = ""),
            (this.user.photo = ""),
            (this.user.active = ""),
            (this.user.userid.idtype = ""),
            (this.user.userid.idvalue = "");
          this.user.id = "";
        } else {
          console.log("Ocurrió un error");
        }
      });
    },
    editUser: function(user) {
      this.editmode = true;
      (this.user.name.firstname = user.name.firstname),
        (this.user.name.lastname = user.name.lastname),
        (this.user.username = user.username),
        (this.user.password = user.password),
        (this.user.photo = user.photo),
        (this.user.active = user.active),
        (this.user.userid.idtype = user.userid.idtype),
        (this.user.userid.idvalue = user.userid.idvalue);
      this.user.id = user.id;
    },
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
