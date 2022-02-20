<template>
  <v-list-group

    :sub-group="subGroup"
    no-action
    v-model="listModel"
    flat
    :active-class="
      ` ${
        isDark && getThemeMode.verticalSidebarDrawerColor != 'white'
          ? getThemeMode.verticalSidebarDrawerColor + ' darken-1 white--text'
          : 'grey lighten-4'
      }`
    "
    class="pl-0"
  >
    <!-- :group="group" -->
    <!-- text-gray-900 bg-gray-200 -->
    <template v-slot:prependIcon>
      <v-icon :color="item.color || 'white'">{{ item.icon }}</v-icon>
    </template>
    <template v-slot:activator>
      <v-list-item-icon
        v-if="text"
        class="v-list-item__icon--text"
        v-text="computedText"
      />

      <v-list-item-content>
        <v-list-item-title class="text-14" v-text="item.title" />
      </v-list-item-content>
    </template>

    <template v-for="(child, i) in children">
      <base-item-sub-group
        v-if="child.children"
        :key="`sub-group-${i}`"
        :item="child"
        class="pl-0"
      />

      <base-item
        class=""
        v-else
        :key="`item-${i}`"
        :item="child"
        :text="false"
      />
    </template>
  </v-list-group>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// Utilities
import kebabCase from "lodash/kebabCase";
import Themeable from "vuetify/lib/mixins/themeable";
export default {
  name: "ItemGroup",
  mixins: [Themeable],

  inheritAttrs: false,
  data() {
    return {
      listModel: 0
    };
  },
  props: {
    item: {
      type: Object,
      default: () => ({
        avatar: undefined,
        group: undefined,
        title: undefined,
        subHeader: undefined,
        children: []
      })
    },
    subGroup: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapGetters(["getThemeMode"]),
    children() {
      return this.item.children.map(item => ({
        ...item,
        to: !item.to ? undefined : `/app/${this.item.group}/${item.to}`
      }));
    },
    computedText() {
      if (!this.item || !this.item.title) return "";

      let text = "";

      this.item.title.split(" ").forEach(val => {
        text += val.substring(0, 1);
      });

      return text;
    },
    group() {
      return this.genGroup(this.item.children);
    }
  },

  methods: {
    genGroup(children) {
      return children
        .filter(item => item.to)
        .map(item => {
          const parent = item.group || this.item.group;
          let group = `${parent}/${kebabCase(item.to)}`;

          if (item.children) {
            group = `${group}|${this.genGroup(item.children)}`;
            console.log("child");
          }

          return group;
          console.log(group);
        })
        .join("|");
    }
  }
};
</script>

<style></style>
