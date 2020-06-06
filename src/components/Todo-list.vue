<template>
  <v-card class="mx-auto card">
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        @click="Done(item.id)"
        :disabled="!item.icon"
      >
        <v-list-item-icon>
          <v-icon v-if="item.icon" color="blue">check_box_outline_blank</v-icon>
          <v-icon v-if="!item.icon" color="blue">check_box</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { db } from "../firebase/db";

export default {
  data() {
    return {
      items: []
      // items: [
      //   {
      //     id: 1,
      //     icon: true,
      //     title: "Jason Oner",
      //     avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
      //   },
      //   {
      //     id: 2,
      //     icon: false,
      //     title: "Travis Howard",
      //     avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
      //   },
      //   {
      //     id: 3,
      //     icon: true,
      //     title: "Ali Connors",
      //     avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
      //   },
      //   {
      //     id: 4,
      //     icon: false,
      //     title: "Cindy Baker",
      //     avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
      //   }
      // ]
    };
  },
  methods: {
    Done(id) {
      // this.items.map(item => {
      //   if (item.id === id) {
      //     item.icon = !item.icon;
      //   }
      // });
      db.collection("ToDos")
        .doc(id)
        .update({ icon: false });
    }
  },
  firestore: {
    items: db.collection("ToDos")
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
}
</style>