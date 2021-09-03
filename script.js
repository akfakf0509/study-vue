const app = new Vue({
  el: "#app",
  data: { name: "Hello" },
  methods: {
    changeText() {
      app1.name = "Hello World";
    },
  },
});

const app1 = new Vue({
  el: "#app-1",
  data: { name: "Hello1" },
  methods: {
    changeText() {
      this.name = "Hello World1";
    },
  },
});
