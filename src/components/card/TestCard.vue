<template>
    <div>
        <base-card class="d-flex flex-column">
            <v-card-text>
                <v-sheet
                    height="40"
                    width="40"
                    class="rounded-circle  d-flex align-center justify-center mb-2"
                    :color="chipColor"
                >
                    <v-icon
                        :class="colorIcon"
                        class="d-flex align-center justify-center text-18"
                        >{{ cardIcon }}</v-icon
                    >
                </v-sheet>
                <p class="caption ma-0 text--disabled">{{ title }}</p>
                <h4>{{ amount }}</h4>
                <p class="mb-0" :class="footerClass">{{ footerText }}</p>
            </v-card-text>
        </base-card>
    </div>
</template>
<script>
export default {
    props: {
        cardIcon: {
            type: String,
            default: 'mdi-chart-pie'
        },
        colorIcon: {
            type: String,
            default: 'text-primary'
        },
        chipColor: {
            type: String,
            default: 'warning'
        },
        title: {
            type: String,
            default: 'test'
        },
        // chipText: {
        //   type: String,
        //   default: "A"
        // },
        amount: {
            type: String,
            default: '95065'
        },
        footerText: {
            type: String,
            default: 'hello world'
        },
        footerClass: {
            type: String,
            default: 'grey--text'
        }
    }
}
</script>
