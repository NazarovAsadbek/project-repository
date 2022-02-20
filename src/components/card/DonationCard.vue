<template>
  <base-card>
    <v-card-text>
      <div class="d-flex align-center">
        <v-avatar size="56" :class="[textColor, bgColor]" class="mr-4">
          <v-icon :color="iconColor" :class="[bgColor]">
            {{
            icon
            }}
          </v-icon>
        </v-avatar>
        <div class>
          <h6 class="card-title mb-1">{{ title }}</h6>
          <p>{{ subTitle }}</p>
        </div>
      </div>
      <v-divider class="my-2"></v-divider>
      <base-hover-button
        :text="buttonText"
        text-color="primary--text"
        bg-color="primary lighten-5"
      />
    </v-card-text>
  </base-card>
</template>
<script>
export default {
  props: {
    textColor: {
      type: String,
      default: "primary--text",
    },
    bgColor: {
      type: String,
      default: "primary",
    },
    icon: {
      type: String,
      default: "mdi-home",
    },
    iconColor: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    buttonText: {
      type: String,
      default: "",
    },
  },
};
</script>
