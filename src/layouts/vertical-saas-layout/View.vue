<template>
  <v-main class>
    <!-- Provides the application the proper gutter -->

    <!-- fill-height class add for center -->
    <v-skeleton-loader
      v-if="getThemeMode.isLoading"
      :loading="getThemeMode.isLoading"
      height="100vh"
      width="100%"
      color="primary"
      type="table-heading, list-item-two-line,list-item-two-line, image, table-tfoot,list-item-avatar-three-line, image, article,table-heading, list-item-two-line,list-item-two-line, image, table-tfoot,list-item-avatar-three-line, image, article"
    ></v-skeleton-loader>
    <v-container else-if class>
      <!-- If using vue-router -->
      <v-expand-transition mode="out-in">
        <router-view />
      </v-expand-transition>
    </v-container>
    <div class="flex-grow-1"></div>
    <app-footer></app-footer>
  </v-main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    SideBar: () => import("./Sidebar"),
    AppFooter: () => import("./Footer")
  },
  computed: {
    ...mapGetters(["getThemeMode"])
  }
};
</script>

<style lang="scss">
.v-main__wrap {
  display: flex;
  flex-direction: column;
}
</style>
