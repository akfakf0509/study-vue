import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    maxId: 2,
    todos: [
      { id: 1, text: "buy a car", checked: false },
      { id: 2, text: "play game", checked: false },
    ],
  },
  mutations: {
    ADD_TODO(state, value) {
      state.maxId += 1;
      state.todos.push({
        id: state.maxId,
        text: value,
        checked: false,
      });
    },
    TOGGLE_TODO(state, { id, checked }) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === id;
      });

      state.todos[index].checked = checked;
    },
    DELETE_TODO(state, id) {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
  },
  actions: {},
  getters: {},
});
