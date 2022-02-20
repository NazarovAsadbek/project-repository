<template>
  <div>
    <v-btn
      v-if="!getThemeMode.disableCustomizer"
      class="mr-4 mb-4"
      color="primary"
      dark
      small
      fixed
      bottom
      :right="!$vuetify.rtl"
      :left="$vuetify.rtl"
      fab
      @click.stop="customizer = !customizer"
    >
      <v-icon>mdi-spin mdi-cog</v-icon>
    </v-btn>
    <v-navigation-drawer
      hide-overlay
      v-model="customizer"
      fixed
      height="100vh"
      width="400"
      temporary
      floating
      :right="!$vuetify.rtl"
      :left="$vuetify.rtl"
    >
      <v-app-bar fixed flat class="mb-4">
        <div class="d-flex justify-space-between align-center w-full">
          <div class="card-title ma-0 ">Customizer</div>
          <div class>
            <v-btn icon color @click.stop="customizer = !customizer">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </div>
      </v-app-bar>

      <v-divider></v-divider>

      <base-card class="mb-3 mt-16">
        <v-card-title primary-title>Layout Style</v-card-title>
        <v-card-text>
          <!-- <v-img
            @click="test"
          src="https://picsum.photos/510/300?random"
            aspect-ratio="1.4"
            contain
            ripple
          ></v-img>-->

          <v-row>
            <v-col cols="6">
              <v-card
                @click="changeLayout('VerticalSidebar')"
                ripple
                class="rounded-lg portrait mb-4"
              >
                <v-img
                  src="@/assets/images/screenshots/layout1.png"
                  aspect-ratio="1.4"
                  cover
                ></v-img>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card
                @click="changeLayout('VerticalCompactSidebar')"
                ripple
                class="rounded-lg portrait mb-4"
              >
                <v-img
                  src="@/assets/images/screenshots/layout2.png"
                  aspect-ratio="1.4"
                  cover
                ></v-img>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card
                @click="changeLayout('VerticalSaasLayout')"
                ripple
                class="rounded-lg portrait mb-4"
              >
                <v-img
                  src="@/assets/images/screenshots/layout3.png"
                  aspect-ratio="1.4"
                  cover
                ></v-img>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card
                @click="changeLayout('HorizontalBar')"
                ripple
                class="rounded-lg portrait mb-4"
              >
                <v-img
                  src="@/assets/images/screenshots/layout4.png"
                  aspect-ratio="1.4"
                  cover
                ></v-img>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card
                @click="changeLayout('VerticalWhiteSidebar')"
                ripple
                class="rounded-lg portrait mb-4"
              >
                <v-img
                  src="@/assets/images/screenshots/layout5.png"
                  aspect-ratio="1.4"
                  cover
                ></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </base-card>
      <base-card class="mb-3 mt-4">
        <v-card-title primary-title>Theme Color Mode</v-card-title>
        <v-card-text>
          <v-btn
            v-if="!$vuetify.theme.dark"
            @click="changeDarkMode(true)"
            class="mr-4 mb-4"
            color="dark"
            small
            fab
            dark
          >
            <v-icon>mdi-weather-night</v-icon>
          </v-btn>
          <v-btn
            v-else
            @click="changeDarkMode(false)"
            class="mr-4 mb-4"
            color="white"
            small
            fab
          >
            <v-icon color="warning">mdi-white-balance-sunny</v-icon>
          </v-btn>
        </v-card-text>
      </base-card>

      <base-card class="mb-3">
        <v-card-title primary-title>Theme Orientation</v-card-title>
        <v-card-text>
          <v-btn
            v-if="!$vuetify.rtl"
            @click="changeThemeRtlMode(true)"
            class="mr-4 mb-4"
            small
            fab
          >
            <v-icon>mdi-dock-right</v-icon>
          </v-btn>
          <v-btn
            v-else
            @click="changeThemeRtlMode(false)"
            class="mr-4 mb-4"
            small
            fab
          >
            <v-icon>mdi-dock-left</v-icon>
          </v-btn>
        </v-card-text>
      </base-card>
      <base-card class="mb-3">
        <v-card-title primary-title>Theme Primary Color</v-card-title>
        <v-card-text>
          <v-btn
            v-for="color in themeColors"
            :key="color"
            @click="changeThemePrimaryColor(color)"
            class="mr-4 mb-4"
            :color="color"
            fab
            small
            dark
          ></v-btn>

          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn class="mr-4 mb-4" color="primary" fab small dark v-on="on">
                <v-icon>mdi-palette</v-icon>
              </v-btn>
            </template>
            <v-color-picker
              value="#7417BE"
              v-model="changePrimaryColor"
              hide-canvas
              hide-inputs
              show-swatches
              class="mx-auto"
            ></v-color-picker>
          </v-menu>
        </v-card-text>
      </base-card>

      <base-card class="mb-3">
        <v-card-title primary-title>Sidebar Color</v-card-title>
        <v-card-text>
          <v-btn
            v-for="color in colors"
            :key="color"
            @click="changeSidebarColor(color)"
            class="mr-4 mb-4"
            :color="color"
            fab
            small
            dark
          ></v-btn>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn class="mr-4 mb-4" color="primary" fab small dark v-on="on">
                <v-icon>mdi-palette</v-icon>
              </v-btn>
            </template>
            <v-color-picker
              value="#7417BE"
              v-model="SidebarColor"
              hide-canvas
              hide-inputs
              show-swatches
              class="mx-auto"
            ></v-color-picker>
          </v-menu>
        </v-card-text>
      </base-card>

      <base-card class="mb-3">
        <v-card-title primary-title>Header Color</v-card-title>
        <v-card-text>
          <v-btn
            v-for="color in colors"
            :key="color"
            @click="appBarColorChange(color)"
            class="mr-4 mb-4"
            :color="color"
            fab
            small
            dark
          ></v-btn>

          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn class="mr-4 mb-4" color="primary" fab small dark v-on="on">
                <v-icon>mdi-palette</v-icon>
              </v-btn>
            </template>
            <v-color-picker
              value="#7417BE"
              v-model="headerColor"
              hide-canvas
              hide-inputs
              show-swatches
              class="mx-auto"
            ></v-color-picker>
          </v-menu>
        </v-card-text>
      </base-card>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      themeColor: "#0081FF",
      colors: [
        "primary",
        "dark",
        "white",
        "black",
        "secondary",
        "success",
        "info",
        "warning",
        "danger"
      ],
      themeColors: [
        "#0081FF",
        "#242939",

        "#304156",
        "#09B66D",
        "#5e5ce6",
        "#FF8A48",
        "#FF3D57"
      ],
      customizer: null,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ]
    };
  },
  methods: {
    ...mapActions([
      "changeThemeLayout",
      "changeThemeDarkMode",
      "changeVerticalSidebarDrawerColor",
      "changeAppBarColor"
    ]),
    changeLayout(layout) {
      if (
        layout == "VerticalCompactSidebar" ||
        layout == "VerticalWhiteSidebar"
      ) {
        this.changeSidebarColor("white");
      } else {
        this.changeSidebarColor("dark");
      }
      this.changeThemeLayout(layout);
    },
    changeDarkMode(data) {
      // this.changeThemeDarkMode(data);
      this.$vuetify.theme.dark = data;
    },
    changeThemeRtlMode(data) {
      // this.changeThemeDarkMode(data);
      this.$vuetify.rtl = data;
    },
    changeThemePrimaryColor(data) {
      this.$vuetify.theme.themes.light.primary = data;
    },
    changeSidebarColor(data) {
      this.changeVerticalSidebarDrawerColor(data);
    },
    appBarColorChange(data) {
      this.changeAppBarColor(data);
    }
  },

  computed: {
    ...mapGetters(["getThemeMode"]),
    changePrimaryColor: {
      get() {
        return this.themeColor;
      },
      set(v) {
        this.changeThemePrimaryColor(v);
      }
    },
    SidebarColor: {
      get() {
        return "#FF00FF";
      },
      set(v) {
        this.changeSidebarColor(v);
      }
    },
    headerColor: {
      get() {
        return this.themeColor;
      },
      set(v) {
        this.appBarColorChange(v);
      }
    }
  }
};
</script>
