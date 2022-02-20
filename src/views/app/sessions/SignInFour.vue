<template>
    <div class="page-wrap">
        <div class="session-form-hold">
            <base-card>
                <v-card-text class="text-center">
                    <v-avatar size="200" tile class="mb-4">
                        <img
                            src="@/assets/images/illustrations/breaking_barriers.svg"
                            alt=""
                        />
                    </v-avatar>

                    <h6 class="text--disabled font-weight-medium mb-10">
                        Sign in to your account
                    </h6>
                    <v-text-field label="Username" />

                    <v-text-field
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show ? 'text' : 'password'"
                        name="input-10-2"
                        label="Password"
                        value="Pa"
                        @click:append="show = !show"
                    ></v-text-field>

                    <v-btn class="mb-4" block color="primary" dark
                        >Sign Up</v-btn
                    >
                    <div class="d-flex justify-around flex-wrap">
                        <h6 class="">Don't have an account ?</h6>
                        <v-btn text small color="primary" class="mb-2"
                            >Forgot Password</v-btn
                        >
                    </div>
                </v-card-text>
            </base-card>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Sign Four',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Sign Four'
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
