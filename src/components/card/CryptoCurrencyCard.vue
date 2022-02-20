<template>
    <base-card :class="bgCardColor">
        <v-card-text class="d-flex align-center h-full">
            <div
                class="d-flex flex-grow-1 justify-space-between align-center flex-wrap"
            >
                <div>
                    <p class="ma-0 white--text">
                        {{ heading }}
                    </p>
                    <div class="text-h5 white--text ma-0 ">
                        {{ subHeading }}
                    </div>
                </div>
                <v-icon :class="mainIconTextColor" class="text-h3">
                    <!-- mdi-numeric-9-plus-circle-outline -->
                    {{ mainIconName }}
                </v-icon>
            </div>
        </v-card-text>
    </base-card>
</template>
<script>
export default {
    props: {
        bgCardColor: {
            type: String,
            default: ''
        },
        mainIconTextColor: {
            type: String,
            default: ''
        },
        mainIconName: {
            type: String,
            default: ''
        },
        heading: {
            type: String,
            default: ''
        },
        subHeading: {
            type: String,
            default: ''
        }
    }
}
</script>
