<template>
  <v-container>
    <v-row class="row align-center">
      <img transition="scale-transition" alt="Vue logo" src="../assets/imgs/logo.svg" />
      <h1 class="d-block">To Do List</h1>
      <h4 class="d-block">Login and manage your list</h4>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>
<style lang="scss" scoped>
.row {
  padding-top: 6rem;
  justify-content: center;
  text-align: center;
  img {
    width: 15em;
  }
  h1 {
    margin-top: 2rem;
    width: 100%;
    color: #1976d2;
  }
  h4 {
    width: 100%;
    color: #333;
  }
}
</style>
