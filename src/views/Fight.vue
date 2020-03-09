<template>
  <div class="home">
    <Fight />
  </div>
</template>

<script>
// @ is an alias to /src
import Fight from "@/components/Fight.vue";

export default {
  name: "Home",
  components: {
    Fight
  }
};
</script>
