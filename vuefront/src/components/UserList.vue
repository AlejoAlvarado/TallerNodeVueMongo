<template>
  <div>
    <ul id="userList">
      <li v-for="(user, index) in users" :key="index">
        {{ user.name.firstname }} <button>Ver</button> <button v-on:click="editUser(user)">Editar</button>
        <button>Eliminar</button>
        
      </li>
    </ul>

   
  </div>
</template>

<script>
import { Fakeusers } from "../Data/users.js";

export default {
  data() {
    return {
      users: {},
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
  created() {
    this.users = Fakeusers;
  },
  methods:{    
    
    editUser: function(user){
      this.$emit("click", user)

    }
  }
};
</script>

<style></style>
