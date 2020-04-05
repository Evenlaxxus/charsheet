<template>
  <v-container>
    <v-card
      raised
      class="my-1"
      v-for="(spell, index) in this.$store.getters.spells"
      :key="index"
    >
      <v-card-text>{{ spell }}</v-card-text>
      <v-card-actions>
        <v-btn @click="removeSpell(index)">Remove</v-btn>
      </v-card-actions>
    </v-card>
    <v-textarea outlined v-model="text"></v-textarea>
    <v-btn @click="addSpell">Add</v-btn>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Spells",
  data: () => ({
    text: ""
  }),
  methods: {
    ...mapMutations(["addSpell", "removeSpell"]),
    addSpell() {
      // this.spells.push(this.text);
      this.$store.commit("addSpell", this.text);
      this.text = "";
    },
    removeSpell(index) {
      if (index > -1) {
        this.$store.commit("removeSpell", index);
      }
    }
  }
};
</script>
