<template>
    <v-toolbar class="subheader" flat color="" width="100%">
        <div class="d-flex justify-space-between align-center flex-wrap">
            <div class="d-flex align-center subheader-left">
                <v-icon class="mr-4">mdi-home</v-icon>

                <ul class="egret-breadcrumb-li">
                    <li
                        v-for="(breadcrumb, idx) in breadcrumbList"
                        :key="idx"
                        @click="routeTo(idx)"
                        class="text--primary"
                        :class="{linked: !!breadcrumb.link}"
                    >
                        {{ breadcrumb.name }}
                    </li>
                </ul>
            </div>

            <div class="">
                <base-hover-button
                    class="pa-0 mr-1"
                    small
                    smallIcon
                    icon-name="mdi-calendar-month"
                />
                <base-hover-button
                    class="pa-0 mr-1"
                    small
                    smallIcon
                    icon-name="mdi-plus"
                />
                <base-hover-button
                    class="px-2 "
                    small
                    smallIcon
                    icon-mr="mr-1"
                    text="AUG 17"
                    icon-name="mdi-calendar-weekend"
                />
            </div>
        </div>
    </v-toolbar>
</template>
<script>
export default {
    data() {
        return {
            breadcrumbList: []
        }
    },
    mounted() {
        this.updateList()
    },
    watch: {
        $route() {
            this.updateList()
        }
    },
    methods: {
        routeTo(pRouteTo) {
            if (this.breadcrumbList[pRouteTo].link)
                this.$router.push(this.breadcrumbList[pRouteTo].link)
        },
        updateList() {
            this.breadcrumbList = this.$route.meta.breadcrumb
        }
    }
}
</script>
<style lang="scss">
.subheader {
    .subheader-left {
        @media (max-width: 1000px) {
            display: none !important;
        }
    }
    .v-toolbar__content {
        width: calc(100% - 256px) !important;
        transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
        @media (max-width: 959px) {
            width: 100% !important;
            margin-left: 0px;
        }
    }
    position: fixed;
    top: 75px;
    z-index: 2;
    width: calc(100% - 256px);
    margin-left: 256px;
    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
    @media (max-width: 959px) {
        width: 100%;
        margin-left: 0px;
    }
}

// sidebar-mini
.sidebar-mini {
    .subheader {
        .v-toolbar__content {
            width: 100% !important;
            margin-right: 56px;
            // transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
        }
        width: 100%;
        margin-left: 0;
        left: 56px;
        transition: all 2s cubic-bezier(0.685, 0.0473, 0.346, 1);
    }
}

// sidebar-close
.sidebar-close {
    .subheader {
        .v-toolbar__content {
            width: 100% !important;
            margin-right: 0;
            transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
        }
        width: 100%;
        margin-left: 0;
        transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
    }
}
ul.egret-breadcrumb-li {
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
        display: flex;
        float: left;

        width: auto;

        font-weight: bold;
        // color: #828D99 !important;
        cursor: default;
        align-items: center;
        &:not(:last-child)::after {
            content: '\F0142';
            font: normal normal normal 24px/1 'Material Design Icons';
            float: right;
            margin: 0 0.2em;

            cursor: default;
        }
        &.linked {
            cursor: pointer;
            font-size: 1em;
            font-weight: normal;
        }
    }
}
</style>
