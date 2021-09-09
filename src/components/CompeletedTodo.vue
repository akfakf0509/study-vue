<template>
  <div>Compeleted Todo: {{ NumberOfCompeletedTodo }}</div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  computed: {
    NumberOfCompeletedTodo() {
      return this.todos.filter((todo) => todo.checked).length;
    },
  },
};
</script>

<style></style>
