<template>
    <div>
        <base-card class="relative">
            <v-btn
                v-if="floatingButtonBackgroundColor"
                absolute
                fab
                right
                top
                x-small
                :color="floatingButtonBackgroundColor"
            >
                <v-icon :class="floatingButtonIconTextColor">
                    {{ floatingButtonIconName }}
                </v-icon>
            </v-btn>
            <v-card-text>
                <div class="d-flex flex-column justify-center align-center">
                    <v-sheet
                        height="40"
                        width="40"
                        :class="mainIconBackgroundColorClass"
                        class="rounded-circle  d-flex align-center justify-center mb-4"
                    >
                        <v-icon :class="mainIconTextColor">
                            {{ mainIconName }}
                        </v-icon>
                    </v-sheet>
                    <h3 class="font-weight-bold ma-0 ">
                        {{ headingText }}
                    </h3>
                    <h6 class="caption mb-8 font-weight-regular">
                        {{ subHeadingText }}
                    </h6>

                    <v-btn
                        depressed
                        rounded
                        :class="[
                            mainIconTextColor,
                            mainIconBackgroundColorClass,
                            bottomButtonHoverClass
                        ]"
                        class="caption   hover:white--text  font-weight-bold py-2 px-4  d-inline-flex align-center"
                    >
                        <v-icon class=" caption mr-1 ">
                            {{ bottomButtonIcon }}
                        </v-icon>
                        <span class="">{{ bottomButtonText }}</span>
                    </v-btn>
                </div>
            </v-card-text>
        </base-card>
    </div>
</template>
<script>
export default {
    name: 'TestCard',

    props: {
        // Floating Button icon Color
        floatingButtonIconTextColor: {
            type: String,
            default: 'white--text'
        },

        // Floating Button Background Color
        floatingButtonBackgroundColor: {
            type: String,
            default: ''
        },

        // Floating Button Icon Name
        floatingButtonIconName: {
            type: String,
            default: 'mdi-plus'
        },
        // card  main icon color
        mainIconTextColor: {
            type: String,
            default: 'primary--text'
        },
        // card  main icon background color
        mainIconBackgroundColorClass: {
            type: String,
            default: 'primary'
        },
        // card  main icon name
        mainIconName: {
            type: String,
            default: 'mdi-account-multiple-outline'
        },

        //  Heading Text
        headingText: {
            type: String,
            default: '30.2k'
        },

        // card Sub Heading Text
        subHeadingText: {
            type: String,
            default: 'Total Followers'
        },

        // bottom button text
        bottomButtonText: {
            type: String,
            default: '12.6%'
        },
        // bottom button icon
        bottomButtonIcon: {
            type: String,
            default: 'mdi-arrow-down-drop-circle-outline'
        },
        // bottom button hover class
        bottomButtonHoverClass: {
            type: String,
            default: ''
        }
    }
}
</script>
