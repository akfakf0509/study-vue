// Vue.component("hello-world", {
//   template: `
//     <div>
//       Hello World
//     </div>
//   `,
// });

// Vue.component("hello-button", {
//   template: `
//     <div>
//       {{name}}
//       <hello-world></hello-world>
//       <button @click="changeText">Click</button>
//     </div>
//     `,
//   data() {
//     return { name: "Hello" };
//   },
//   methods: {
//     changeText() {
//       this.name = "Hello World";
//     },
//   },
// });

const helloWorld = {
  template: `
    <div>
      Hello World
    </div>
  `,
};

const helloButton = {
  components: {
    "hello-world": helloWorld,
  },
  template: `
    <div>
      {{name}}
      <hello-world></hello-world>
      <button @click="changeText">Click</button>
    </div>
    `,
  data() {
    return { name: "Hello" };
  },
  methods: {
    changeText() {
      this.name = "Hello World";
    },
  },
};

const app = new Vue({
  el: "#app",
  components: {
    "hello-button": helloButton,
  },
  // data: { name: "Hello" },
  // methods: {
  //   changeText() {
  //     this.name = "Hello World";
  //   },
  // },
});

// const app1 = new Vue({
//   el: "#app-1",
//   // data: { name: "Hello" },
//   // methods: {
//   //   changeText() {
//   //     this.name = "Hello World";
//   //   },
//   // },
// });
