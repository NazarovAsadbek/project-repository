<template>
  <div>
    <v-navigation-drawer
      v-model="getThemeMode.verticalCompactSidebarDrawer"
      color="#272727"
      :dark="
                getThemeMode.verticalSidebarDrawerColor != 'white'
                    ? true
                    : false
            "
      width="350px"
      app
      mobile-breakpoint="1120"
      class="shadow-sm rounded-r-md"
      floating
      height="100vh"
      :right="$vuetify.rtl"
      style="z-index: 1002"
    >
      <v-row class="fill-height flex-row flex ma-0" no-gutters>
        <v-card
          class="shadow-sm rounded-r-sm"
          min-width="70"
          max-width="70"
          max-height="100%"
          color="#1E1E1E"
          tile
          dark
        >
          <vue-perfect-scrollbar
            :settings="{
                            suppressScrollX: true,
                            wheelPropagation: false
                        }"
            class="h-100 rtl-ps-none ps scroll grow d-flex flex-column align-center justify-space-between"
            style="height: 100vh !important;"
          >
            <div class="d-flex flex-column align-center">
              <v-list dense nav class="px-0">
                <v-list-item class="px-0 ma-0 mb-3">
                  <v-list-item-avatar class="px-0 ma-0 ">
                    <v-img
                      src="@/assets/images/arctic-circle-logo.svg"
                    ></v-img>
                  </v-list-item-avatar>
                </v-list-item>
                <v-list-item
                  v-for="item in items.slice(0, 6)"
                  :key="item.title"
                  class="mb-3 px-0"
                >
                  <v-tooltip right>
                    <template
                      v-slot:activator="{on, attrs}"
                    >
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        icon
                      >
                        <v-icon size="20" :color="item.color || 'white'">{{
                            item.icon
                          }}
                        </v-icon>
                      </v-btn>
                    </template>
                    <span>{{ item.title }}</span>
                  </v-tooltip>
                </v-list-item>
              </v-list>
            </div>
            <!-- bottom -->
            <div
              class="d-flex flex-column justify-end align-center"
            >
              <v-list dense nav class="px-0">
                <v-list-item class="mb-3 px-0">
                  <v-tooltip right>
                    <template
                      v-slot:activator="{on, attrs}"
                    >
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        icon
                        @click="
                                                    userDrawer = !userDrawer
                                                "
                      >
                        <v-avatar
                          size="30"
                          class="ml-2"
                        >
                          <v-img
                            src="@/assets/images/logo-asadbek.jpg"
                          ></v-img>
                        </v-avatar>
                      </v-btn>
                    </template>
                    <span>User Settings</span>
                  </v-tooltip>
                </v-list-item>

                <v-list-item class="mb-3 px-0">
                  <v-tooltip right>
                    <template
                      v-slot:activator="{on, attrs}"
                    >
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        icon
                        @click="
                                                    searchDrawer = !searchDrawer
                                                "
                      >
                        <v-icon size="20"
                        >mdi-magnify
                        </v-icon
                        >
                      </v-btn>
                    </template>
                    <span>Search</span>
                  </v-tooltip>
                </v-list-item>
              </v-list>
            </div>
          </vue-perfect-scrollbar>
        </v-card>

        <vue-perfect-scrollbar
          :settings="{suppressScrollX: true, wheelPropagation: false}"
          class="h-100 rtl-ps-none ps scroll grow"
          style="height: 100%"
        >
          <v-list dense nav class="grow pa-0 pt-2" min-width="250" max-width="280">
            <div
              class="d-flex justify-center flex-column"
              height="100"
            >
              <v-list-item-avatar
                class="ma-0"
                min-width="30"
                height="100"
                width="100"
              >
                <v-img src="@/assets/images/logo-asadbek.jpg"/>
              </v-list-item-avatar>
              <v-list-item-content class="text-center">
                <v-list-item-title
                  class="text-16 mb-1 font-weight-regular"
                >Nazarov Asadbek
                </v-list-item-title>
                <!--                <v-divider/>-->
                <!--                <v-list-item-subtitle class="mt-1">-->
                <!--                  <v-icon class="text-18 mr-2"-->
                <!--                  >mdi-card-account-mail-outline-->
                <!--                  </v-icon-->
                <!--                  >-->
                <!--                  <v-icon class="text-18 mr-2"-->
                <!--                  >mdi-inbox-multiple-outline-->
                <!--                  </v-icon-->
                <!--                  >-->
                <!--                  <v-icon class="text-18 mr-2"-->
                <!--                  >mdi-home-edit-outline-->
                <!--                  </v-icon-->
                <!--                  >-->
                </v-list-item-subtitle>
              </v-list-item-content>
            </div>
          </v-list>

          <v-list class="grow" min-width="250" max-width="280">
            <template v-for="(item, i) in computedItems">
              <base-item-group
                v-if="item.children"
                :key="`group-${i}`"
                :item="item"
              ></base-item-group>

              <base-item v-else :key="`item-${i}`" :item="item"/>
            </template>
          </v-list>
        </vue-perfect-scrollbar>
      </v-row>
    </v-navigation-drawer>
    <!-- end of sidebar drawer -->

    <!-- userDrawer -->
    <v-navigation-drawer
      v-model="userDrawer"
      fixed
      left
      height="100%"
      temporary
      floating
      width="350"
    >
      <user-drawer>
        <template v-slot:userDrawerCloseButton>
          <v-btn icon color="" @click.stop="userDrawer = !userDrawer">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </user-drawer>

      <template v-slot:append>
        <div class="my-4 mx-4">
          <base-hover-button
            text="Logout"
            block
            bg-color="primary lighten-5 primary--text"
            icon-name="mdi-logout"
          />
        </div>
      </template>
    </v-navigation-drawer>

    <!-- searchDrawer -->
    <v-navigation-drawer
      v-model="searchDrawer"
      fixed
      left
      height="100%"
      temporary
      floating
      width="350"
    >
      <search-drawer>
        <template v-slot:searchDrawerCloseButton>
          <v-btn
            icon
            color
            @click.stop="searchDrawer = !searchDrawer"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </search-drawer>
    </v-navigation-drawer>
  </div>
</template>

<script>
  import { items } from '../../data/navigation'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      UserDrawer: () => import('../common-drawer/UserDrawer.vue'),
      NotificationDrawer: () =>
        import('../common-drawer/NotificationDrawer.vue'),
      SearchDrawer: () => import('../common-drawer/SearchDrawer.vue'),
    },
    data () {
      return {
        drawer: true,
        items: items,
        userDrawer: false,
        notificationDrawer: false,
        searchDrawer: false,
        items2: ['mdi-home', 'mdi-play'],
        imtemsAside: ['mdi-play'],
      }
    },
    computed: {
      ...mapGetters(['getThemeMode']),
      computedItems () {
        return this.items.map(this.mapItem)
      },
    },
    methods: {
      ...mapActions(['changeCompactVerticalSidebarDrawer']),
      toggleSidebar () {
        this.changeCompactVerticalSidebarDrawer()
      },
      mapItem (item) {
        return {
          ...item,
          children: item.children
            ? item.children.map(this.mapItem)
            : undefined,
          title: item.title,
        }
      },
    },
  }
</script>
