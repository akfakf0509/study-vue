<template>
  <div>
    <Todo
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-checkbox="ToggleCheckBox"
      @click-delete="DeleteTodo"
    />
  </div>
</template>

<script>
import Todo from "./Todo.vue";

export default {
  components: {
    Todo,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ToggleCheckBox(value) {
      this.$emit("toggle-checkbox", value);
    },
    DeleteTodo(id) {
      this.$emit("click-delete", id);
    },
  },
};
</script>

<style></style>
