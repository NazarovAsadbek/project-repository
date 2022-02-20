<template>
  <v-list-item
    :href="href"
    :rel="href && href !== '#' ? 'noopener' : undefined"
    :target="href && href !== '#' ? '_blank' : undefined"
    :to="item.to"
    :active-class="
            ` ${isDark ? ' grey--text text--lighten-5' : 'primary--text'}`
        "
    :height="48"
    class="text-18 pl-6"
    v-ripple="{class: 'primary--text'}"
  >
    <v-list-item-icon v-if="text" class="v-list-item__icon--text" v-text="computedText" />

    <v-list-item-icon v-else-if="item.icon">
      <v-icon v-text="item.icon" />
    </v-list-item-icon>

    <v-list-item-content c class="pa-0 text-14" v-if="item.title || item.subtitle">
      <v-list-item-title class="ma-0 text-14" v-text="item.title" />

      <v-list-item-subtitle v-text="item.subtitle" />
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import Themeable from "vuetify/lib/mixins/themeable";

export default {
  name: "Item",

  mixins: [Themeable],

  props: {
    item: {
      type: Object,
      default: () => ({
        href: undefined,
        icon: undefined,
        subtitle: undefined,
        title: undefined,
        to: undefined,
      }),
    },
    text: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    computedText() {
      if (!this.item || !this.item.title) return "";

      let text = "";

      this.item.title.split(" ").forEach((val) => {
        text += val.substring(0, 1);
      });

      return text;
    },
    href() {
      return this.item.href || (!this.item.to ? "#" : undefined);
    },
  },
};
</script>
