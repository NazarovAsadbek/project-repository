<template>
  <v-main>
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
<!--    <v-container class="pa-0 ma-0" v-else>-->
    <div class="pa-0 ma-0" v-else>
      <!-- If using vue-router -->
      <v-expand-transition mode="out-in">
        <router-view/>
      </v-expand-transition>
    </div>
<!--    </v-container>-->
    <div class="flex-grow-1"></div>
  </v-main>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['getThemeMode']),
    },
  }
</script>

<style lang="scss">
.v-main__wrap {
  flex: 1 1 auto;
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
