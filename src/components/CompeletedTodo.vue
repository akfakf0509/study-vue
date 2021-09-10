<template>
  <div>Compeleted Todo: {{ NumberOfCompeletedTodo }}</div>
</template>

<script>
export default {
  computed: {
    NumberOfCompeletedTodo() {
      return this.$store.getters.numberOfCompeletedTodo;
    },
  },
};
</script>

<style></style>
