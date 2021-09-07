<template>
  <div>
    <h1>This is Home page</h1>
    <form action="">
      <InputField v-model="name" />
      <button type="submit">Submit</button>
    </form>
    {{ name }}
  </div>
</template>

<script>
import InputField from "../components/InputField.vue";

export default {
  components: {
    InputField,
  },
  data() {
    return {
      name: "",
    };
  },
  // methods: {
  //   UpdateName(name) {
  //     this.name = name;
  //   },
  // },
};
</script>
