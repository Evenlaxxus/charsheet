<template>
  <div class="home">
    <Spells />
  </div>
</template>

<script>
// @ is an alias to /src
import Spells from "@/components/Spells.vue";

export default {
  name: "Home",
  components: {
    Spells
  }
};
</script>
