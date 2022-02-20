<template>
  <v-app>
    <!-- <keep-alive> -->
    <component :is="getThemeMode.layout"></component>
    <!-- </keep-alive> -->

    <customizer></customizer>
  </v-app>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      Customizer: () => import('@/layouts/common-drawer/Customizer'),
    },
    data () {
      return {
        layoutName: '',
      }
    },
    computed: {
      ...mapGetters(['getThemeMode']),
    },
    // mounted() {
    //   if (this.$route.params.layout) {
    //     this.changeThemeLayout(this.$route.params.layout);
    //   }
    // },
    methods: {
      ...mapActions(['changeThemeLayout']),
    },
  }
</script>
