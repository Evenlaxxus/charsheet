<template>
  <v-container>
    <v-layout row fluid v-for="item in skills" :key="item.name">
      <v-flex md3 xs4 class="mt-4 mr-5">
        {{ item.name }} ({{ item.ability }})
      </v-flex>
      <v-flex ml1 md2 sm4 xs3 mt-2>
        <v-text-field
          class="compact-form"
          outlined
          :maxlength="2"
          v-model="item.score"
        ></v-text-field>
      </v-flex>
      <v-flex xs2 class="mt-1">
        <v-img
          height="40"
          width="30"
          contain
          src="img/k20.png"
          v-on:click="random"
        >
        </v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Abilities",

  data: () => ({
    skills: [
      {
        name: "Acrobatics",
        ability: "Dex",
        score: 2
      },
      {
        name: "Animal Handling",
        ability: "Wis",
        score: 2
      },
      {
        name: "Arcana",
        ability: "Int",
        score: 2
      },
      {
        name: "Athletics",
        ability: "Str",
        score: 2
      },
      {
        name: "Deception",
        ability: "Cha",
        score: 2
      },
      {
        name: "History",
        ability: "Int",
        score: 2
      },
      {
        name: "Insight",
        ability: "Wis",
        score: 2
      },
      {
        name: "Intimidation",
        ability: "Cha",
        score: 2
      },
      {
        name: "Investigation",
        ability: "Int",
        score: 2
      },
      {
        name: "Medicine",
        ability: "Wis",
        score: 2
      },
      {
        name: "Nature",
        ability: "Int",
        score: 2
      },
      {
        name: "Perception",
        ability: "Wis",
        score: 2
      },
      {
        name: "Performance",
        ability: "Cha",
        score: 2
      },
      {
        name: "Persuasion",
        ability: "Cha",
        score: 2
      },
      {
        name: "Religion",
        ability: "Int",
        score: 2
      },
      {
        name: "Sleight of Hands",
        ability: "Dex",
        score: 2
      },
      {
        name: "Stealth",
        ability: "Dex",
        score: 2
      },
      {
        name: "Survival",
        ability: "Wis",
        score: 2
      }
    ]
  }),
  methods: {
    random() {
      // var number = 0;
      // for (var i = 0; i < this.randomizer.length; i++) {
      //   number += Math.ceil(Math.random() * this.randomizer[i]);
      //   console.log(window.innerHeight);
      // }
      // this.number = number;
    }
  }
};
</script>

<style lang="scss">
.v-text-field input {
  font-size: 20pt;
}
.compact-form {
  height: 10px;
  transform: scale(0.7);
  transform-origin: left;
}
</style>
