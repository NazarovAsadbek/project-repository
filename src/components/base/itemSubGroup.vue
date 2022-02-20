<template>
  <base-item-group no-action sub-group :item="item" class="" />
</template>

<script>
export default {
  name: "ItemSubGroup",

  props: {
    item: {
      type: Object,
      default: () => ({
        avatar: undefined,
        group: undefined,
        title: undefined,
        children: [],
      }),
    },
  },
};
</script>
<style lang="scss">
.v-list-group--sub-group {
  .v-list-group__header {
    padding-left: 20px !important;
  }
}
</style>
