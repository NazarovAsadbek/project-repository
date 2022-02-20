<template>
    <div>
        <v-row>
            <v-col cols="12" md="7" class="ma-0 pa-0">
                <div class="sign-three relative">
                    <div class="sign-three-overlay"></div>
                    <div class="sign-three-content z-10">
                        <div class="section-left-content">
                            <h1 class="text-4xl font-weight-bold white--text">
                                Don't have an account?
                            </h1>
                            <p class="font-weight-medium body-2">
                                Stop wasting time and money. It's free!
                            </p>
                            <v-btn large color="orange white--text"
                                >Sign Up</v-btn
                            >
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="5" class="ma-0 pa-0">
                <div class=" ma-0 pa-0">
                    <div
                        class="d-flex justify-center align-center text-center  md:h-screen h-full"
                    >
                        <div class="w-4/5">
                            <v-avatar class="mb-8" size="200" tile>
                                <img
                                    src="@/assets/images/illustrations/breaking_barriers.svg"
                                />
                            </v-avatar>

                            <v-form>
                                <v-text-field
                                    prepend-icon="mdi-account"
                                    label="Username"
                                    class="mb-4"
                                ></v-text-field>
                                <v-text-field
                                    prepend-icon="mdi-account-lock"
                                    label="Password"
                                    :append-icon="
                                        show ? 'mdi-eye' : 'mdi-eye-off'
                                    "
                                    :type="show ? 'text' : 'password'"
                                    name="input-10-2"
                                    value=""
                                    @click:append="show = !show"
                                ></v-text-field>
                                <v-checkbox
                                    v-model="selected"
                                    label="I Agree With Terms And Conditions"
                                    value="John"
                                ></v-checkbox>
                            </v-form>

                            <div class="my-4">
                                <v-divider></v-divider>
                            </div>

                            <div class="text-center">
                                <h6 class="card-title font-extrabold">
                                    Sign In With
                                </h6>
                                <div class="d-flex justify-center flex-wrap">
                                    <base-outline-button
                                        text="Google"
                                        bg-hover="hover:bg-red-600"
                                        text-color="text-red-600"
                                        border-color="border-red-600"
                                        class="ma-2"
                                    />
                                    <base-outline-button
                                        text="Facebook"
                                        bg-hover="hover:bg-indigo-600"
                                        text-color="info--text"
                                        border-color="border-indigo-600"
                                        class="ma-2"
                                    />
                                    <base-outline-button
                                        text="Twitter"
                                        bg-hover="hover:bg-blue-600"
                                        text-color="text-blue-600"
                                        border-color="border-blue-600"
                                        class="ma-2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    name: 'SignIn Three',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'SignIn Three'
    },
    data() {
        return {
            show: false,
            password: 'Password',
            selected: ['John']
        }
    }
}
</script>
<style lang="scss" scoped>
* {
    overflow-x: hidden;
}

.sign-three {
    color: #fff;
    width: 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 2rem;
    background: url('../../../assets/images/signin-left.jpg');
    .sign-three-overlay {
        content: '';
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        background: rgba(0, 0, 0, 0.65);
        z-index: 1;
    }
}
</style>
