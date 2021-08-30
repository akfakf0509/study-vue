new Vue({
  el: "#app",
  data: {
    person: {
      name: "Hello World",
      age: 19,
    },
  },
  methods: {
    nextYear(greeting) {
      return (
        greeting +
        "! " +
        this.person.name +
        "는 내년에 " +
        (this.person.age + 1) +
        "살 입니다."
      );
    },
    otherMethod() {
      this.nextYear();
    },
  },
});
