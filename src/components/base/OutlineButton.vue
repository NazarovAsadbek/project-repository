<template>
  <v-hover v-slot:default="{hover}" open-delay="100">
    <v-btn
      :elevation="hover ? 8 : 0"
      outlined
      :color="color"
      :block="block"
      :large="large"
      :rounded="rounded"
      :class="[textColor, textHover, bgHover, borderColor]"
      class="border"
    >{{ text }}</v-btn>
  </v-hover>
</template>
<script>
export default {
  name: "HoverButton",
  props: {
    text: {
      type: String,
      deault: "",
    },
    color: {
      type: String,
      deault: "",
    },
    block: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    // customClass: {
    //   type: String,
    //   default: 'border-blue-600  info--text hover:white--text hover:bg-blue-600'
    // },

    textColor: {
      type: String,
      default: "white--text",
    },
    textHover: {
      type: String,
      default: "hover:white--text",
    },
    bgHover: {
      type: String,
      default: "primary",
    },
    borderColor: {
      type: String,
      default: "",
    },
  },
};
</script>
