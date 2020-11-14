<template>
  <div>
    <ul id="userList">
      <li v-for="(user, index) in users" :key="index">
        {{ user.name.firstname }} <button>Ver</button> <button>Editar</button>
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
    };
  },
  created() {
    this.users = Fakeusers;
  },
};
</script>

<style></style>
