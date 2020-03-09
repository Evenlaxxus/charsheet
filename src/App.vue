<template>
  <v-app>
    <Toolbar />
    <Drawer />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    Toolbar: () => import("@/components/Toolbar.vue"),
    Drawer: () => import("@/components/Drawer.vue")
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
.v-text-field input {
  text-align: center;
}
</style>
