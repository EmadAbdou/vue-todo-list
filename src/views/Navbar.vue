<template>
  <v-app-bar app color="primary" dark>
    <v-container>
      <v-row>
        <div class="d-flex align-center">
          <router-link to="/">
            <v-img
              alt="TD Logo"
              class="mr-2"
              contain
              src="../assets/imgs/logo.svg"
              transition="scale-transition"
              width="70"
            />
          </router-link>
        </div>

        <v-spacer></v-spacer>

        <router-link to="/auth">
          <v-btn text>
            <span class="mr-2">Login</span>
          </v-btn>
        </router-link>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>