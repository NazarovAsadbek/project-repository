<template>
    <div>
        <v-app-bar
            :color="$vuetify.theme.dark ? 'dark' : 'white'"
            :dark="$vuetify.theme.dark"
            class="px-sm text-left shadow-sm"
            height="75"
            app
            clipped-left
        >
            <v-app-bar-nav-icon
                v-ripple="{class: 'primary--text'}"
                @click="toggleVerticalSaasSidebarDrawer"
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
                <v-btn icon @click="notificationDrawer = !notificationDrawer">
                    <v-icon>mdi-bell</v-icon>
                </v-btn>
            </v-badge>

            <v-btn icon @click="searchDrawer = !searchDrawer">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-chip
                pill
                class="transparent py-5"
                @click="userDrawer = !userDrawer"
            >
                Hi, Watson
                <v-avatar class="ml-2">
                    <v-img src="@/assets/images/faces/1.jpg"></v-img>
                </v-avatar>
            </v-chip>
        </v-app-bar>
        <!-- userDrawer -->
        <v-navigation-drawer
            v-model="userDrawer"
            fixed
            right=""
            height="100%"
            temporary
            floating
            width="350"
        >
            <user-drawer>
                <template v-slot:userDrawerCloseButton>
                    <v-btn icon color @click.stop="userDrawer = !userDrawer">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </template>
            </user-drawer>

            <template v-slot:append>
                <div class="my-4 mx-4">
                    <base-hover-button
                        @click.native="logoutUser"
                        text="Logout"
                        block
                        bg-color="primary lighten-5 primary--text"
                        icon-name="mdi-logout"
                    />
                </div>
            </template>
        </v-navigation-drawer>

        <!-- notificationDrawer  -->
        <v-navigation-drawer
            v-model="notificationDrawer"
            fixed
            right=""
            height="100%"
            temporary
            floating
            width="350"
        >
            <notification-drawer>
                <template v-slot:notificationDrawerCloseButton>
                    <v-btn
                        icon
                        color
                        @click.stop="notificationDrawer = !notificationDrawer"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </template>
            </notification-drawer>

            <template v-slot:append>
                <div class="my-4 mx-4">
                    <base-hover-button
                        text="View All Notifications"
                        block
                        bg-color="primary lighten-5 primary--text"
                    />
                </div>
            </template>
        </v-navigation-drawer>
        <!-- searchDrawer -->
        <v-navigation-drawer
            v-model="searchDrawer"
            fixed
            right=""
            height="100%"
            temporary
            floating
            width="380"
        >
            <search-drawer>
                <template v-slot:searchDrawerCloseButton>
                    <v-btn
                        icon
                        color
                        @click.stop="searchDrawer = !searchDrawer"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </template>
            </search-drawer>
        </v-navigation-drawer>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import UserDrawer from '../common-drawer/UserDrawer.vue'
import NotificationDrawer from '../common-drawer/NotificationDrawer.vue'
import SearchDrawer from '../common-drawer/SearchDrawer.vue'
export default {
    name: 'VerticallAppBar',
    components: {
        UserDrawer,
        NotificationDrawer,
        SearchDrawer
    },
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
        ...mapActions(['changeVerticalSaasSidebarDrawer']),
        toggleVerticalSaasSidebarDrawer() {
            this.changeVerticalSaasSidebarDrawer()

            // this.$emit("update:mini-variant");
            // console.log("check");
        }
    }
}
</script>

<style scoped></style>
