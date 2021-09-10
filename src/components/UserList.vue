<template>
  <div>
    User List
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({ users: (state) => state.user.users }),
    // users() {
    //   return this.$store.state.users;
    // },
    // todos() {
    //   return this.$store.state.todos;
    // },
  },
  methods: {
    ...mapActions('user', ["GetUsers"]),
    // GetUsers() {
    //   this.$store.dispatch("GetUsers");
    // },
  },
  created() {
    this.GetUsers();
  },
};
</script>
