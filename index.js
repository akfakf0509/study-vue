new Vue({
  el: "#app",
  data: {
    message: "Welcome",
  },
  methods: {
    changeMessage() {
      this.message = "Hello World";
    },
  },
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("");
    },
  },
});
