<template>
  <v-btn
    :block="block"
    :class="[bgColor, textColor, textHover, bgHover, customClass]"
    class="shadow-sm"
    :small="small"
    :x-small="xSmall"
    :large="large"
    :color="color"
    :depressed="depressed"
  >
    <v-icon
      :small="smallIcon"
      v-if="iconName"
      class="transition-none"
      :class="[iconMr]"
    >{{ iconName }}</v-icon>
    {{ text }}
  </v-btn>
</template>
<script>
export default {
  name: "HoverButton",
  props: {
    text: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    bgColor: {
      type: String,
      default: "",
    },
    textColor: {
      type: String,
      default: "",
    },
    textHover: {
      type: String,
      default: "",
    },
    bgHover: {
      type: String,
      default: "",
    },
    block: {
      type: Boolean,
      default: false,
    },
    depressed: {
      type: Boolean,
      default: true,
    },
    small: {
      type: Boolean,
      default: false,
    },
    iconName: {
      type: String,
      default: "",
    },
    customClass: {
      type: String,
      default: "",
    },
    large: {
      type: Boolean,
      default: false,
    },
    xSmall: {
      type: Boolean,
      default: false,
    },
    iconMr: {
      type: String,
      default: "",
    },
    smallIcon: {
      type: Boolean,
      default: false,
    },
    clickEvent: {
      type: String,
      default: "",
    },
  },
};
</script>
