<template>
    <div class="page-wrap">
        <div class="session-form-hold">
            <base-card>
                <v-progress-linear
                    :active="loading"
                    :indeterminate="loading"
                    absolute
                    top
                    color="primary"
                ></v-progress-linear>
                <v-card-text class="text-center">
                    <v-avatar size="60" class="mb-4">
                        <img src="@/assets/images/logo.svg" alt="" />
                    </v-avatar>

                    <h6 class="text--disabled font-weight-medium mb-10">
                        Sign in to your account
                    </h6>
                    <v-form>
                        <v-text-field
                            label="email"
                            v-model="email"
                            :rules="emailRules"
                            required
                        />

                        <v-text-field
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show ? 'text' : 'password'"
                            name="input-10-2"
                            label="password"
                            :counter="10"
                            :rules="nameRules"
                            v-model="ePassword"
                            @click:append="show = !show"
                        ></v-text-field>
                        <v-checkbox
                            v-model="checkbox1"
                            label="Remember this computer"
                        ></v-checkbox>
                        <v-btn
                            class="mb-4"
                            @click="formSubmit"
                            block
                            color="primary"
                            dark
                        >
                            <v-icon left>mdi-login</v-icon>
                            Sign In</v-btn
                        >
                        <v-btn
                            class="mb-4"
                            @click="googleSignIn"
                            block
                            color="#DB4437"
                            dark
                        >
                            <v-icon left>
                                mdi-google
                            </v-icon>

                            Sign In
                        </v-btn>
                        <div class="d-flex justify-around flex-wrap">
                            <v-btn text small color="primary" class="mb-2"
                                >Forgot Password</v-btn
                            >
                            <v-btn
                                text
                                small
                                color="primary"
                                to="/app/sessions/sign-up-2"
                                >Create New Account</v-btn
                            >
                        </div>
                    </v-form>
                </v-card-text>
            </base-card>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase/app'
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'login',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'SignIn Two'
    },
    data() {
        return {
            show: false,
            password: 'Password',
            checkbox1: true,
            checkbox2: false,
            email: 'admin@gmail.com',
            ePassword: '123456',
            loading: false,
            emailRules: [
                (v) => !!v || 'E-mail is required',
                (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
            ],
            nameRules: [
                (v) => !!v || 'Password is required',
                (v) =>
                    (v && v.length <= 10) ||
                    'Name must be less than 10 characters'
            ]
        }
    },
    computed: {
        ...mapGetters(['loggedInUser', 'error'])
    },
    methods: {
        ...mapActions(['login']),
        // login: function() {
        //   firebase.auth().signInWithEmailAndPassword(this.email, this.ePassword)
        //     .then(
        //       user => {
        //         // console.log(user);
        //         this.loading = true;
        //         this.$router.push('/');

        //       },
        //       err => {

        //         // alert(err);

        //       }
        //     )
        // },
        formSubmit() {
            this.login({email: this.email, password: this.ePassword})
        },
        googleSignIn() {
            const provider = new firebase.auth.GoogleAuthProvider()

            firebase
                .auth()
                .signInWithPopup(provider)
                .then((result) => {
                    const newUser = {uid: result.user.uid}
                    localStorage.setItem('userInfo', JSON.stringify(newUser))
                    this.$router.push('/')
                })
                .catch((err) => {
                    alert('Oops' + err.message)
                })
        }
    },
    watch: {
        // loading (val) {
        //   if (!val) return
        //   setTimeout(() => (this.loading = false), 2000)
        // },
        loggedInUser(val) {
            if (val && val.uid && val.uid.length > 0) {
                // this.makeToast("success", "Successfully Logged In");
                console.log('logged in successfully ')
                this.loading = true
                setTimeout(() => {
                    this.$router.push('/')
                }, 500)
            }
        },
        error(val) {
            if (val != null) {
                // this.makeToast("warning", val.message);
            }
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
