<template>
    <v-row>
        <v-col cols="12">
            <base-card>
                <v-card-title>Colored</v-card-title>
                <v-card-text>
                    <v-chip class="ma-2">
                        Default
                    </v-chip>

                    <v-chip class="ma-2" color="primary">
                        Primary
                    </v-chip>

                    <v-chip class="ma-2" color="info">
                        Info
                    </v-chip>

                    <v-chip class="ma-2" color="red" text-color="white">
                        Red Chip
                    </v-chip>

                    <v-chip class="ma-2" color="green" text-color="white">
                        Green Chip
                    </v-chip>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card>
                <v-card-title>Icon</v-card-title>
                <v-card-text>
                    <v-chip class="ma-2" color="indigo" text-color="white">
                        <v-avatar left>
                            <v-icon>mdi-account-circle</v-icon>
                        </v-avatar>
                        Ranee
                    </v-chip>

                    <v-chip class="ma-2" color="orange" text-color="white">
                        Premium
                        <v-icon right>
                            mdi-star
                        </v-icon>
                    </v-chip>

                    <v-chip class="ma-2" color="primary" text-color="white">
                        1 Year
                        <v-icon right>
                            mdi-cake-variant
                        </v-icon>
                    </v-chip>

                    <v-chip class="ma-2" color="green" text-color="white">
                        <v-avatar left class="green darken-4">
                            1
                        </v-avatar>
                        Years
                    </v-chip>

                    <v-chip
                        class="ma-2"
                        close
                        color="teal"
                        text-color="white"
                        @click:close="close"
                    >
                        <v-avatar left>
                            <v-icon>mdi-checkbox-marked-circle</v-icon>
                        </v-avatar>
                        Confirmed
                    </v-chip>

                    <v-chip
                        class="ma-2"
                        close
                        color="teal"
                        text-color="white"
                        close-icon="mdi-delete"
                        @click:close="close"
                    >
                        <v-avatar left>
                            <v-icon>mdi-checkbox-marked-circle</v-icon>
                        </v-avatar>
                        Confirmed
                    </v-chip>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card>
                <v-card-title>Outlined</v-card-title>
                <v-card-text>
                    <v-chip class="ma-2" color="success" outlined>
                        <v-icon left>
                            mdi-server-plus
                        </v-icon>
                        Server Status
                    </v-chip>

                    <v-chip class="ma-2" color="primary" outlined pill>
                        User Account
                        <v-icon right>
                            mdi-account-outline
                        </v-icon>
                    </v-chip>

                    <v-chip class="ma-2" color="deep-purple accent-4" outlined>
                        <v-icon left>
                            mdi-wrench
                        </v-icon>
                        Update Settings
                    </v-chip>

                    <v-chip class="ma-2" close color="indigo darken-3" outlined>
                        <v-icon left>
                            mdi-fire
                        </v-icon>
                        New Posts Available
                    </v-chip>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card>
                <v-card-title>Label</v-card-title>
                <v-card-text>
                    <v-chip class="ma-2" label>
                        Label
                    </v-chip>

                    <v-chip
                        class="ma-2"
                        color="danger"
                        label
                        text-color="white"
                    >
                        <v-icon left>
                            mdi-label
                        </v-icon>
                        Tags
                    </v-chip>

                    <v-chip class="ma-2" color="primary" label>
                        <v-icon left>
                            mdi-account-circle-outline
                        </v-icon>
                        John Leider
                    </v-chip>

                    <v-chip
                        class="ma-2"
                        close
                        color="cyan"
                        label
                        text-color="white"
                    >
                        <v-icon left>
                            mdi-twitter
                        </v-icon>
                        New Tweets
                    </v-chip>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card>
                <v-card-title>Sizes</v-card-title>
                <v-card-text>
                    <v-chip class="ma-2" x-small>
                        x-small chip
                    </v-chip>

                    <v-chip class="ma-2" small>
                        small chip
                    </v-chip>

                    <v-chip class="ma-2">
                        Default
                    </v-chip>

                    <v-chip class="ma-2" large>
                        large chip
                    </v-chip>

                    <v-chip class="ma-2" x-large>
                        x-large chip
                    </v-chip>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card>
                <v-card-title>In selects</v-card-title>
                <v-card-text>
                    <v-combobox
                        v-model="chips"
                        :items="inSelectItems"
                        chips
                        clearable
                        label="Your favorite hobbies"
                        multiple
                        solo
                    >
                        <template
                            v-slot:selection="{attrs, item, select, selected}"
                        >
                            <v-chip
                                v-bind="attrs"
                                :input-value="selected"
                                close
                                @click="select"
                                @click:close="remove(item)"
                            >
                                <strong>{{ item }}</strong
                                >&nbsp;
                                <span>(interest)</span>
                            </v-chip>
                        </template>
                    </v-combobox>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Expandable</v-card-title>
                <v-card-text>
                    <!-- <v-system-bar></v-system-bar> -->

                    <v-row class="px-6 py-3" align="center">
                        <span class="mr-4">To</span>
                        <v-menu
                            v-model="menu"
                            bottom
                            right
                            transition="scale-transition"
                            origin="top left"
                        >
                            <template v-slot:activator="{on}">
                                <v-chip pill v-on="on">
                                    <v-avatar left>
                                        <v-img
                                            src="https://cdn.vuetifyjs.com/images/john.png"
                                        ></v-img>
                                    </v-avatar>
                                    John Leider
                                </v-chip>
                            </template>
                            <v-card width="300">
                                <v-list dark>
                                    <v-list-item>
                                        <v-list-item-avatar>
                                            <v-img
                                                src="https://cdn.vuetifyjs.com/images/john.png"
                                            ></v-img>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title
                                                >John Leider</v-list-item-title
                                            >
                                            <v-list-item-subtitle
                                                >john@vuetifyjs.com</v-list-item-subtitle
                                            >
                                        </v-list-item-content>
                                        <v-list-item-action>
                                            <v-btn icon @click="menu = false">
                                                <v-icon
                                                    >mdi-close-circle</v-icon
                                                >
                                            </v-btn>
                                        </v-list-item-action>
                                    </v-list-item>
                                </v-list>
                                <v-list>
                                    <v-list-item @click="() => {}">
                                        <v-list-item-action>
                                            <v-icon>mdi-briefcase</v-icon>
                                        </v-list-item-action>
                                        <v-list-item-subtitle
                                            >john@gmail.com</v-list-item-subtitle
                                        >
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </v-menu>
                    </v-row>

                    <v-divider></v-divider>

                    <v-text-field
                        full-width
                        value="Re: Vacation Request"
                        label="Subject"
                        single-line
                    ></v-text-field>

                    <v-textarea
                        full-width
                        single-line
                        label="Message"
                    ></v-textarea>
                </v-card-text>
            </base-card>
        </v-col>

        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Custom Lists</v-card-title>
                <v-card-text>
                    <v-toolbar flat color="transparent">
                        <v-app-bar-nav-icon />
                        <v-toolbar-title>Photo Info</v-toolbar-title>
                        <v-spacer />
                        <v-btn icon @click="$refs.search.focus()">
                            <v-icon>mdi-magnify</v-icon>
                        </v-btn>
                    </v-toolbar>

                    <v-container class="py-0">
                        <v-row align="center" justify="start">
                            <v-col
                                v-for="(selection, i) in selections"
                                :key="selection.text"
                                class="shrink"
                            >
                                <v-chip
                                    :disabled="loading"
                                    close
                                    @click:close="selected.splice(i, 1)"
                                >
                                    <v-icon left v-text="selection.icon" />
                                    {{ selection.text }}
                                </v-chip>
                            </v-col>

                            <v-col v-if="!allSelected" cols="12">
                                <v-text-field
                                    ref="search"
                                    v-model="search"
                                    full-width
                                    hide-details
                                    label="Search"
                                    single-line
                                />
                            </v-col>
                        </v-row>
                    </v-container>

                    <v-divider v-if="!allSelected" />

                    <v-list>
                        <template v-for="item in categories">
                            <v-list-item
                                v-if="!selected.includes(item)"
                                :key="item.text"
                                :disabled="loading"
                                @click="selected.push(item)"
                            >
                                <v-list-item-avatar>
                                    <v-icon
                                        :disabled="loading"
                                        v-text="item.icon"
                                    />
                                </v-list-item-avatar>
                                <v-list-item-title v-text="item.text" />
                            </v-list-item>
                        </template>
                    </v-list>

                    <v-divider />

                    <v-card-actions>
                        <v-spacer />
                        <v-btn
                            :disabled="!selected.length"
                            :loading="loading"
                            color="purple"
                            text
                            @click="next"
                        >
                            Next
                        </v-btn>
                    </v-card-actions>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Action Chips</v-card-title>
                <v-img
                    src="@/assets/images/gallery/sq-6.jpg"
                    :aspect-ratio="16 / 9"
                />
                <v-card-title>
                    <div class="display-1 mb-2">
                        Welcome Home...
                    </div>
                </v-card-title>
                <v-row class="px-4 grey--text" align="center">
                    <v-avatar size="24" class="mx-2">
                        <v-icon>mdi-weather-lightning-rainy</v-icon>
                    </v-avatar>

                    <span>81° / 62°</span>
                </v-row>

                <v-divider class="mt-6 mx-4" />

                <v-card-text>
                    <v-chip class="mr-2" @click="lights">
                        <v-icon left>
                            mdi-brightness-5
                        </v-icon>
                        Turn on Lights
                    </v-chip>
                    <v-chip class="mr-2" @click="alarm">
                        <v-icon left>
                            mdi-alarm-check
                        </v-icon>
                        Set alarm
                    </v-chip>
                    <v-chip @click="blinds">
                        <v-icon left>
                            mdi-blinds
                        </v-icon>
                        Close blinds
                    </v-chip>
                </v-card-text>
            </base-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Chips'
    },
    data() {
        return {
            // custom lists
            menu: false,
            chips: [
                'Programming',
                'Playing video games',
                'Watching movies',
                'Sleeping'
            ],
            inSelectItems: ['Streaming', 'Eating'],
            items: [
                {
                    text: 'Nature',
                    icon: 'mdi-nature'
                },
                {
                    text: 'Nightlife',
                    icon: 'mdi-glass-wine'
                },
                {
                    text: 'November',
                    icon: 'mdi-calendar-range'
                },
                {
                    text: 'Portland',
                    icon: 'mdi-map-marker'
                },
                {
                    text: 'Biking',
                    icon: 'mdi-bike'
                }
            ],
            loading: false,
            search: '',
            selected: []
        }
    },
    // custom lists
    computed: {
        allSelected() {
            return this.selected.length === this.items.length
        },
        categories() {
            const search = this.search.toLowerCase()

            if (!search) return this.items

            return this.items.filter((item) => {
                const text = item.text.toLowerCase()

                return text.indexOf(search) > -1
            })
        },
        selections() {
            const selections = []

            for (const selection of this.selected) {
                selections.push(selection)
            }

            return selections
        }
    },

    watch: {
        selected() {
            this.search = ''
        }
    },
    methods: {
        remove(item) {
            this.chips.splice(this.chips.indexOf(item), 1)
            this.chips = [...this.chips]
        },
        // icon
        close() {
            alert('Chip close clicked')
        },

        // action chips
        alarm() {
            alert('Turning on alarm...')
        },
        blinds() {
            alert('Toggling Blinds...')
        },
        lights() {
            alert('Toggling lights...')
        },
        // custom lists
        next() {
            this.loading = true

            setTimeout(() => {
                this.search = ''
                this.selected = []
                this.loading = false
            }, 2000)
        }
    }
}
</script>
