<template>
    <div class="overflow-hidden">
        <v-app-bar
            :color="$vuetify.theme.dark ? 'dark' : 'primary darken-4'"
            :dark="$vuetify.theme.dark"
            class="px-sm text-left shadow-sm"
            flat
            height="200"
            absolute
            prominent
        >
            <v-container class="d-flex align-center mt-6">
                <v-progress-linear
                    :active="getThemeMode.isLoading"
                    :indeterminate="getThemeMode.isLoading"
                    absolute
                    bottom
                    color="primary"
                />

                <v-toolbar-title>
                    <v-avatar>
                        <img src="@/assets/images/logo.svg" alt />
                    </v-avatar>
                </v-toolbar-title>

                <v-spacer />
                <v-menu offset-y min-width="150">
                    <template v-slot:activator="{on, attrs}">
                        <v-btn color dark v-bind="attrs" v-on="on" icon>
                            <v-avatar size="30">
                                <img
                                    src="@/assets/images/flags/1x1/us.svg"
                                    alt
                                />
                            </v-avatar>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                            v-for="(item, index) in flags"
                            :key="index"
                        >
                            <v-list-item-title>
                                <v-avatar class="mr-1" size="24">
                                    <img :src="item.country" alt />
                                </v-avatar>
                                {{ item.lang }}
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-badge
                    overlap
                    content="3"
                    color="red"
                    offset-x="22"
                    offset-y="22"
                >
                    <v-btn
                        icon
                        @click="notificationDrawer = !notificationDrawer"
                    >
                        <v-icon color="grey lighten-3">mdi-bell</v-icon>
                    </v-btn>
                </v-badge>

                <v-btn icon @click="searchDrawer = !searchDrawer">
                    <v-icon color="grey lighten-3">mdi-magnify</v-icon>
                </v-btn>
                <v-btn icon @click="searchDrawer = !searchDrawer">
                    <v-icon color="grey lighten-3"
                        >mdi-text-box-multiple-outline</v-icon
                    >
                </v-btn>

                <v-menu offset-y min-width="150">
                    <template v-slot:activator="{on, attrs}">
                        <v-btn color dark v-bind="attrs" v-on="on" icon>
                            <v-avatar size="30">
                                <img src="@/assets/images/faces/1.jpg" alt />
                            </v-avatar>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title>
                                <v-icon class="mr-1">mdi-account</v-icon>Profile
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>
                                <v-icon class="mr-1">mdi-cog</v-icon>Account
                                Setting
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>
                                <v-icon class="mr-1">mdi-bell-off</v-icon
                                >Disable Alerts
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>
                                <v-icon class="mr-1">mdi-logout</v-icon>Sign Out
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-container>
        </v-app-bar>
        <!-- userDrawer -->
        <v-navigation-drawer
            v-model="userDrawer"
            fixed
            right
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
                        text="Logout"
                        block
                        bg-color="bg-blue-200"
                        icon-name="mdi-logout"
                    />
                </div>
            </template>
        </v-navigation-drawer>

        <!-- notificationDrawer  -->
        <v-navigation-drawer
            v-model="notificationDrawer"
            fixed
            right
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
                        bg-color="bg-blue-200"
                    />
                </div>
            </template>
        </v-navigation-drawer>
        <!-- searchDrawer -->
        <v-navigation-drawer
            v-model="searchDrawer"
            fixed
            right
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

export default {
    name: 'VerticallAppBar',
    components: {
        UserDrawer: () => import('../common-drawer/UserDrawer.vue'),
        NotificationDrawer: () =>
            import('../common-drawer/NotificationDrawer.vue'),
        SearchDrawer: () => import('../common-drawer/SearchDrawer.vue')
    },
    computed: {
        ...mapGetters(['getThemeMode'])
    },
    data() {
        return {
            userDrawer: false,
            notificationDrawer: false,
            searchDrawer: false,
            country: require('@/assets/images/flags/1x1/us.svg'),
            flags: [
                {
                    country: require('@/assets/images/flags/1x1/us.svg'),
                    lang: 'English'
                },
                {
                    country: require('@/assets/images/flags/1x1/es.svg'),
                    lang: 'Spanish'
                },
                {
                    country: require('@/assets/images/flags/1x1/in.svg'),
                    lang: 'India'
                }
            ]
        }
    },
    methods: {
        ...mapActions([
            'changeVerticalSidebarDrawer',
            ,
            'changeVerticalSidebarMini'
        ]),
        toggleVerticalSidebarDrawer() {
            this.changeVerticalSidebarDrawer()

            // this.$emit("update:mini-variant");
            // console.log("check");
        }
    }
}
</script>
