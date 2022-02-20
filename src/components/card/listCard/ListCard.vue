<template>
    <base-card>
        <v-card-text>
            <div
                class="d-flex justify-space-between align-center flex-wrap mb-4"
            >
                <div class="d-flex align-center">
                    <img
                        class="mr-md rounded-circle mr-2"
                        height="44"
                        width="44"
                        :src="avatar"
                    />
                    <div>
                        <p class="ma-0">
                            <a
                                href="#"
                                class="text--primary font-weight-medium mb-1 hover:info--text"
                            >
                                {{ title }}
                            </a>
                        </p>
                        <p class="text--disabled caption ma-0 ">
                            {{ subTitle }}
                        </p>
                    </div>
                </div>
                <div class="">
                    <v-btn
                        class="mr-2 shadow-sm"
                        fab
                        color="danger"
                        x-small
                        dark
                    >
                        <v-icon>{{ buttonIconOne }}</v-icon>
                    </v-btn>
                    <v-btn class="mr-2 shadow-sm" fab x-small dark color="info">
                        <v-icon>{{ buttonIconTwo }}</v-icon>
                    </v-btn>
                    <v-btn
                        class="mr-1 shadow-sm"
                        fab
                        x-small
                        dark
                        color="primary"
                    >
                        <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                </div>
            </div>
            <v-divider />
            <div
                class="d-flex justify-space-between align-center flex-wrap mt-4"
            >
                <div class="mb-2">
                    <div class="d-flex justify-space-between">
                        <p class="pr-10">
                            Progressbar
                        </p>
                        <p>40%</p>
                    </div>
                    <v-progress-linear
                        :color="progressLinearColor"
                        value="70"
                    />
                </div>
                <div class="d-flex justify-end">
                    <v-btn class="ma-2" color="" small depressed>
                        {{ footerBtn }}
                    </v-btn>
                    <v-btn class="ma-2" color="" small depressed>
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
        footerBtn: {
            type: String,
            default: 'Chat'
        },
        footerBtnTwo: {
            type: String,
            default: 'Profile'
        },
        buttonColorOne: {
            type: String,
            default: ''
        },
        buttonIconOne: {
            type: String,
            default: ''
        },
        buttonIconTwo: {
            type: String,
            default: ''
        },
        buttonColorTwo: {
            type: String,
            default: ''
        },
        buttonIconThree: {
            type: String,
            default: 'mdi-google'
        },
        buttonColorThree: {
            type: String,
            default: ''
        },
        progressLinearColor: {
            type: String,
            default: 'primary'
        }
    },
    data() {
        return {}
    }
}
</script>
