<template>
  <div>
    <ul id="userList">
      <li v-for="(user, index) in users" :key="index">
        {{ user.name.fistname }} <button>Ver</button>
        <button v-on:click="editUser(user)">Editar</button>
        <button>Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

const url = "http://localhost:3000/users/";

export default {
  data() {
    return {
      users: "",
    };
  },
  watch: {
    users: function() {
      let users = {};

      axios.get(url).then((result) => {
        users = result.data;
      });

      return users;
    },
    //axios.get(url).then((result) => {
    //  this.users = result.data;
    //});
  },
  created() {
    axios.get(url).then((result) => {
      this.users = result.data;
    });
  },
  methods: {
    saveEdit: function() {
      console.log("save");
    },
    editUser: function(user) {
      this.$emit("click", user);
    },
  },
};
</script>

<style></style>
