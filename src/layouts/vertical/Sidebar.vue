<template>
  <v-navigation-drawer
    v-model="getThemeMode.verticalSidebarDrawer"
    :color="
      $vuetify.theme.dark ? 'dark' : getThemeMode.verticalSidebarDrawerColor
    "
    :expand-on-hover.sync="getThemeMode.verticalSidebarMini"
    :mini-variant="getThemeMode.verticalSidebarMini"
    :src="bg"
    :dark="getThemeMode.verticalSidebarDrawerColor != 'white' ? true : false"
    app
    :disable-resize-watcher="false"
    :mobile-breakpoint="960"
    height="100%"
    class="shadow-sm"
    :floating="true"
    :right="$vuetify.rtl"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img :style="{ opacity: opacity }" v-bind="props" class="test" />
    </template>
    <vue-perfect-scrollbar
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
      class="h-100 rtl-ps-none ps scroll"
      style="height: 100%"
    >
      <v-list dense nav>
        <v-list-item class="px-0">
          <v-list-item-avatar>
            <v-img
              v-if="getThemeMode.verticalSidebarDrawerColor == 'dark'"
              src="@/assets/images/arctic-circle-logo.svg"
            />
            <v-img v-else src="@/assets/images/logo.svg" />
          </v-list-item-avatar>

          <v-list-item-title class="text-18 text-uppercase text-default"
            >Octavia</v-list-item-title
          >
          <v-scroll-x-transition>
            <v-btn icon @click.stop="toggleSidebar">
              <v-tooltip
                v-if="!getThemeMode.verticalSidebarMini"
                right
                color="primary"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon dark v-bind="attrs" v-on="on" color
                    >mdi-circle-slice-8</v-icon
                  >
                </template>
                <span>UnPin</span>
              </v-tooltip>
              <v-tooltip
                v-if="getThemeMode.verticalSidebarMini"
                right
                color="primary"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon dark v-bind="attrs" v-on="on" color
                    >mdi-circle-outline</v-icon
                  >
                </template>
                <span>pin</span>
              </v-tooltip>
            </v-btn>
          </v-scroll-x-transition>
        </v-list-item>
        <v-list-item class="pa-1" two-line :class="miniVariant && 'px-1'">
          <v-list-item-avatar
            class="ml-n1"
            min-width="40"
            height="40"
            width="40"
          >
            <v-img src="@/assets/images/faces/1.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="text-16 mb-1 font-weight-regular"
              >Watson Joyce</v-list-item-title
            >
            <!-- <v-divider class="d-block" /> -->
            <v-list-item-subtitle class="mt-n1">
              <!-- <v-icon class="text-18 mr-2">
                mdi-card-account-mail-outline
                
              </v-icon> -->
              <v-btn small icon class="mr-2">
                <v-icon small>mdi-cog</v-icon>
              </v-btn>
              <v-btn small icon class="mr-2">
                <v-icon small>mdi-email</v-icon>
              </v-btn>
              <v-btn small icon class="mr-2">
                <v-icon small>mdi-logout-variant</v-icon>
              </v-btn>
              <!-- <v-icon class="text-18 mr-2">mdi-inbox-multiple-outline</v-icon> -->
              <!-- <v-icon class="text-18 mr-2">mdi-home-edit-outline</v-icon> -->
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list>
        <template v-for="(item, i) in computedItems">
          <div
            :key="item.subheader"
            v-if="item.subheader"
            :class="miniVariant && 'px-1'"
          >
            <v-subheader>
              {{ item.subheader }}
            </v-subheader>

            <v-divider></v-divider>
          </div>

          <base-item-group
            v-if="item.children"
            :key="`group-${i}`"
            :item="item"
          >
            <!--  -->
          </base-item-group>

          <base-item
            v-else-if="!item.subheader && !item.children"
            :key="`item-${i}`"
            :item="item"
          />
        </template>
      </v-list>
    </vue-perfect-scrollbar>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { items } from "../../data/navigation";

export default {
  // components: {
  //   VuePerfectScrollbar,
  // },

  data() {
    return {
      drawer: true,
      switch1: "on",
      color: "dark",
      colors: ["primary", "blue", "success", "red", "teal"],
      right: false,
      permanent: true,
      miniVariant: false,
      expandOnHover: false,
      background: false,
      items: items,
      opacity: 0.4
    };
  },
  computed: {
    ...mapGetters(["getThemeMode"]),
    bg() {
      return this.background
        ? "https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        : undefined;
    },
    getMiniVariant() {
      return this.miniVariant;
    },
    computedItems() {
      return this.items.map(this.mapItem);
    }
  },
  methods: {
    ...mapActions(["changeVerticalSidebarDrawer", "changeVerticalSidebarMini"]),
    toggleSidebar() {
      this.changeVerticalSidebarMini();
      this.expandOnHover = !this.expandOnHover;
      // this.$emit("update:mini-variant");
      // console.log("check");
    },
    mapItem(item) {
      return {
        ...item,
        children: item.children ? item.children.map(this.mapItem) : undefined,
        title: item.title
      };
    }
  }
};
</script>

<style lang="scss">
.ps-container {
  position: inherit !important;
}
.app-admin-wrap-layout-1.sidebar-mini {
  .v-toolbar {
    left: 56px !important;
    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  }
  .v-main {
    padding: 75px 0px 12px 56px !important;
    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
    padding-bottom: 0px !important;
  }
  &.sidebar-close {
    .v-toolbar {
      left: 0px !important;
      transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
    }
    .v-main {
      padding: 75px 0px 12px 0px !important;
      transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
      padding-bottom: 0px !important;
    }
  }
}
</style>
