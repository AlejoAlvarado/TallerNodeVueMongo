<template>
  <div class="form-wrapper">
    <label>Nombre: </label><br />
    <input v-model="user.name.firstname" required /><br />

    <label>Apellido: </label><br />
    <input v-model="user.name.lastname" required /><br />

    <label>Nombre de usuario: </label><br />
    <input v-model="user.username" required /><br />

    <label>Tipo de identificación: </label><br />
    <input v-model="user.userid.idtype" required /><br />

     <label>Número de identificación: </label><br />
    <input v-model="user.userid.idvalue" required /><br />

    <label>Contraseña: </label><br />
    <input v-model="user.password" required /><br />

    <label>Foto: </label><br />
    <input v-model="user.photo" required /><br />

    <label>Activar usuario </label
    ><input type="checkbox" id="checkbox" v-model="user.active" /><br />

    <button color="success" class="mr-4" v-on:click="sendChangesDepen">
      Guardar
    </button>

    <div>
      <UserList />
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
        name: { firstname: "", lastname: "" },
        username: "",
        password: "",
        photo: "",
        active: false,
        userid:{idtype:"", idvalue:""},
      },
    };
  },
  methods:{
    sendChangesDepen: function(){
      let data={
        name:{
          fistname: this.user.name.firstname,
          lastname:this.user.name.lastname
        },
        username: this.user.username,
        photo: this.user.photo,
        password: this.user.password,
        state: this.user.active,
        userid: {
          idtype: this.user.userid.idtype,
          idvalue: this.user.userid.idvalue
        }

      }
      axios.defaults.baseURL = 'http://localhost:3000'
      axios.post("/users/create/", data).then((res)=>{
        if(res.status >= 200 && res.status<300){
           console.log("Usuario guardado con éxito")

        }else{
          console.log("Ocurrió un error")
        }
      })
     
    }

  }
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
