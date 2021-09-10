<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompeletedTodo />
    <AddTodo />
    <hr />
    <TodoList />
    <UserList />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import AddTodo from "./components/AddTodo.vue";
import CompeletedTodo from "./components/CompeletedTodo.vue";
import UserList from "./components/UserList.vue";

export default {
  components: {
    TodoList,
    AddTodo,
    CompeletedTodo,
    UserList,
  },
};
</script>
