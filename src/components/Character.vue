<template>
  <v-container>
    <v-card raised class="mx-auto">
      <v-card-title>Character</v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field label="Name" v-model="character.name"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field label="Race" v-model="character.race"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              label="Class"
              v-model="character.class"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              label="Background"
              v-model="character.background"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Character",
  data: () => ({
    character: [
      {
        name: "",
        level: null,
        class: "",
        race: "",
        background: "",
        alignment: ""
      }
    ]
  }),
  methods: {}
};
</script>
