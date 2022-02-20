<template>
  <v-row>
    <v-col
      cols="12"
    >
      <base-card>
        <v-card-title>Playground</v-card-title>
        <v-card-text>
          <v-sparkline
            :value="value"
            :gradient="gradient"
            :smooth="radius || false"
            :padding="padding"
            :line-width="lineWidth"
            :stroke-linecap="lineCap"
            :gradient-direction="gradientDirection"
            :fill="fill"
            :type="type"
            :auto-line-width="autoLineWidth"
            auto-draw
            :show-labels="showLabels"
            :label-size="labelSize"
          />

          <v-divider />

          <v-row>
            <v-col cols="12">
              <v-row
                class="fill-height"
                align="center"
              >
                <v-subheader class="pl-0">
                  Type
                </v-subheader>
                <v-btn-toggle
                  v-model="type"
                  mandatory
                >
                  <v-btn
                    small
                    text
                    value="bar"
                  >
                    bar
                  </v-btn>
                  <v-btn
                    small
                    text
                    value="trend"
                  >
                    trend
                  </v-btn>
                </v-btn-toggle>
              </v-row>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-row
                class="fill-height"
                align="center"
              >
                <v-subheader class="pl-0">
                  Gradient
                </v-subheader>
                <v-item-group
                  v-model="gradient"
                  mandatory
                >
                  <v-row>
                    <v-item
                      v-for="(gradient, i) in gradients"
                      :key="i"
                      v-slot:default="{ active, toggle }"
                      :value="gradient"
                    >
                      <v-card
                        :style="{
                          background: gradient.length > 1
                            ? `linear-gradient(0deg, ${gradient})`
                            : gradient[0],
                          border: '2px solid',
                          borderColor: active ? '#222' : 'white'
                        }"
                        width="30"
                        height="30"
                        class="mr-2"
                        @click.native="toggle"
                      />
                    </v-item>
                  </v-row>
                </v-item-group>
              </v-row>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-row
                class="fill-height"
                align="center"
              >
                <v-subheader class="pl-0">
                  Gradient direction
                </v-subheader>
                <v-btn-toggle
                  v-model="gradientDirection"
                  mandatory
                >
                  <v-btn
                    small
                    text
                    value="top"
                  >
                    top
                  </v-btn>
                  <v-btn
                    small
                    text
                    value="right"
                  >
                    right
                  </v-btn>
                  <v-btn
                    small
                    text
                    value="left"
                  >
                    left
                  </v-btn>
                  <v-btn
                    small
                    text
                    value="bottom"
                  >
                    bottom
                  </v-btn>
                </v-btn-toggle>
              </v-row>
            </v-col>

            <v-col cols="12">
              <v-slider
                v-model="lineWidth"
                label="Line width"
                min="0.1"
                max="10"
                step="0.1"
                thumb-label
                :disabled="autoLineWidth"
              />
            </v-col>

            <v-col cols="12">
              <v-slider
                v-model="radius"
                label="Radius"
                min="0"
                max="16"
                thumb-label
              />
            </v-col>

            <v-col cols="12">
              <v-slider
                v-model="padding"
                label="Padding"
                min="0"
                max="16"
                thumb-label
              />
            </v-col>

            <v-col cols="6">
              <v-row
                class="fill-height"
                align="center"
              >
                <v-subheader class="pl-0">
                  Linecap
                </v-subheader>
                <v-btn-toggle
                  v-model="lineCap"
                  mandatory
                  :disabled="type !== 'trend'"
                >
                  <v-btn
                    small
                    text
                    value="butt"
                  >
                    butt
                  </v-btn>
                  <v-btn
                    small
                    text
                    value="round"
                  >
                    round
                  </v-btn>
                  <v-btn
                    small
                    text
                    value="square"
                  >
                    square
                  </v-btn>
                </v-btn-toggle>
              </v-row>
            </v-col>

            <v-col cols="6">
              <v-row justify="space-around">
                <v-switch
                  v-model="showLabels"
                  label="Show labels"
                />
                <v-switch
                  v-model="fill"
                  label="Fill"
                  :disabled="type !== 'trend'"
                />
                <v-switch
                  v-model="autoLineWidth"
                  label="Auto-line-width"
                  :disabled="type !== 'bar'"
                />
              </v-row>
            </v-col>

            <v-col
              v-if="showLabels"
              cols="12"
            >
              <v-slider
                v-model="labelSize"
                label="Label size"
                min="1"
                max="20"
                thumb-label
              />
            </v-col>
          </v-row>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>Custom Labels</v-card-title>
        <v-card-text>
          <v-card
            class="mx-auto text-center"
            color="primary"
            dark
            max-width="600"
          >
            <v-card-text>
              <v-sheet color="rgba(0, 0, 0, .12)">
                <v-sparkline
                  :value="value2"
                  color="rgba(255, 255, 255, .7)"
                  height="100"
                  padding="24"
                  stroke-linecap="round"
                  smooth
                >
                  <template v-slot:label="item">
                    ${{ item.value }}
                  </template>
                </v-sparkline>
              </v-sheet>
            </v-card-text>

            <v-card-text>
              <div class="display-1 font-weight-thin">
                Sales Last 24h
              </div>
            </v-card-text>

            <v-divider />

            <v-card-actions class="justify-center">
              <v-btn
                block
                text
              >
                Go to Report
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>Dashboard Card</v-card-title>
        <v-card-text>
          <v-card
            class="mt-4 mx-auto"
            max-width="400"
          >
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="cyan"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
              <v-sparkline
                :labels="labels"
                :value="value3"
                color="white"
                line-width="2"
                padding="16"
              />
            </v-sheet>

            <v-card-text class="pt-0">
              <div class="title font-weight-light mb-2">
                User Registrations
              </div>
              <div class="subheading font-weight-light grey--text">
                Last Campaign Performance
              </div>
              <v-divider class="my-2" />
              <v-icon
                class="mr-2"
                small
              >
                mdi-clock
              </v-icon>
              <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
            </v-card-text>
          </v-card>
        </v-card-text>
      </base-card>
    </v-col>
  </v-row>
</template>
<script>
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

  export default {
  
    metaInfo: {
      // title will be injected into parent titleTemplate
      title: "Sparklines",
    },
    data: () => ({
      showLabels: false,
      lineWidth: 2,
      labelSize: 7,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, -4, -10, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
      value2: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
      ],
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ],
      value3: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240,
      ],
    }),
  }
</script>
<style>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>
