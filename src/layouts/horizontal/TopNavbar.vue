<template>
  <!-- dropdown-menu  -->
  <vsm-menu
    :menu="menu"
    :base-width="380"
    :base-height="400"
    :screen-offset="10"
    element="header"
    handler="hover"
    @open-dropdown="onOpenDropdown"
    @close-dropdown="onCloseDropdown"
    class="mb-10"
  >
    <template #before-nav>
      <!--Image or svg of website logo-->
      <li class="vsm-section logo-section">
        <img src="https://vuejs.org/images/logo.png" alt="My Logo" />
      </li>
    </template>
    <template #default="{ item }">
      <!--Dropdown Content-->
      <!--You can replace it with a separate component if each menu item has its own style-->
      <!--Dynamic Component Example: https://codepen.io/Alexeykhr/pen/YzPKxpX-->
      <div class="wrap-content">
        <div class="wrap-content__block">Header: {{ item.title }}</div>
        <div class="wrap-content__item">
          <v-list>
            <v-list-item-group color="primary">
              <v-list-item v-for="(nItem, i) in item.content" :key="i" :to="nItem.link">
                <v-list-item-icon>
                  <v-icon>mdi-play</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="nItem.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
      </div>
    </template>

    <template #after-nav>
      <!--Mobile Burger, buttons, etc-->
      <!--For the same styles - add the vsm-section-->
      <li class="vsm-section vsm-mob-hide">
        <button>My Button</button>
      </li>
    </template>
  </vsm-menu>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  computed: {
    ...mapGetters(["getThemeMode"]),
  },
  data() {
    return {
      // hover menu plugins one
      menu: [
        {
          // display menu item (or override title slot)
          title: "News",
          // now this is not a link, but a menu item where there is a dropdown
          dropdown: "news",
          content: [
            {
              title: "news 1",
              link: "analytic",
            },
            {
              title: "news 1",
              link: "analytic",
            },
            {
              title: "news 1",
              link: "analytic",
            },
          ],
          // don't want a button element?
          element: "span",
          // menu item can accept all attributes
          attributes: {
            // I want more classes! No problem
            // string, array, object, not matter
            class: ["my-class1", { "my-class2": true }],
            // Custom attributes
            "data-big": "yes",
          },
          // add some events?
          listeners: {
            // all possible native events
            mouseover: (evt) => {
              console.log("news hover", evt);
            },
          },
          // just extra properties in the object
          new_section: false,
        },
        {
          // display menu item (or override title slot)
          title: "test2",
          // now this is not a link, but a menu item where there is a dropdown
          dropdown: "test",
          content: [
            {
              title: "Test 1",
              link: "analytic",
            },
            {
              title: "Test 1",
              link: "sales-2",
            },
            {
              title: "Test 1",
              link: "analytic",
            },
          ],
          // don't want a button element?
          element: "span",
          // menu item can accept all attributes
          attributes: {
            // I want more classes! No problem
            // string, array, object, not matter

            // Custom attributes
            "data-big": "yes",
          },
          // add some events?
          listeners: {
            // all possible native events
            mouseover: (evt) => {
              console.log("test hover", evt);
            },
          },
          // just extra properties in the object
          new_section: false,
        },
        // ...
      ],

      // end hover menu plugins one
    };
  },
  methods: {
    // menu hover plugins one
    onOpenDropdown() {
      console.log("onOpenDropdown");
    },
    onCloseDropdown() {
      console.log("onCloseDropdown");
    },
    // end menu hover plugins one
  },
};
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

// menu hover drop down plugins
.vsm-menu {
  position: relative;
  z-index: 99999;
  margin: 10px;
  ul {
    max-width: 1024px;
    margin: 0 auto;
  }
}

// Let's simplify the work with menu items (logo, menu, buttons, etc)
.vsm-root {
  display: flex;
  align-items: center;
  justify-content: center;
}

// Move all the content to the right and reduce the logo
.logo-section {
  flex: 1 1 auto;
  img {
    user-select: none;
    max-width: 40px;
  }
}

// All menu items (element props: a, button, span, etc) are
// made the same in style
.vsm-section_menu {
  > * {
    padding: 0 25px;
    font-weight: 500;
    font-family: inherit;
  }
}

// Styles for Dropdown Content:
.wrap-content {
  padding: 30px;
  // Set the width manually so that it does not depend
  // on changing content
  width: 400px;
}
.wrap-content__block {
  font-weight: bold;
}
.wrap-content__item {
  font-style: italic;
  font-size: 0.8rem;
}

// end hover dropdown plugins one
</style>
