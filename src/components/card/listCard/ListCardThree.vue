<template>
    <base-card>
        <v-card-title class="justify-space-between">
            <v-avatar>
                <img :src="avatar" alt="John" />
            </v-avatar>
            <v-menu offset-y>
                <template v-slot:activator="{on, attrs}">
                    <v-btn
                        class="transparent"
                        depressed
                        x-small
                        fab
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon>mdi-dots-horizontal</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-title class="body-2">
                            <v-icon class="mr-2">
                                mdi-account-circle
                            </v-icon>
                            View Profile
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title class="body-2">
                            <v-icon class="mr-2">
                                mdi-account-multiple-plus
                            </v-icon>
                            Add To Team
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title class="body-2">
                            <v-icon class="mr-2">
                                mdi-pencil
                            </v-icon>
                            Add To Team
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-card-title>
        <v-card-text>
            <a href="#" class="text--primary  font-weight-medium ">
                {{ title }}
            </a>

            <p class="my-3">
                {{ subTitle }}
            </p>
            <div>
                <a href="#" class="font-weight-medium grey--text ">
                    <v-icon class="body-1" color="danger">mdi-google</v-icon>
                    ui-lib@gmail.com
                </a>
            </div>
            <div>
                <a href="#" class="font-weight-medium grey--text">
                    <v-icon class="body-1" color="blue">mdi-twitter</v-icon>
                    ui-lib
                </a>
            </div>
            <div>
                <v-btn
                    v-if="footerBtnColor"
                    class="ma-2"
                    small
                    depressed
                    :class="footerBtnColor"
                >
                    {{ footerBtn }}
                </v-btn>
                <v-btn
                    v-if="footerBtnColorTwo"
                    class="ma-2"
                    small
                    depressed
                    :class="footerBtnColorTwo"
                >
                    {{ footerBtnTwo }}
                </v-btn>
            </div>
        </v-card-text>
    </base-card>
</template>
<script>
export default {
    props: {
        // Floating Button icon Color
        avatar: {
            type: String,
            default: require('@/assets/images/avatars/004-bald.svg')
        },
        title: {
            type: String,
            default: 'Timothy Clarkson'
        },
        subTitle: {
            type: String,
            default: 'Vue Developer'
        },
        footerBtn: {
            type: String,
            default: 'Chat'
        },
        footerBtnTwo: {
            type: String,
            default: 'Profile'
        },
        footerBtnColor: {
            type: String,
            default: ''
        },
        footerBtnColorTwo: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    }
}
</script>
