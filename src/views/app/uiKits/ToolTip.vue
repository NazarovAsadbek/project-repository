<template>
    <v-row>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Usage</v-card-title>
                <v-card-text>
                    <div class="d-flex justify-space-between">
                        <v-tooltip bottom>
                            <template v-slot:activator="{on, attrs}">
                                <v-btn
                                    color="primary"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Button
                                </v-btn>
                            </template>
                            <span>Tooltip</span>
                        </v-tooltip>
                        <v-tooltip bottom>
                            <template v-slot:activator="{on, attrs}">
                                <v-icon
                                    color="primary"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    mdi-home
                                </v-icon>
                            </template>
                            <span>Tooltip</span>
                        </v-tooltip>

                        <v-tooltip bottom>
                            <template v-slot:activator="{on, attrs}">
                                <span v-bind="attrs" v-on="on"
                                    >This text has a tooltip</span
                                >
                            </template>
                            <span>Tooltip</span>
                        </v-tooltip>
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Alignment</v-card-title>
                <v-card-text>
                    <div class="d-flex justify-space-between">
                        <v-tooltip left>
                            <template v-slot:activator="{on, attrs}">
                                <v-btn
                                    color="primary"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Left
                                </v-btn>
                            </template>
                            <span>Left tooltip</span>
                        </v-tooltip>

                        <v-tooltip top>
                            <template v-slot:activator="{on, attrs}">
                                <v-btn
                                    color="primary"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Top
                                </v-btn>
                            </template>
                            <span>Top tooltip</span>
                        </v-tooltip>

                        <v-tooltip bottom>
                            <template v-slot:activator="{on, attrs}">
                                <v-btn
                                    color="primary"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Bottom
                                </v-btn>
                            </template>
                            <span>Bottom tooltip</span>
                        </v-tooltip>

                        <v-tooltip right>
                            <template v-slot:activator="{on, attrs}">
                                <v-btn
                                    color="primary"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Right
                                </v-btn>
                            </template>
                            <span>Right tooltip</span>
                        </v-tooltip>
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Visibility</v-card-title>
                <v-card-text>
                    <v-row class="d-flex" justify="space-between">
                        <v-col cols="12">
                            <v-btn @click="show = !show">
                                toggle
                            </v-btn>
                        </v-col>

                        <v-col cols="12" class="mt-12">
                            <v-tooltip v-model="show" top>
                                <template v-slot:activator="{on, attrs}">
                                    <v-btn icon v-bind="attrs" v-on="on">
                                        <v-icon color="grey lighten-1">
                                            mdi-cart
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <span>Programmatic tooltip</span>
                            </v-tooltip>
                        </v-col>
                    </v-row>
                </v-card-text>
            </base-card>
        </v-col>
    </v-row>
</template>
<script>
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Tooltip'
    },
    data() {
        return {
            show: false
        }
    }
}
</script>
