<template>
  <v-container>
    <v-card raised class="mx-auto" max-width="600">
      <v-row class="ma-1">
        <v-col cols="4">
          <v-card outlined>
            <v-card-title>Armor class</v-card-title>
            <v-card-text>
              <v-text-field outlined :maxlength="2"></v-text-field>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card outlined>
            <v-card-title>Initiative</v-card-title>
            <v-card-text>
              <v-text-field outlined :maxlength="2"></v-text-field>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
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
                  <v-text-field label="Max hit points" outlined></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="Current hit points"
                    outlined
                  ></v-text-field>
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
              <v-text-field outlined :maxlength="2"></v-text-field>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card outlined>
            <v-card-title>Death save</v-card-title>
            <v-card-text>
              <v-row class="ma-0">
                <v-col cols="4">
                  Success
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
                  Fail
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
              <v-col cols="5">
                <v-card-text>
                  <v-text-field label="Name" outlined></v-text-field>
                </v-card-text>
              </v-col>
              <v-col cols="3">
                <v-card-text>
                  <v-text-field label="Atk bonus" outlined></v-text-field>
                </v-card-text>
              </v-col>
              <v-col cols="4">
                <v-card-text>
                  <v-text-field label="Damage" outlined></v-text-field>
                </v-card-text>
              </v-col>
            </v-row>
            <v-row class="ma-1">
              <v-col cols="5">
                <v-card-text>
                  <v-text-field label="Name" outlined></v-text-field>
                </v-card-text>
              </v-col>
              <v-col cols="3">
                <v-card-text>
                  <v-text-field label="Atk bonus" outlined></v-text-field>
                </v-card-text>
              </v-col>
              <v-col cols="4">
                <v-card-text>
                  <v-text-field label="Damage" outlined></v-text-field>
                </v-card-text>
              </v-col>
            </v-row>
            <v-row class="ma-1">
              <v-col cols="5">
                <v-card-text>
                  <v-text-field label="Name" outlined></v-text-field>
                </v-card-text>
              </v-col>
              <v-col cols="3">
                <v-card-text>
                  <v-text-field label="Atk bonus" outlined></v-text-field>
                </v-card-text>
              </v-col>
              <v-col cols="4">
                <v-card-text>
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

<style lang="scss">
.v-text-field input {
  text-align: center;
}
</style>
