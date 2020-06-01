<template>
  <v-container>
    <v-row>
      <v-col offset-lg="3" offset-md="2" offset-sm="0" lg="6" md="8" sm="12">
        <v-row>
          <v-card class="pa-4 card mx-auto" tile>
            <!-- <v-text-field label="Add Todo Item" :rules="rules" hide-details="auto"></v-text-field> -->
            <v-text-field label="Add Todo Item" :rules="rules" hide-details="auto"></v-text-field>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col offset-lg="3" offset-md="2" offset-sm="0" lg="6" md="8" sm="12">
        <v-row>
          <TodoList></TodoList>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TodoList from "../components/Todo-list";

export default {
  // data: () => ({
  //   rules: [value => !!value || "Required."]
  // }),
  components: { TodoList }
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
}
</style>