<template>
    <v-row>
        <v-col cols="12">
            <base-card>
                <v-card-title>
                    Example
                </v-card-title>
                <v-card-text>
                    <v-alert type="success">
                        I'm a success alert.
                    </v-alert>

                    <v-alert type="info">
                        I'm an info alert.
                    </v-alert>

                    <v-alert type="warning">
                        I'm a warning alert.
                    </v-alert>

                    <v-alert type="error">
                        I'm an error alert.
                    </v-alert>
                </v-card-text>
            </base-card>
        </v-col>
        <!-- border  -->
        <v-col cols="12">
            <base-card>
                <v-card-title>
                    Border
                </v-card-title>
                <v-card-text>
                    <v-alert border="top" color="red lighten-2" dark>
                        I'm an alert with a top border and red color
                    </v-alert>
                    <v-alert border="right" color="blue-grey" dark>
                        I'm an alert with a right border and blue-grey color
                    </v-alert>
                    <v-alert border="bottom" color="danger darken-1" dark>
                        I'm an alert with a bottom border and danger color
                    </v-alert>
                    <v-alert border="left" color="indigo" dark>
                        I'm an alert with a border left type info
                    </v-alert>
                </v-card-text>
            </base-card>
        </v-col>
        <!-- Colored Border  -->
        <v-col cols="12">
            <base-card>
                <v-card-title>
                    Colored Border
                </v-card-title>
                <v-card-text>
                    <v-alert
                        border="left"
                        colored-border
                        color="deep-purple accent-4"
                        elevation="2"
                    >
                        Aliquam eu nunc. Fusce commodo aliquam arcu. In
                        consectetuer turpis ut velit. Nulla facilisi.. Morbi
                        mollis tellus ac sapien. Fusce vel dui. Praesent ut
                        ligula non mi varius sagittis. Vivamus consectetuer
                        hendrerit lacus. Suspendisse enim turpis, dictum sed,
                        iaculis a, condimentum nec, nisi.
                    </v-alert>
                    <v-alert
                        border="top"
                        colored-border
                        type="info"
                        elevation="2"
                    >
                        Vestibulum ullamcorper mauris at ligula. Nam pretium
                        turpis et arcu. Ut varius tincidunt libero. Curabitur
                        ligula sapien, tincidunt non, euismod vitae, posuere
                        imperdiet, leo. Morbi nec metus.
                    </v-alert>
                    <v-alert
                        border="bottom"
                        colored-border
                        type="warning"
                        elevation="2"
                    >
                        Sed in libero ut nibh placerat accumsan. Phasellus leo
                        dolor, tempus non, auctor et, hendrerit quis, nisi.
                        Phasellus leo dolor, tempus non, auctor et, hendrerit
                        quis, nisi. Sed consequat, leo eget bibendum sodales,
                        augue velit cursus nunc, quis gravida magna mi a libero.
                        Donec elit libero, sodales nec, volutpat a, suscipit
                        non, turpis.
                    </v-alert>
                    <v-alert
                        border="right"
                        colored-border
                        type="error"
                        elevation="2"
                    >
                        Fusce commodo aliquam arcu. Pellentesque posuere.
                        Phasellus tempus. Donec posuere vulputate arcu.
                    </v-alert>
                </v-card-text>
            </base-card>
        </v-col>
        <!-- Dense  -->
        <v-col cols="12">
            <base-card>
                <v-card-title>
                    Dense
                </v-card-title>
                <v-card-text>
                    <v-alert dense type="info">
                        I'm a dense alert with a <strong>type</strong> of info
                    </v-alert>
                    <v-alert dense text type="success">
                        I'm a dense alert with the <strong>text</strong> prop
                        and a <strong>type</strong> of success
                    </v-alert>
                    <v-alert dense border="left" type="warning">
                        I'm a dense alert with the <strong>border</strong> prop
                        and a <strong>type</strong> of warning
                    </v-alert>
                    <v-alert dense outlined type="error">
                        I'm a dense alert with the
                        <strong>outlined</strong> prop and a
                        <strong>type</strong> of error
                    </v-alert>
                </v-card-text>
            </base-card>
        </v-col>
        <!-- Outlined  -->
        <v-col cols="12">
            <base-card>
                <v-card-title>
                    Outlined
                </v-card-title>
                <v-card-text>
                    <v-alert outlined color="purple">
                        <div class="title">
                            Lorem Ipsum
                        </div>
                        <div>
                            Maecenas ullamcorper, dui et placerat feugiat, eros
                            pede varius nisi, condimentum viverra felis nunc et
                            lorem. Duis vel nibh at velit scelerisque suscipit.
                            Praesent blandit laoreet nibh. Aenean posuere,
                            tortor sed cursus feugiat, nunc augue blandit nunc,
                            eu sollicitudin urna dolor sagittis lacus. Etiam
                            sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum
                            laoreet sapien, quis venenatis ante odio sit amet
                            eros.
                        </div>
                    </v-alert>
                    <v-alert outlined type="success" text>
                        Praesent venenatis metus at tortor pulvinar varius.
                        Aenean commodo ligula eget dolor. Praesent ac massa at
                        ligula laoreet iaculis. Vestibulum ullamcorper mauris at
                        ligula.
                    </v-alert>
                    <v-alert outlined type="warning" prominent border="left">
                        Duis arcu tortor, suscipit eget, imperdiet nec,
                        imperdiet iaculis, ipsum. Suspendisse non nisl sit amet
                        velit hendrerit rutrum. Nullam vel sem. Pellentesque
                        dapibus hendrerit tortor.
                    </v-alert>
                </v-card-text>
            </base-card>
        </v-col>
        <!-- Outlined  -->
        <v-col cols="12">
            <base-card>
                <v-card-title>
                    Transition
                </v-card-title>
                <v-card-text>
                    <div class="text-center mb-4">
                        <v-btn color="primary" @click="alert = !alert">
                            Toggle
                        </v-btn>
                    </div>
                    <v-alert
                        :value="alert"
                        color="danger"
                        dark
                        border="top"
                        icon="mdi-home"
                        transition="scale-transition"
                    >
                        Phasellus tempus. Fusce ac felis sit amet ligula
                        pharetra condimentum. In dui magna, posuere eget,
                        vestibulum et, tempor auctor, justo. Pellentesque
                        posuere. Curabitur ligula sapien, tincidunt non, euismod
                        vitae, posuere imperdiet, leo. Phasellus nec sem in
                        justo pellentesque facilisis. Phasellus magna. Cras
                        risus ipsum, faucibus ut, ullamcorper id, varius ac,
                        leo. In hac habitasse platea dictumst. Praesent turpis.
                    </v-alert>
                </v-card-text>
            </base-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Alerts'
    },
    data() {
        return {
            alert: true
        }
    }
}
</script>
