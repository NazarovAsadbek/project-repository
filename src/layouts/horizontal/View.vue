<template>
    <v-main app>
        <!-- Provides the application the proper gutter -->

        <!-- fill-height class add for center -->
        <!-- <v-skeleton-loader
      v-if="getThemeMode.isLoading"
      :loading="getThemeMode.isLoading"
      height="100vh"
      width="100%"
      color="red"
      type="table-heading, list-item-two-line,list-item-two-line, image, table-tfoot,list-item-avatar-three-line, image, article,table-heading, list-item-two-line,list-item-two-line, image, table-tfoot,list-item-avatar-three-line, image, article"
    ></v-skeleton-loader>-->

        <v-container
            class="horizontal-container  rounded-lg relative"
            :class="{'grey lighten-5': !$vuetify.theme.dark}"
            style="margin-top: 130px !important;"
        >
            <top-nav-menu class="mb-4" />

            <v-expand-transition mode="out-in">
                <router-view />
            </v-expand-transition>
        </v-container>

        <div class="flex-grow-1"></div>
        <app-footer></app-footer>
    </v-main>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    components: {
        AppFooter: () => import('./Footer'),
        TopNavbar: () => import('./TopNavbar'),
        TopNavMenu: () => import('./TopNavMenu')
    },
    computed: {
        ...mapGetters(['getThemeMode'])
    },
    data() {
        return {}
    },

    methods: {}
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
.horizontal-container {
    z-index: 1;
}
</style>
