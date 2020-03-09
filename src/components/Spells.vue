<template>
  <v-container>
    <v-card raised class="my-1" v-for="(spell, index) in spells" :key="index">
      <v-card-text>{{ spell }}</v-card-text>
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
  name: "Spells",

  data: () => ({
    text: "",
    spells: []
  }),
  methods: {
    add() {
      this.spells.push(this.text);
      this.text = "";
    },
    remove(index) {
      if (index > -1) {
        this.spells.splice(index, 1);
      }
    }
  }
};
</script>
