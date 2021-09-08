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
  methods: {
    ToggleCheckBox(e) {
      this.$emit("toggle-checkbox", {
        id: this.todo.id,
        checked: e.target.checked,
      });
    },
    ClickDelete() {
      this.$emit("click-delete", this.todo.id);
    },
  },
};
</script>

<style></style>
