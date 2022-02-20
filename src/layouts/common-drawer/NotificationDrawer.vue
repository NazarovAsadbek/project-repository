<template>
    <vue-perfect-scrollbar
        :settings="{suppressScrollX: true, wheelPropagation: false}"
        class="h-100 rtl-ps-none ps scroll"
        style="height: 100%;"
    >
        <div class="pa-5 relative">
            <v-app-bar class="pt-1" fixed flat>
                <div class="d-flex justify-space-between align-center w-full">
                    <h6 class="ma-0">Notifications</h6>
                    <slot name="notificationDrawerCloseButton"></slot>
                </div>
            </v-app-bar>
        </div>

        <div class="pa-5 mt-10">
            <!-- <div class="heading-label pa-0 mb-8">Notifications</div> -->

            <div v-for="(item, index) in items" :key="index">
                <div class="d-flex justify-space-between mb-8">
                    <div class="d-flex">
                        <v-avatar
                            size="40"
                            class="mr-2"
                            :color="item.iconColor"
                        >
                            <v-icon :class="item.iconColorText">{{
                                item.iconName
                            }}</v-icon>
                        </v-avatar>
                        <div>
                            <p class="font-weight-medium body-2 ma-0 ">
                                {{ item.title }}
                            </p>
                            <div>
                                <span class="text--disabled">
                                    On
                                    <a href="#" class="caption"
                                        >Porject alpha</a
                                    >
                                </span>
                                <div
                                    class="px-4 py-2 d-flex align-center rounded"
                                >
                                    <v-img
                                        width="40"
                                        height="40"
                                        class=" h-auto"
                                        :src="item.file"
                                    ></v-img>
                                    <span class="caption font-weight-semi">
                                        <a class="link-alt" href="#">{{
                                            item.fileName
                                        }}</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span class="text--disabled caption">{{
                            item.time
                        }}</span>
                    </div>
                </div>
                <v-divider class="py-2"></v-divider>
            </div>
        </div>
    </vue-perfect-scrollbar>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {
                    iconName: 'mdi-cloud-upload',
                    iconColor: 'bg-blue-200',
                    iconColorText: 'info--text',
                    title: 'Watson uploaded a file',
                    file: require('@/assets/images/file-types/001-pdf.svg'),
                    fileName: 'progress_report.pdf',
                    time: '15 min ago'
                },
                {
                    iconName: 'mdi-file-document',
                    iconColor: 'bg-blue-200',
                    iconColorText: 'info--text',
                    title: 'jhon Commented on task',
                    file: require('@/assets/images/file-types/001-pdf.svg'),
                    fileName: 'progress_report.pdf',
                    time: '5 min ago'
                },
                {
                    iconName: 'mdi-comment-alert',
                    iconColor: 'bg-orange-200',
                    iconColorText: 'warning--text',
                    title: 'jhon Commented on task',

                    time: '45 min ago'
                },
                {
                    iconName: 'mdi-cloud-upload',
                    iconColor: 'bg-blue-200',
                    iconColorText: 'info--text',
                    title: 'jhon Commented on task',
                    file: require('@/assets/images/file-types/004-xlsx.svg'),
                    fileName: 'budget_report.xlsx',
                    time: '15 min ago'
                },
                {
                    iconName: 'mdi-comment-alert',
                    iconColor: 'bg-orange-200',
                    iconColorText: 'warning--text',
                    title: 'jhon Commented on task',

                    time: '45 min ago'
                }
            ]
        }
    }
}
</script>
