<template>
  <div class="mb-2 d-flex">
    <div>
      <input type="checkbox" :checked="todo.checked" @change="ToggleCheckBox" />
    </div>

    <span
      class="ms-1 flex-grow-1"
      :class="todo.checked ? 'text-muted' : ''"
      :style="todo.checked ? 'text-decoration: line-through' : ''"
      >{{ todo.text }}</span
    >
    <button class="btn btn-danger btn-sm" @click="ClickDelete">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    numberOfCompletedTodo() {
      return this.$store.getters["todo/numberOfComepletedTodo"];
    },
  },
  methods: {
    ToggleCheckBox(e) {
      // this.$emit("toggle-checkbox", {
      //   id: this.todo.id,
      //   checked: e.target.checked,
      // });
      // this.$store.commit("TOGGLE_TODO", {
      //   id: this.todo.id,
      //   checked: e.target.checked,
      // });
      this.$store.dispatch("todo/ToggleTodo", {
        id: this.todo.id,
        checked: e.target.checked,
      });
    },
    ClickDelete() {
      // this.$emit("click-delete", this.todo.id);
      // this.$store.commit("DELETE_TODO", this.todo.id);
      this.$store.dispatch("todo/DeleteTodo", this.todo.id);
    },
  },
};
</script>

<style></style>
