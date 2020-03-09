<template>
  <div class="home">
    <Inventory />
  </div>
</template>

<script>
// @ is an alias to /src
import Inventory from "@/components/Inventory.vue";

export default {
  name: "Home",
  components: {
    Inventory
  }
};
</script>
