<template>
    <v-navigation-drawer
        v-model="getThemeMode.verticalSaasSidebarDrawer"
        :mobile-breakpoint="1000"
        height="100vh"
        class="vertical-sass-sidebar"
        :right="$vuetify.rtl"
        color="transparent"
        flat
        floating
        app
        clipped
    >
        <vue-perfect-scrollbar
            :settings="{suppressScrollX: true, wheelPropagation: false}"
            class="h-100 rtl-ps-none ps scroll"
            style="height: 100%"
        >
            <v-list>
                <v-list-item class="pa-0">
                    <div
                        class="d-flex text-center justify-center flex-column w-full"
                    >
                        <v-list-item-avatar
                            class="ma-0"
                            min-width="50"
                            height="50"
                            width="50"
                        >
                            <v-img src="@/assets/images/faces/1.jpg" />
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title
                                class="text-16 mb-1 font-weight-regular"
                                >Watson Joyce</v-list-item-title
                            >
                            <v-divider />
                            <v-list-item-subtitle class="mt-1">
                                <v-icon class="text-18 mr-2"
                                    >mdi-card-account-mail-outline</v-icon
                                >
                                <v-icon class="text-18 mr-2"
                                    >mdi-inbox-multiple-outline</v-icon
                                >
                                <v-icon class="text-18 mr-2"
                                    >mdi-home-edit-outline</v-icon
                                >
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </div>
                </v-list-item>
            </v-list>

            <v-list rounded dense>
                <template v-for="(item, i) in computedItems">
                    <base-item-group
                        v-if="item.children"
                        :key="`group-${i}`"
                        :item="item"
                    >
                        <!--  -->
                    </base-item-group>

                    <base-item v-else :key="`item-${i}`" :item="item" />
                </template>
            </v-list>
        </vue-perfect-scrollbar>
    </v-navigation-drawer>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {items} from '../../data/navigation'

export default {
    // components: {
    //   VuePerfectScrollbar,
    // },

    data() {
        return {
            background: true,
            items: items,
            opacity: 0.4
        }
    },
    computed: {
        bg() {
            return this.background
                ? 'https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                : undefined
        },

        computedItems() {
            return this.items.map(this.mapItem)
        },

        ...mapGetters(['getThemeMode'])
    },
    methods: {
        mapItem(item) {
            return {
                ...item,
                children: item.children
                    ? item.children.map(this.mapItem)
                    : undefined,
                title: item.title
            }
        }
    }
}
</script>

<style>
.ps-container {
    position: inherit !important;
}

@media screen and (max-width: 1024px) {
    /* .vertical-sass-sidebar {
    position: fixed;
    left: -251px;
  } */
}
</style>
