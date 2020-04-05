<template>
  <v-container>
    <v-card
      raised
      class="my-1"
      v-for="(feat, index) in this.$store.getters.feats"
      :key="index"
    >
      <v-card-text>{{ feat }}</v-card-text>
      <v-card-actions>
        <v-btn @click="removeFeat(index)">Remove</v-btn>
      </v-card-actions>
    </v-card>
    <v-textarea outlined v-model="text"></v-textarea>
    <v-btn @click="addFeat">Add</v-btn>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Feats",
  data: () => ({
    text: ""
  }),
  methods: {
    ...mapMutations(["addFeat", "removeFeat"]),
    addFeat() {
      this.$store.commit("addFeat", this.text);
      this.text = "";
    },
    removeFeat(index) {
      if (index > -1) {
        this.$store.commit("removeFeat", index);
      }
    }
  }
};
</script>
