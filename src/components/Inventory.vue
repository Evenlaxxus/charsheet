<template>
  <v-container>
    <v-card
      raised
      class="my-1"
      v-for="(item, index) in this.$store.getters.items"
      :key="index"
    >
      <v-card-text>{{ item }}</v-card-text>
      <v-card-actions>
        <v-btn @click="removeItem(index)">Remove</v-btn>
      </v-card-actions>
    </v-card>
    <v-textarea outlined v-model="text"></v-textarea>
    <v-btn @click="addItem">Add</v-btn>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Inventory",
  data: () => ({
    text: ""
  }),
  methods: {
    ...mapMutations(["addItem", "removeItem"]),
    addItem() {
      this.$store.commit("addItem", this.text);
      this.text = "";
    },
    removeItem(index) {
      if (index > -1) {
        this.$store.commit("removeItem", index);
      }
    }
  }
};
</script>
