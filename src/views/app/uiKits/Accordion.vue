<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <!-- basic  -->
      <base-card>
        <v-card-title>
          Basic
        </v-card-title>
        <v-card-text>
          <v-expansion-panels
            v-model="panel"
            multiple
          >
            <v-expansion-panel>
              <v-expansion-panel-header>Panel 1</v-expansion-panel-header>
              <v-expansion-panel-content>
                Some content
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>Panel 2</v-expansion-panel-header>
              <v-expansion-panel-content>
                Some content
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>Panel 3</v-expansion-panel-header>
              <v-expansion-panel-content>
                Some content
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
      </base-card>
    </v-col>
    <!-- Popout  -->
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>
          Popout
        </v-card-title>
        <v-card-text>
          <v-expansion-panels popout>
            <v-expansion-panel
              v-for="(item,i) in 5"
              :key="i"
            >
              <v-expansion-panel-header>Item</v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>Accordion</v-card-title>
        <v-card-text>
          <v-expansion-panels accordion>
            <v-expansion-panel
              v-for="(item,i) in 5"
              :key="i"
            >
              <v-expansion-panel-header>Item</v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
      </base-card>
    </v-col>
    <!-- focusable -->
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>Focusable</v-card-title>
        <v-card-text>
          <v-expansion-panels focusable>
            <v-expansion-panel
              v-for="(item,i) in 5"
              :key="i"
            >
              <v-expansion-panel-header>Item</v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
      </base-card>
    </v-col>
    <!-- custom icon -->
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>Custom Icon</v-card-title>
        <v-card-text>
          <v-expansion-panels class="mb-6">
            <v-expansion-panel
              v-for="(item,i) in 5"
              :key="i"
            >
              <v-expansion-panel-header expand-icon="mdi-chevron-down-circle-outline">
                Item
              </v-expansion-panel-header>
              <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Item
                <template v-slot:actions>
                  <v-icon color="primary">
                    $expand
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header disable-icon-rotate>
                Item
                <template v-slot:actions>
                  <v-icon color="teal">
                    mdi-check
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header disable-icon-rotate>
                Item
                <template v-slot:actions>
                  <v-icon color="error">
                    mdi-alert-circle
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
      </base-card>
    </v-col>
    <!-- Advanced -->
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>Advanced</v-card-title>
        <v-card-text>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <template v-slot:default="{ open }">
                  <v-row no-gutters>
                    <v-col cols="4">
                      Trip name
                    </v-col>
                    <v-col
                      cols="8"
                      class="text--secondary"
                    >
                      <v-fade-transition leave-absolute>
                        <span
                          v-if="open"
                          key="0"
                        >
                          Enter a name for the trip
                        </span>
                        <span
                          v-else
                          key="1"
                        >
                          {{ trip.name }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-text-field
                  v-model="trip.name"
                  placeholder="Caribbean Cruise"
                />
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header v-slot="{ open }">
                <v-row no-gutters>
                  <v-col cols="4">
                    Location
                  </v-col>
                  <v-col
                    cols="8"
                    class="text--secondary"
                  >
                    <v-fade-transition leave-absolute>
                      <span
                        v-if="open"
                        key="0"
                      >
                        Select trip destination
                      </span>
                      <span
                        v-else
                        key="1"
                      >
                        {{ trip.location }}
                      </span>
                    </v-fade-transition>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row no-gutters>
                  <v-spacer />
                  <v-col cols="5">
                    <v-select
                      v-model="trip.location"
                      :items="locations"
                      chips
                      flat
                      solo
                    />
                  </v-col>

                  <v-divider
                    vertical
                    class="mx-4"
                  />

                  <v-col cols="3">
                    Select your destination of choice
                    <br>
                    <a href="javascript:void(0)">Learn more</a>
                  </v-col>
                </v-row>

                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    text
                    color="secondary"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header v-slot="{ open }">
                <v-row no-gutters>
                  <v-col cols="4">
                    Start and end dates
                  </v-col>
                  <v-col
                    cols="8"
                    class="text--secondary"
                  >
                    <v-fade-transition leave-absolute>
                      <span v-if="open">When do you want to travel?</span>
                      <v-row
                        v-else
                        no-gutters
                        style="width: 100%"
                      >
                        <v-col cols="6">
                          Start date: {{ trip.start || 'Not set' }}
                        </v-col>
                        <v-col cols="6">
                          End date: {{ trip.end || 'Not set' }}
                        </v-col>
                      </v-row>
                    </v-fade-transition>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row
                  justify="space-around"
                  no-gutters
                >
                  <v-col cols="3">
                    <v-menu
                      ref="startMenu"
                      :close-on-content-click="false"
                      :return-value.sync="trip.start"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="trip.start"
                          label="Start date"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-on="on"
                        />
                      </template>
                      <v-date-picker
                        v-model="date"
                        no-title
                        scrollable
                      >
                        <v-spacer />
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.startMenu.isActive = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.startMenu.save(date)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>

                  <v-col cols="3">
                    <v-menu
                      ref="endMenu"
                      :close-on-content-click="false"
                      :return-value.sync="trip.end"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="trip.end"
                          label="End date"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-on="on"
                        />
                      </template>
                      <v-date-picker
                        v-model="date"
                        no-title
                        scrollable
                      >
                        <v-spacer />
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.endMenu.isActive = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.endMenu.save(date)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
      </base-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    
    metaInfo: {
      // title will be injected into parent titleTemplate
      title: "Accordion",
    },
    data () {
      return {
        alert: true,
        panel: [0],
        date: null,
        trip: {
          name: '',
          location: null,
          start: null,
          end: null,
        },
        locations: ['Australia', 'Barbados', 'Chile', 'Denmark', 'Ecuador', 'France'],
      }
    },
  }
</script>
