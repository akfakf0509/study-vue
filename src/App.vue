<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompeletedTodo />
    <AddTodo />
    <hr />
    <TodoList />
    {{ todos }}
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import AddTodo from "./components/AddTodo.vue";
import CompeletedTodo from "./components/CompeletedTodo.vue";

export default {
  components: {
    TodoList,
    AddTodo,
    CompeletedTodo,
  },
  data() {
    return {
      todoText: "",
      maxId: 2,
      // todos: [
      //   { id: 1, text: "buy a car", checked: false },
      //   { id: 2, text: "play game", checked: false },
      // ],
    };
  },
  methods: {
    // AddTodo() {
    // this.maxId += 1;
    // this.todos.push({
    //   id: this.maxId,
    //   text: value,
    //   checked: false,
    // });
    // this.todoText = "";
    // },
    // ToggleCheckBox({ id, checked }) {
    //   const index = this.todos.findIndex((todo) => {
    //     return todo.id === id;
    //   });
    //   this.todos[index].checked = checked;
    // },
    // DeleteTodo(id) {
    // const index = this.todos.findIndex((todo) => {
    //   return todo.id === id;
    // });
    // this.todos.splice(index, 1);
    //   this.todos = this.todos.filter((todo) => {
    //     return todo.id !== id;
    //   });
    // },
  },
};
</script>
