<template>
  <div>
    User List
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    GetUsers() {
      this.$store.dispatch("GetUsers");
    },
  },
  created() {
    this.GetUsers();
  },
};
</script>
