<template>
  <v-container>
    <div>
      <v-layout
        row
        align-start
        v-for="item in abilities"
        :key="item.name"
        class="mx-0"
      >
        <v-flex md2 xs1 class="mt-4 mr-5" hidden-sm-and-down>
          {{ item.name }}
        </v-flex>
        <v-flex md1 ml1 xs1 class="mt-4 mr-5" hidden-md-and-up>
          {{ item.short }}
        </v-flex>
        <v-flex ml1 md2 sm4 xs3 class="mt-1">
          <v-text-field
            class="compact-form"
            outlined
            :maxlength="2"
            v-model="item.score"
          ></v-text-field>
        </v-flex>
        <v-flex xs2 class="mt-1 ml-1">
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
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Abilities",

  data: () => ({
    abilities: [
      {
        name: "Strength",
        short: "Str",
        score: 1,
        skills: [
          {
            name: "Saving throw",
            score: 1
          }
        ]
      },
      {
        name: "Dexterity",
        short: "Dex",
        score: 1,
        skills: [
          {
            name: "Saving throw",
            score: 1
          }
        ]
      },
      {
        name: "Constitution",
        short: "Con",
        score: 1,
        skills: [
          {
            name: "Saving throw",
            score: 1
          }
        ]
      },
      {
        name: "Intelligence",
        short: "Int",
        score: 1,
        skills: [
          {
            name: "Saving throw",
            score: 1
          }
        ]
      },
      {
        name: "Wisdom",
        short: "Wis",
        score: 1,
        skills: [
          {
            name: "Saving throw",
            score: 1
          }
        ]
      },
      {
        name: "Charisma",
        short: "Cha",
        score: 1,
        skills: [
          {
            name: "Saving throw",
            score: 1
          }
        ]
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
