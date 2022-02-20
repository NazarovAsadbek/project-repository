<template>
    <div class="page-wrap">
        <div class="session-form-hold">
            <base-card>
                <v-card-text class="text-center">
                    <v-avatar size="60" class="mb-4">
                        <img src="@/assets/images/faces/1.jpg" alt="" />
                    </v-avatar>
                    <h5>JHON DOE</h5>
                    <h6 class="text--disabled font-weight-medium mb-10">
                        Last seen 1 hour ago
                    </h6>
                    <v-text-field
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show ? 'text' : 'password'"
                        name="input-10-2"
                        label="Password"
                        value="Pa"
                        @click:append="show = !show"
                    ></v-text-field>
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
    name: 'Lockscreen',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Lockscreen'
    },
    data() {
        return {
            show: false,
            password: 'Password'
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
