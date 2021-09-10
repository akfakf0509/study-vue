export default {
  namespace: true,
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
  actions: {
    AddTodo({ commit }, value) {
      setTimeout(function() {
        commit("ADD_TODO", value);
      }, 500);
    },
    ToggleTodo({ commit }, payload) {
      setTimeout(function() {
        commit("TOGGLE_TODO", payload);
      }, 500);
    },
    DeleteTodo({ commit }, id) {
      setTimeout(function() {
        commit("DELETE_TODO", id);
      }, 500);
    },
  },
  getters: {
    numberOfCompletedTodo: (state) => {
      return state.todos.filter((todo) => todo.checked).length;
    },
  },
};
