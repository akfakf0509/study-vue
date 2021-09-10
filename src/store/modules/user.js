import axios from "axios";

export default {
  namespace: true,
  state: {
    users: [],
  },
  mutations: {
    GET_USERS(state, users) {
      state.users = users;
    },
  },
  actions: {
    GetUsers({ commit }) {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        commit("GET_USERS", res.data);
      });
    },
  },
};
