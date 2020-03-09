<template>
  <v-container>
    <v-row v-for="item in abilities" :key="item.name">
      <v-col cols="6" class="pr-0">
        <v-card raised class="mt-1 pb-0">
          <v-col class="pa-0">
            <v-card-title class="pa-0">
              <v-row align="center">
                <v-col cols="5" class="pl-5 mr-0 pr-0">
                  {{ item.name }}
                </v-col>
                <v-col cols="7" class="mt-0 pt-0 mb-3">
                  <v-text-field
                    class="compact-form"
                    outlined
                    :maxlength="2"
                    v-model="item.score"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text class="pa-0">
              <div align="center" class="title">+1</div>
            </v-card-text>
            <v-card-actions class="pa-0">
              <v-btn text>Throw</v-btn>
            </v-card-actions>
          </v-col>
        </v-card>
      </v-col>
      <v-col cols="6" class="pl-1">
        <v-card raised class="mt-1 pb-0">
          <v-col>
            <v-card-text>
              <v-row
                v-for="skill in item.skills"
                :key="skill.name"
                class="caption"
                align="center"
              >
                <v-col cols="6" class="mx-0 pa-0">
                  {{ skill.name }}
                </v-col>
                <v-col cols="6" class="mt-0 pt-0 pa-0">
                  <v-text-field
                    class="skill_text_field"
                    outlined
                    :maxlength="2"
                    v-model="skill.score"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-card>
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
        name: "Str",
        score: 1,
        skills: [
          {
            name: "Saving throw",
            score: 1,
            prof: false
          },
          {
            name: "Athletics",
            score: 2,
            prof: false
          }
        ]
      },
      {
        name: "Dex",
        score: 1,
        skills: [
          {
            name: "Saving throw",
            score: 1,
            prof: false
          },
          {
            name: "Acrobatics",
            score: 2,
            prof: false
          },
          {
            name: "Sleight of hands",
            score: 2,
            prof: false
          },
          {
            name: "Stealth",
            score: 2,
            prof: false
          }
        ]
      },
      {
        name: "Con",
        score: 1,
        skills: [
          {
            name: "Saving throw",
            score: 1,
            prof: false
          }
        ]
      },
      {
        name: "Int",
        score: 1,
        skills: [
          {
            name: "Saving throw",
            score: 1,
            prof: false
          },
          {
            name: "Arcana",
            score: 2,
            prof: false
          },
          {
            name: "History",
            score: 2,
            prof: false
          },
          {
            name: "Investigation",
            score: 2,
            prof: false
          },
          {
            name: "Nature",
            score: 2,
            prof: false
          },
          {
            name: "Religion",
            score: 2,
            prof: false
          }
        ]
      },
      {
        name: "Wis",
        score: 1,
        skills: [
          {
            name: "Saving throw",
            score: 1,
            prof: false
          },
          {
            name: "Animal handling",
            score: 2,
            prof: false
          },
          {
            name: "Insight",
            score: 2,
            prof: false
          },
          {
            name: "Medicine",
            score: 2,
            prof: false
          },
          {
            name: "Perception",
            score: 2,
            prof: false
          },
          {
            name: "Survival",
            score: 2,
            prof: false
          }
        ]
      },
      {
        name: "Cha",
        score: 1,
        skills: [
          {
            name: "Saving throw",
            score: 1,
            prof: false
          },
          {
            name: "Deception",
            score: 2,
            prof: false
          },
          {
            name: "Intimidation",
            score: 2,
            prof: false
          },
          {
            name: "Performance",
            score: 2,
            prof: false
          },
          {
            name: "Persuasion",
            score: 2,
            prof: false
          }
        ]
      }
    ]
  })
};
</script>

<style lang="scss">
.skill_text_field input {
  font-size: 10pt;
}
.skill_text_field {
  height: 60px;
  transform: scale(0.5);
  transform-origin: left;
}
.v-text-field input {
  font-size: 20pt;
}
.compact-form {
  height: 20px;
  transform: scale(0.6);
  transform-origin: left;
}
</style>
