<template>
  <v-container>
    <v-card raised class="my-1" v-for="(item, index) in items" :key="index">
      <v-card-text>{{ item }}</v-card-text>
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
  name: "Inventory",

  data: () => ({
    text: "",
    items: []
  }),
  methods: {
    add() {
      this.items.push(this.text);
      this.text = "";
    },
    remove(index) {
      if (index > -1) {
        this.items.splice(index, 1);
      }
    }
  }
};
</script>
