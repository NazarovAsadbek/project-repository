<template>
    <div>
        <base-card class="d-flex flex-column">
            <v-card-text>
                <div class="d-flex justify-space-between align-center">
                    <div>
                        <p class="ma-0 text--disabled">{{ priceTitle }}</p>
                    </div>

                    <div>
                        <v-menu left bottom>
                            <template v-slot:activator="{on}">
                                <v-btn icon v-on="on">
                                    <v-icon>mdi-dots-horizontal</v-icon>
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item
                                    v-for="n in 4"
                                    :key="n"
                                    @click="() => {}"
                                >
                                    <v-list-item-title
                                        >Option {{ n }}</v-list-item-title
                                    >
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </div>
                <h4>{{ amount }}</h4>
                <div
                    class="d-flex justify-space-between flex-wrap align-center"
                >
                    <div class="d-flex align-center">
                        <v-sheet
                            height="24"
                            width="24"
                            class="mr-2  d-flex align-center justify-center rounded-circle"
                            :class="chipColor"
                        >
                            <v-icon :class="colorIcon" class="caption">{{
                                cardIcon
                            }}</v-icon>
                        </v-sheet>
                        <span :class="chipTextColor">{{ chipText }}</span>
                    </div>
                    <div>
                        <p class="ma-0">{{ footerText }}</p>
                    </div>
                </div>
            </v-card-text>
        </base-card>
    </div>
</template>
<script>
export default {
    name: 'PriceCard',
    props: {
        cardIcon: {
            type: String,
            default: 'mdi-chart-pie'
        },
        colorIcon: {
            type: String,
            default: 'success--text'
        },
        chipColor: {
            type: String,
            default: 'primary lighten-3'
        },
        priceTitle: {
            type: String,
            default: 'test'
        },
        chipText: {
            type: String,
            default: 'A'
        },
        chipTextColor: {
            type: String,
            default: 'danger--text'
        },
        amount: {
            type: String,
            default: '$41000'
        },
        footerText: {
            type: String,
            default: 'Profit in this Period'
        }
    }
}
</script>
