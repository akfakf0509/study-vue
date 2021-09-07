<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Component1 title="Home Title" name="Hello World" />
  </div>
</template>

<script>
import Component1 from "@/components/Component1.vue";

export default {
  components: {
    Component1,
  },
};
</script>
