<template>
    <div class="page-wrap">
        <div class="session-form-hold">
            <base-card>
                <v-card-text class="text-center">
                    <v-avatar size="60" class="mb-4">
                        <img src="@/assets/images/logo.svg" alt="" />
                    </v-avatar>
                    <h5>Lets get started</h5>
                    <h6 class="text--disabled font-weight-medium mb-10">
                        Sign up to use our service
                    </h6>
                    <v-text-field label="Email" />

                    <v-text-field
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show ? 'text' : 'password'"
                        name="input-10-2"
                        label="Password"
                        value="Pa"
                        @click:append="show = !show"
                    ></v-text-field>
                    <v-text-field
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show ? 'text' : 'password'"
                        name="input-10-2"
                        label="Confirm Password"
                        value="Pa"
                        @click:append="show = !show"
                    ></v-text-field>
                    <v-checkbox
                        v-model="checkbox1"
                        label="I have read and agree to the terms of service."
                    ></v-checkbox>
                    <v-btn class="mb-4" block color="primary" dark
                        >Sign Up</v-btn
                    >
                    <div class="d-flex justify-around flex-wrap">
                        <v-btn text small color="primary"
                            >Sign in to existing account</v-btn
                        >
                    </div>
                </v-card-text>
            </base-card>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SignUp',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'SignUp'
    },
    data() {
        return {
            show: false,
            password: 'Password',
            checkbox1: true,
            checkbox2: false
        }
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
