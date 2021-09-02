new Vue({
  el: "#app",
  data: {
    message: "Welcome",
    updated: "No",
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
  watch: {
    message(newVal, oldVal) {
      console.log(newVal, oldVal);
      this.updated = "Yes";
    },
  },
});
