new Vue({
  el: "#app",
  data: {
    number: 1,
    show: false,
  },
  methods: {
    increaseNumber() {
      this.number += 1;
    },
    toggle() {
      this.show = !this.show;
    },
  },
});
