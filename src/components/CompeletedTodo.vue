<template>
  <div>Compeleted Todo: {{ NumberOfCompeletedTodo }}</div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    NumberOfCompeletedTodo() {
      return this.todos.filter((todo) => todo.checked).length;
    },
  },
};
</script>

<style></style>
