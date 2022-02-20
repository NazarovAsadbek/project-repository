<template>
    <vue-perfect-scrollbar
        :settings="{suppressScrollX: true, wheelPropagation: false}"
        class="h-100 rtl-ps-none ps scroll"
        style="height: 100%;"
    >
        <div class="pa-5 relative">
            <v-app-bar
                :color="$vuetify.theme.dark ? 'dark' : 'grey lighten-4'"
                :dark="$vuetify.theme.dark"
                class="pt-1"
                fixed
                flat
            >
                <div class="d-flex justify-space-between align-center w-full">
                    <h6 class="ma-0">My Account</h6>
                    <slot name="userDrawerCloseButton"></slot>
                </div>
            </v-app-bar>
        </div>

        <div class="pa-5 mt-10">
            <div class="heading-label pa-0 mb-4">Profile</div>
            <div class="d-flex align-center mb-10">
                <v-avatar size="56" class="mr-2">
                    <img
                        width="50"
                        height="50"
                        src="@/assets/images/faces/1.jpg"
                        alt=""
                    />
                </v-avatar>
                <div>
                    <a href="#" class="link-alt">
                        <p class="font-weight-medium ma-0 ">Tim Clarkson</p>
                    </a>
                    <p class="body-2 text--disabled mb-2">
                        Front End Developer
                    </p>
                    <v-btn small icon color="">
                        <v-icon small dense>mdi-google</v-icon>
                    </v-btn>
                    <v-btn small icon color="">
                        <v-icon small dense>mdi-twitter</v-icon>
                    </v-btn>
                    <v-btn small icon color="">
                        <v-icon small dense>mdi-facebook</v-icon>
                    </v-btn>
                </div>
            </div>

            <div class="heading-label pa-0 mb-4">Skills</div>
            <div class="mb-10">
                <div v-for="(item, index) in items" :key="index" class="d-flex">
                    <v-avatar
                        class="mr-2"
                        :color="item.progressColor"
                        size="36"
                    >
                        <span class="white--text text-20">{{
                            item.letter
                        }}</span>
                    </v-avatar>
                    <div class="flex-grow-1">
                        <p class="font-weight-semi ma-0 ">{{ item.title }}</p>
                        <p class="text--disabled caption">
                            {{ item.subTitle }}
                        </p>
                    </div>
                    <div class="flex-grow-1">
                        <p class="ma-0 text-right">
                            {{ item.progressbarText }}%
                        </p>
                        <v-progress-linear
                            :color="item.progressColor"
                            :value="item.progressvalue"
                            rounded
                        ></v-progress-linear>
                    </div>
                </div>
            </div>

            <div class="heading-label pa-0 mb-4">activity</div>
            <div class="mb-10">
                <div class="d-flex">
                    <v-avatar class="mr-2" color="primary" size="36">
                        <span class="white--text text-20">JH</span>
                    </v-avatar>
                    <div class="flex-grow-1">
                        <p class="font-weight-semi ma-0 ">Urgent Task</p>
                        <p class="text--disabled caption">
                            By Jhon at 3:30 PM
                        </p>
                    </div>
                </div>
                <div class="d-flex">
                    <v-avatar class="mr-2" color="success" size="36">
                        <span class="white--text text-20">W</span>
                    </v-avatar>
                    <div class="flex-grow-1">
                        <p class="font-weight-semi ma-0 ">
                            Task from project Alpha
                        </p>
                        <p class="text--disabled caption">
                            By Watson at 1:30 PM
                        </p>
                    </div>
                </div>
                <div class="d-flex">
                    <v-avatar class="mr-2" color="success" size="36">
                        <span class="white--text text-20">R</span>
                    </v-avatar>
                    <div class="flex-grow-1">
                        <p class="font-weight-semi ma-0 ">
                            Task from project Beta
                        </p>
                        <p class="text--disabled caption">
                            By Rafi at 9:30 AM
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </vue-perfect-scrollbar>
</template>

<script>
export default {
    name: 'UserDrawer',
    props: {},
    data() {
        return {
            items: [
                {
                    letter: 'A',
                    title: 'Angular',
                    subTitle: 'Frontend framework',
                    progressbarText: '90',
                    progressvalue: 90,
                    progressColor: 'danger'
                },
                {
                    letter: 'V',
                    title: 'Vue Js',
                    subTitle: 'Frontend framework',
                    progressbarText: '30',
                    progressvalue: 30,
                    progressColor: 'green'
                },
                {
                    letter: 'R',
                    title: 'React',
                    subTitle: 'Frontend framework',
                    progressbarText: '50',
                    progressvalue: 50,
                    progressColor: 'danger'
                },
                {
                    letter: 'W',
                    title: 'Wordpress Website',
                    subTitle: 'CMS',
                    progressbarText: '30',
                    progressvalue: 30,
                    progressColor: 'dark'
                }
            ]
        }
    },
    computed: {},
    methods: {}
}
</script>

<style scoped></style>
