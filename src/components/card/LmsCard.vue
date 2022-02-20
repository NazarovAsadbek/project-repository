<template>
    <div>
        <base-card :class="cardColor">
            <v-card-text>
                <div class="d-flex justify-space-between align-center pa-2">
                    <div :class="badgeColor" class="badge rounded-circle">
                        <h6 :class="badgeTextColor" class="ma-0">
                            {{ badgeText }}
                        </h6>
                    </div>
                    <div class="ml-2 flex-grow-1">
                        <p class="ma-0 white--text">
                            {{ text }}
                        </p>
                        <p class="white--text caption ma-0 ">
                            {{ textSmall }}
                        </p>
                    </div>
                    <div class="grid-button">
                        <v-btn
                            class="mx-2 shadow-none"
                            fab
                            dark
                            small
                            :class="btnColor"
                        >
                            <v-icon dark>
                                {{ btnIcon }}
                            </v-icon>
                        </v-btn>
                    </div>
                </div>
            </v-card-text>
        </base-card>
    </div>
</template>
<script>
export default {
    props: {
        badgeColor: {
            type: String,
            default: ''
        },
        cardColor: {
            type: String,
            default: ''
        },
        badgeTextColor: {
            type: String,
            default: ''
        },
        badgeText: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        textSmall: {
            type: String,
            default: ''
        },
        btnIcon: {
            type: String,
            default: ''
        },
        btnColor: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            hover: false
        }
    }
}
</script>
<style>
.badge {
    width: 40px;
    min-width: 40px;
    height: 40px;
    min-height: 40px;
    line-height: 40px;
    font-size: 1.2rem;
    display: flex;
    align-items: baseline;
    justify-content: center;
    padding: 0px !important;
    border-radius: 50%;
}
</style>
