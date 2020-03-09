<template>
  <v-container>
    <v-card raised class="mx-auto">
      <v-row class="ma-1">
        <v-col cols="4" class="px-1">
          <v-card outlined>
            <v-card-title class="hidden-sm-and-down">Armor class</v-card-title>
            <v-card-title class="hidden-md-and-up">AC</v-card-title>
            <v-card-text>
              <v-text-field outlined :maxlength="2"></v-text-field>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" class="px-1">
          <v-card outlined>
            <v-card-title>Initiative</v-card-title>
            <v-card-text>
              <v-text-field outlined :maxlength="2"></v-text-field>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" class="px-1">
          <v-card outlined>
            <v-card-title>Speed</v-card-title>
            <v-card-text>
              <v-text-field outlined :maxlength="2"></v-text-field>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="ma-1">
        <v-col>
          <v-card outlined>
            <v-card-title>Hit Points</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-text-field label="Max hp" outlined></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Current hp" outlined></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="ma-1">
        <v-col cols="6">
          <v-card outlined>
            <v-card-title>Hit dice</v-card-title>
            <v-card-text>
              <v-text-field outlined></v-text-field>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card outlined>
            <v-card-title>Death save</v-card-title>
            <v-card-text>
              <v-row class="ma-0">
                <v-col cols="4">
                  <span class="hidden-md-and-down">Success</span>
                  <v-icon class="hidden-ml-and-up">
                    mdi-checkbox-marked-circle
                  </v-icon>
                </v-col>
                <v-col cols="2" class="pt-0">
                  <v-checkbox color="green" class="pt-0"></v-checkbox>
                </v-col>
                <v-col cols="2" class="pt-0">
                  <v-checkbox color="green" class="pt-0"></v-checkbox>
                </v-col>
                <v-col cols="2" class="pt-0">
                  <v-checkbox color="green" class="pt-0"></v-checkbox>
                </v-col>
              </v-row>
              <v-row class="ma-0">
                <v-col cols="4">
                  <span class="hidden-md-and-down">Fail</span>
                  <v-icon class="hidden-ml-and-up">
                    mdi-cancel
                  </v-icon>
                </v-col>
                <v-col cols="2" class="pt-0">
                  <v-checkbox color="red" class="pt-0"></v-checkbox>
                </v-col>
                <v-col cols="2" class="pt-0">
                  <v-checkbox color="red" class="pt-0"></v-checkbox>
                </v-col>
                <v-col cols="2" class="pt-0">
                  <v-checkbox color="red" class="pt-0"></v-checkbox>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="ma-1">
        <v-col>
          <v-card>
            <v-card-title>Weapons</v-card-title>
            <v-row class="ma-1">
              <v-col cols="5" class="px-0">
                <v-card-text class="px-1">
                  <v-text-field label="Name" outlined></v-text-field>
                </v-card-text>
              </v-col>
              <v-col cols="3" class="px-0">
                <v-card-text class="px-1">
                  <v-text-field label="Atk bonus" outlined></v-text-field>
                </v-card-text>
              </v-col>
              <v-col cols="4" class="px-0">
                <v-card-text class="px-1">
                  <v-text-field label="Damage" outlined></v-text-field>
                </v-card-text>
              </v-col>
            </v-row>
            <v-row class="ma-1">
              <v-col cols="5" class="px-0">
                <v-card-text class="px-1">
                  <v-text-field label="Name" outlined></v-text-field>
                </v-card-text>
              </v-col>
              <v-col cols="3" class="px-0">
                <v-card-text class="px-1">
                  <v-text-field label="Atk bonus" outlined></v-text-field>
                </v-card-text>
              </v-col>
              <v-col cols="4" class="px-0">
                <v-card-text class="px-1">
                  <v-text-field label="Damage" outlined></v-text-field>
                </v-card-text>
              </v-col>
            </v-row>
            <v-row class="ma-1">
              <v-col cols="5" class="px-0">
                <v-card-text class="px-1">
                  <v-text-field label="Name" outlined></v-text-field>
                </v-card-text>
              </v-col>
              <v-col cols="3" class="px-0">
                <v-card-text class="px-1">
                  <v-text-field label="Atk bonus" outlined></v-text-field>
                </v-card-text>
              </v-col>
              <v-col cols="4" class="px-0">
                <v-card-text class="px-1">
                  <v-text-field label="Damage" outlined></v-text-field>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
