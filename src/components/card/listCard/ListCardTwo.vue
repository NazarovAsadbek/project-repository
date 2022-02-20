<template>
    <base-card class="h-full">
        <v-card-text
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
                            class="text--primary  font-weight-medium mb-1 "
                        >
                            {{ title }}
                        </a>
                    </p>
                    <p class="text--disabled caption ma-0">
                        {{ subTitle }}
                    </p>
                </div>
            </div>
            <div>
                <v-btn class="ma-2  " small depressed>
                    {{ primaryBtn }}
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
        primaryBtn: {
            type: String,
            default: 'Chat'
        },
        secondaryBtn: {
            type: String,
            default: 'Profile'
        }
    },
    data() {
        return {}
    }
}
</script>
