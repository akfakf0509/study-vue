<template>
  <div>Compeleted Todo: {{ NumberOfCompeletedTodo }}</div>
</template>

<script>
export default {
  computed: {
    NumberOfCompeletedTodo() {
      return this.$store.getters["todo/numberOfCompeletedTodo"];
    },
  },
};
</script>

<style></style>
