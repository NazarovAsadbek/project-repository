<template>
    <div class="d-flex align-center">
        <v-tooltip top v-for="(img, index) in images" :key="index">
            <template v-slot:activator="{on, attrs}">
                <img
                    class="avatar-md -ml-4"
                    :src="img.avatar"
                    v-bind="attrs"
                    v-on="on"
                />
            </template>
            <span>{{ img.name }}</span>
        </v-tooltip>
        <v-sheet
            height="36"
            width="36"
            class="ml-n3 rounded-circle  grey lighten-4  d-inline-flex justify-center text-center align-center body-2"
        >
            +10
        </v-sheet>
    </div>
</template>
<script>
export default {
    props: {},
    data() {
        return {
            images: [
                {
                    avatar: require('@/assets/images/avatars/001-man.svg'),
                    name: 'Jhon'
                },
                {
                    avatar: require('@/assets/images/avatars/002-woman.svg'),
                    name: 'Alison'
                },
                {
                    avatar: require('@/assets/images/avatars/004-bald.svg'),
                    name: 'Alison W'
                }
            ]
        }
    }
}
</script>
<style scoped>
.avatar-md {
    width: 36px;
    min-width: 36px;
    height: 36px;
    min-height: 36px;
    border-radius: 50%;
}
img {
    border: 1px solid #fff !important;
}
.badge.rounded-circle.badge-sm {
    width: 32px;
    min-width: 32px;
    height: 32px;
    min-height: 32px;
    line-height: 32px;
    font-size: 14px;
}
</style>
