<template>
  <div class="home">
    <v-row>
      <v-col cols="4" class="hidden-sm-and-down">
        <Abilities />
      </v-col>
      <v-col cols="8-md-and-up">
        <Inventory />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Inventory from "@/components/Inventory.vue";
import Abilities from "@/components/Abilities.vue";

export default {
  name: "Home",
  components: {
    Inventory,
    Abilities
  }
};
</script>
