<template>
  <div class="home">
    <v-row>
      <v-col cols="4" class="hidden-sm-and-down">
        <Abilities />
      </v-col>
      <v-col cols="8-md-and-up">
        <Character />
      </v-col>
    </v-row>
  </div>
</template>
<script>
// @ is an alias to /src
import Abilities from "@/components/Abilities.vue";
import Character from "@/components/Character.vue";

export default {
  name: "Home",
  components: {
    Abilities,
    Character
  }
};
</script>
