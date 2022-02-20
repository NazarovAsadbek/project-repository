<template>
    <div class="session-bg">
        <div class="signup4-container">
            <base-card>
                <v-row no-gutters>
                    <v-col cols="12" md="6" class="pa-10">
                        <img
                            class=""
                            src="@/assets/images/illustrations/posting_photo.svg"
                        />
                    </v-col>
                    <v-col cols="12" md="6" class="bg-gray-300">
                        <div class="pa-4 mt-3">
                            <v-text-field label="Username" />
                            <v-text-field label="Email" />
                            <v-text-field
                                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show ? 'text' : 'password'"
                                name="input-10-2"
                                label="Password"
                                @click:append="show = !show"
                            ></v-text-field>
                            <v-checkbox
                                v-model="checkbox1"
                                label="I agree with terms and conditions."
                            ></v-checkbox>

                            <div class="d-flex align-center">
                                <v-btn depressed color="primary">Sign Up</v-btn>
                                <p class="mx-4 mb-0 text-18 font-weight-bold">
                                    or
                                </p>
                                <v-btn text depressed color="primary"
                                    >Sign In</v-btn
                                >
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </base-card>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SignUp 5',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'SignUp 5'
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
<style lang="scss">
.session-bg {
    background-image: url('../../../assets/images/waterfall.jpg');
    height: 100vh;
    align-items: center;
    place-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
}
.signup4-header img {
    width: 200px;
}
.signup4-container img {
    max-height: 300px;
    max-width: 100%;
}
@media only screen and (min-width: 1024px) {
    .signup4-container {
        max-width: 800px;
    }
}
</style>
