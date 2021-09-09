<template>
  <input
    v-model="todoText"
    type="text"
    class="w-100 p-2"
    placeholder="Type todo"
    @keyup.enter="AddTodo"
  />
</template>

<script>
export default {
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    AddTodo(e) {
      this.$emit("add-todo", e.target.value);
    },
  },
};
</script>

<style></style>
