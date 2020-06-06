<template>
  <v-app id="inspire">
    <v-content>
      <v-container class fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title class="title">
                  <span v-if="login">Login</span>
                  <span v-if="!login">Register</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Name" name="name" prepend-icon="mdi-account" type="text" v-if="!login"></v-text-field>
                  <v-text-field label="Email" name="email" prepend-icon="mdi-account" type="email"></v-text-field>
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions class="footer">
                <v-btn large color="primary">
                  <span v-if="login">Login</span>
                  <span v-if="!login">Register</span>
                </v-btn>
              </v-card-actions>
              <p>
                <span v-if="login">Have No Account?</span>
                <span v-if="!login"> Already Have Account? </span>
                <span class="action" v-if="!login" @click="showLogin()">Login Now</span>
                <span class="action" v-if="login" @click="showRegister()">Register Now</span>
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      error: null,
      login: true
    }
  },
  props: {
    source: String
  },
  methods: {
    showLogin() {
      this.login = true
    },
    showRegister() {
      this.login = false
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  width: 100%;
  text-align: center;
}
.footer {
  justify-content: center;
  padding-bottom: 1rem;
  v-btn{
    width: 50%;
  }
}
p {
  text-align: center;
  padding-bottom: 2rem;
  .action {
    color: #1976d2;
    padding-inline-start: .5em;
    cursor: pointer;
  }
}
</style>