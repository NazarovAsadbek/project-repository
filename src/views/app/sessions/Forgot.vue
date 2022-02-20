<template>
    <div class="page-wrap">
        <div class="session-form-hold">
            <base-card>
                <v-card-text class="text-center">
                    <v-avatar size="60" class="mb-4">
                        <img src="@/assets/images/logo.svg" alt="" />
                    </v-avatar>
                    <p class="text--disabled font-weight-medium mb-10">
                        New password will be sent to your email address
                    </p>
                    <v-text-field label="Email"></v-text-field>
                    <v-btn class="mb-4" block color="primary" dark
                        >Submit</v-btn
                    >
                    <div class="d-flex justify-around">
                        <v-btn text small color="primary">Sign In</v-btn>
                        <v-btn text small color="primary"
                            >Create New Account</v-btn
                        >
                    </div>
                </v-card-text>
            </base-card>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Forgot',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Forgot'
    }
}
</script>
<style lang="scss" scoped>
.page-wrap {
    background-color: #242939 !important;
    display: flex;
    align-items: center;
    padding: 40px 1rem;
    height: 100%;
    min-height: 100vh;
}
.session-form-hold {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
}
</style>
