<template>
  <div>
    <h1>This is Home page</h1>
    <component-1 />
  </div>
</template>

<script>
import Component1 from "@/components/Component1.vue";

export default {
  components: {
    Component1,
  },
  data() {
    return {
      name: "Hello World",
    };
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
