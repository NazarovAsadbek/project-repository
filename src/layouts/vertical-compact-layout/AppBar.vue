<template>
    <div>
        <v-app-bar
            :color="$vuetify.theme.dark ? 'dark' : getThemeMode.appBarColor"
            :dark="getThemeMode.appBarColor != 'white' ? true : false"
            app
            class="px-sm text-left shadow-sm"
            height="75"
        >
            <v-app-bar-nav-icon
                v-ripple="{class: 'primary--text'}"
                @click="toggleCompactVerticalSidebarDrawer"
            />
            <v-progress-linear
                :active="getThemeMode.isLoading"
                :indeterminate="getThemeMode.isLoading"
                absolute
                bottom
                color="primary"
            />

            <v-toolbar-title>Octavia</v-toolbar-title>

            <v-spacer />

            <v-badge
                bordered
                overlap
                content="3"
                color="red"
                offset-x="22"
                offset-y="22"
            >
                <v-btn icon>
                    <v-icon>mdi-bell</v-icon>
                </v-btn>
            </v-badge>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-chip pill class="transparent py-5">
                Hi, Watson
                <v-avatar class="ml-2">
                    <v-img src="@/assets/images/faces/1.jpg"></v-img>
                </v-avatar>
            </v-chip>
        </v-app-bar>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'VerticallAppBar',

    computed: {
        ...mapGetters(['getThemeMode'])
    },
    data() {
        return {
            userDrawer: false,
            notificationDrawer: false,
            searchDrawer: false
        }
    },
    methods: {
        ...mapActions(['changeCompactVerticalSidebarDrawer']),
        toggleCompactVerticalSidebarDrawer() {
            this.changeCompactVerticalSidebarDrawer()
        }
    }
}
</script>

<style scoped></style>
