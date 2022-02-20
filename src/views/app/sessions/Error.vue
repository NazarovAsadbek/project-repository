<template>
    <div class="ma-auto">
        <div class="d-flex align-center justify-center mb-4">
            <v-avatar tile size="120" class="mr-4">
                <img src="@/assets/images/svg/warning.svg" alt="" />
            </v-avatar>
            <div class="error-title">
                <h1 class="font-weight-bold mb-0">505</h1>
                <div class="text-18 font-weight-bold">Server Error!</div>
            </div>
        </div>
        <div class="d-flex justify-center flex-wrap">
            <v-btn small class="ma-2" outlined color="primary"
                >Back To Dashboard</v-btn
            >
            <v-btn small class="ma-2" outlined color="danger"
                >Report the problem</v-btn
            >
        </div>
    </div>
</template>
<script>
export default {
    name: 'Error',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Error'
    }
}
</script>
<style lang="scss" scoped>
.error-title {
    h1 {
        font-size: 5rem;
    }
}
</style>
