<template>
  <div>
    <p>{{ name }}</p>
    <button @click="updateName">Change name</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Hello World",
    };
  },
  methods: {
    updateName() {
      this.name = "Hello World Updated";
    },
  },
};
</script>

<style scoped></style>
