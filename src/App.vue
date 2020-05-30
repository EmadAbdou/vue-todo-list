<template>
  <v-app>
    <Navbar></Navbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navbar from "./views/Navbar";
import Footer from "./views/Footer";

export default {
  name: "App",

  components: {
    Navbar,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
