<template>
  <v-row>
    <v-col>
      <base-card>
        <v-card-title>Usage</v-card-title>
        <v-card-text>
          <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step
                :complete="e1 > 1"
                step="1"
              >
                Name of step 1
              </v-stepper-step>

              <v-divider />

              <v-stepper-step
                :complete="e1 > 2"
                step="2"
              >
                Name of step 2
              </v-stepper-step>

              <v-divider />

              <v-stepper-step step="3">
                Name of step 3
              </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card
                  class="mb-12"
                  color="primary"
                  height="200px"
                />

                <v-btn
                  color="primary"
                  @click="e1 = 2"
                >
                  Continue
                </v-btn>

                <v-btn text>
                  Cancel
                </v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card
                  class="mb-12"
                  color="danger"
                  height="200px"
                />

                <v-btn
                  color="primary"
                  @click="e1 = 3"
                >
                  Continue
                </v-btn>

                <v-btn text>
                  Cancel
                </v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card
                  class="mb-12"
                  color="info"
                  height="200px"
                />

                <v-btn
                  color="primary"
                  @click="e1 = 1"
                >
                  Continue
                </v-btn>

                <v-btn text>
                  Cancel
                </v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
    >
      <base-card>
        <v-card-title>Editable Steps</v-card-title>
        <v-card-text>
          <v-stepper>
            <v-stepper-header>
              <v-stepper-step
                complete
                editable
                step="1"
              >
                Select campaign settings
              </v-stepper-step>

              <v-divider />

              <v-stepper-step
                complete
                step="2"
              >
                Create an ad group
              </v-stepper-step>

              <v-divider />

              <v-stepper-step
                step="3"
                editable
              >
                Create an ad
              </v-stepper-step>
            </v-stepper-header>
          </v-stepper>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
    >
      <base-card>
        <v-card-title>Vertical steppers</v-card-title>
        <v-card-text>
          <v-stepper
            v-model="e6"
            vertical
          >
            <v-stepper-step
              :complete="e6 > 1"
              step="1"
            >
              Select an app
              <small>Summarize if needed</small>
            </v-stepper-step>

            <v-stepper-content step="1">
              <v-card
                color="grey lighten-1"
                class="mb-12"
                height="200px"
              />
              <v-btn
                color="primary"
                @click="e6 = 2"
              >
                Continue
              </v-btn>
              <v-btn text>
                Cancel
              </v-btn>
            </v-stepper-content>

            <v-stepper-step
              :complete="e6 > 2"
              step="2"
            >
              Configure analytics for this app
            </v-stepper-step>

            <v-stepper-content step="2">
              <v-card
                color="grey lighten-1"
                class="mb-12"
                height="200px"
              />
              <v-btn
                color="primary"
                @click="e6 = 3"
              >
                Continue
              </v-btn>
              <v-btn text>
                Cancel
              </v-btn>
            </v-stepper-content>

            <v-stepper-step
              :complete="e6 > 3"
              step="3"
            >
              Select an ad format and name ad unit
            </v-stepper-step>

            <v-stepper-content step="3">
              <v-card
                color="grey lighten-1"
                class="mb-12"
                height="200px"
              />
              <v-btn
                color="primary"
                @click="e6 = 4"
              >
                Continue
              </v-btn>
              <v-btn text>
                Cancel
              </v-btn>
            </v-stepper-content>

            <v-stepper-step step="4">
              View setup instructions
            </v-stepper-step>
            <v-stepper-content step="4">
              <v-card
                color="grey lighten-1"
                class="mb-12"
                height="200px"
              />
              <v-btn
                color="primary"
                @click="e6 = 1"
              >
                Continue
              </v-btn>
              <v-btn text>
                Cancel
              </v-btn>
            </v-stepper-content>
          </v-stepper>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
    >
      <base-card>
        <v-card-title>Dynamic steps</v-card-title>
        <v-card-text>
          <div>
            <v-card class="mb-4">
              <v-card-text>
                <v-select
                  v-model="steps"
                  :items="[2, 3, 4, 5, 6]"
                  label="# of steps"
                />
              </v-card-text>
            </v-card>
            <v-stepper v-model="e1">
              <v-stepper-header>
                <template v-for="n in steps">
                  <v-stepper-step
                    :key="`${n}-step`"
                    :complete="e1 > n"
                    :step="n"
                    editable
                  >
                    Step {{ n }}
                  </v-stepper-step>

                  <v-divider
                    v-if="n !== steps"
                    :key="n"
                  />
                </template>
              </v-stepper-header>

              <v-stepper-items>
                <v-stepper-content
                  v-for="n in steps"
                  :key="`${n}-content`"
                  :step="n"
                >
                  <v-card
                    class="mb-12"
                    color="grey lighten-1"
                    height="200px"
                  />

                  <v-btn
                    color="primary"
                    @click="nextStep(n)"
                  >
                    Continue
                  </v-btn>

                  <v-btn text>
                    Cancel
                  </v-btn>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </div>
        </v-card-text>
      </base-card>
    </v-col>
  </v-row>
</template>
<script>
  export default {
  
    metaInfo: {
      // title will be injected into parent titleTemplate
      title: "Stepper",
    },
    data () {
      return {
        e1: 1,
        e6: 1,
        steps: 2,
      }
    },
    watch: {
      steps (val) {
        if (this.e1 > val) {
          this.e1 = val
        }
      },
    },

    methods: {
      nextStep (n) {
        if (n === this.steps) {
          this.e1 = 1
        } else {
          this.e1 = n + 1
        }
      },
    },
  }
</script>
