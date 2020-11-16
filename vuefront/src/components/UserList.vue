<template>
  <div>
    <ul id="userList">
      <li v-for="(user, index) in users" :key="index">
        {{ user.name.fistname }} <button>Ver</button>
        <button v-on:click="editUser(user)">Editar</button>
        <button v-on:click="removeUser(user)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

const url = "http://localhost:3000/users";

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
      axios.get(url).then((result) => {
        this.users = result.data;
      });
    },
  },
};
</script>

<style></style>
