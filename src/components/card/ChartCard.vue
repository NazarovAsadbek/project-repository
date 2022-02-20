<template>
    <base-card class="h-full">
        <v-card-title class="d-flex justify-space-between">
            <div class="mb-0 mr-4">
                <p class="card-title mb-0">{{ title }}</p>
            </div>
            <v-menu left bottom>
                <template v-slot:activator="{on, attrs}">
                    <v-btn
                        color="grey lighten-3"
                        small
                        depressed
                        v-bind="attrs"
                        v-on="on"
                        v-if="buttonText"
                    >
                        {{ buttonText }}
                        <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-title> View Chart</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title> Edit Chart</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title> Delete Chart</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <slot name="chart"> </slot>
        </v-card-text>
    </base-card>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        buttonText: {
            type: String,
            default: 'More'
        }
    }
}
</script>
