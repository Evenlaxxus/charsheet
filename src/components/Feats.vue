<template>
  <v-container>
    <v-card raised class="my-1" v-for="(feat, index) in feats" :key="index">
      <v-card-text>{{ feat }}</v-card-text>
      <v-card-actions>
        <v-btn @click="remove(index)">Remove</v-btn>
      </v-card-actions>
    </v-card>
    <v-textarea outlined v-model="text"></v-textarea>
    <v-btn @click="add">Add</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "Feats",

  data: () => ({
    text: "",
    feats: []
  }),
  methods: {
    add() {
      this.feats.push(this.text);
      this.text = "";
    },
    remove(index) {
      if (index > -1) {
        this.feats.splice(index, 1);
      }
    }
  }
};
</script>
