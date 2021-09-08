<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <input
      v-model="todoText"
      type="text"
      class="w-100 p-2"
      placeholder="Type todo"
      @keyup.enter="AddTodo"
    />
    <hr />
    <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";

export default {
  components: {
    Todo,
  },
  data() {
    return {
      todoText: "",
      maxId: 2,
      todos: [
        { id: 1, text: "buy a car", checked: false },
        { id: 2, text: "play game", checked: false },
      ],
    };
  },
  methods: {
    AddTodo(e) {
      this.maxId += 1;
      this.todos.push({
        id: this.maxId,
        text: e.target.value,
        checked: false,
      });
      this.todoText = "";
    },
  },
};
</script>
