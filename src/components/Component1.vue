<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ name }}</p>
    <button @click="updateName">Change name</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Default Title",
    },
    name: {
      type: String,
      default: "Default name",
    },
  },
  data() {
    return {
      // name: "Hello World",
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
