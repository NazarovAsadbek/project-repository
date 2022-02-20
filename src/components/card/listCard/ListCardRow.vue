<template>
    <base-card>
        <v-card-text>
            <div
                class="d-flex justify-space-between align-center flex-wrap m-3"
            >
                <div class="flex-1 d-flex  align-center mr-4">
                    <v-avatar>
                        <img :src="avatar" alt="John" class="mr-2" />
                    </v-avatar>
                    <div class="flex-grow-1">
                        <p class="font-weight-semi ma-0 ">
                            {{ title }}
                        </p>
                        <span class="text--disabled">{{ subTitle }}</span>
                    </div>
                </div>
                <div class="flex-1">
                    <div class="d-flex justify-space-between">
                        <p class="ma-0">
                            Profile Completion
                        </p>
                        <p class="ma-0">
                            40%
                        </p>
                    </div>
                    <v-progress-linear value="15" :color="progressbarColor" />
                </div>
                <div class="flex-1 text-right px-6">
                    <p class="ma-0">
                        <a href="#" class="font-weight-medium grey--text ">
                            <v-icon class="body-1" color="danger"
                                >mdi-google</v-icon
                            >
                            ui-lib@gmail.com
                        </a>
                    </p>
                    <p class="ma-0">
                        <a href="#" class="font-weight-medium grey--text">
                            <v-icon class="body-1" color="blue lighten-1"
                                >mdi-twitter</v-icon
                            >
                            ui-lib
                        </a>
                    </p>
                </div>
            </div>
            <v-divider class="mt-5 mb-3" />
            <div class="d-flex justify-space-between align-center flex-wrap">
                <small class="text--disavled">Registered 3 mins ago</small>
                <div>
                    <v-btn
                        v-if="footerBtnColor"
                        class="ma-2"
                        depressed
                        :class="footerBtnColor"
                        small
                    >
                        {{ footerBtn }}
                    </v-btn>
                    <v-btn
                        v-if="footerBtnColorTwo"
                        class="ma-2"
                        depressed
                        :class="footerBtnColorTwo"
                        small
                    >
                        {{ footerBtnTwo }}
                    </v-btn>
                </div>
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
        progressbarColor: {
            type: String,
            default: 'warning'
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
