<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-expansion-panels multiple accordion>
          <v-expansion-panel v-for="item in abilities" :key="item.name">
            <v-expansion-panel-header>
              <v-layout row justify-space-around>
                <v-flex md1 class="mt-4 mr-5">{{ item.name }}</v-flex>
                <v-flex md3 class="mt-1">
                  <v-text-field
                    outlined
                    shaped
                    dense
                    :maxlength="2"
                    v-model="item.score"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div v-for="skill in item.skills" :key="skill.name">
                <v-layout row align-center justify-space-around>
                  <v-flex md1>{{ skill.name }}</v-flex>
                  <v-flex md3>
                    <v-text-field
                      outlined
                      shaped
                      dense
                      :maxlength="2"
                      v-model="skill.score"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Abilities",

  data: () => ({
    abilities: [
      {
        name: "Strength",
        score: 1,
        skills: [
          {
            name: "Saving throw",
            score: 1
          },
          {
            name: "Athletics",
            score: 2
          }
        ]
      },
      {
        name: "Dexterity",
        score: 1,
        skills: [
          {
            name: "Saving throw",
            score: 1
          },
          {
            name: "Acrobatics",
            score: 2
          },
          {
            name: "Sleight of hands",
            score: 2
          },
          {
            name: "Stealth",
            score: 2
          }
        ]
      },
      {
        name: "Constitution",
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
        score: 1,
        skills: [
          {
            name: "Saving throw",
            score: 1
          },
          {
            name: "Arcana",
            score: 2
          },
          {
            name: "History",
            score: 2
          },
          {
            name: "Investigation",
            score: 2
          },
          {
            name: "Nature",
            score: 2
          },
          {
            name: "Religion",
            score: 2
          }
        ]
      },
      {
        name: "Wisdom",
        score: 1,
        skills: [
          {
            name: "Saving throw",
            score: 1
          },
          {
            name: "Animal handling",
            score: 2
          },
          {
            name: "Insight",
            score: 2
          },
          {
            name: "Medicine",
            score: 2
          },
          {
            name: "Perception",
            score: 2
          },
          {
            name: "Survival",
            score: 2
          }
        ]
      },
      {
        name: "Charisma",
        score: 1,
        skills: [
          {
            name: "Saving throw",
            score: 1
          },
          {
            name: "Deception",
            score: 2
          },
          {
            name: "Intimidation",
            score: 2
          },
          {
            name: "Performance",
            score: 2
          },
          {
            name: "Persuasion",
            score: 2
          }
        ]
      }
    ]
  })
};
</script>
