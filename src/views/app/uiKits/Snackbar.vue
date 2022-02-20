
<template>
  <v-row>
    <v-col
      cols="12"
      md="12"
    >
      <base-card>
        <v-card-title>Playground</v-card-title>
        <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col cols="12">
                <v-radio-group
                  v-model="color"
                  row
                >
                  <v-radio
                    v-for="(colorValue, i) in ['success', 'info', 'error', 'cyan darken-2']"
                    :key="i"
                    :color="colorValue"
                    :label="colorValue"
                    :value="colorValue"
                  />
                </v-radio-group>
              </v-col>
              <v-col
                cols="12"
                sm="3"
              >
                <v-checkbox
                  v-model="x"
                  label="Left"
                  value="left"
                />
              </v-col>

              <v-col
                cols="6"
                sm="3"
              >
                <v-checkbox
                  v-model="x"
                  label="Right"
                  value="right"
                />
              </v-col>

              <v-col
                cols="6"
                sm="3"
              >
                <v-checkbox
                  v-model="y"
                  label="Top"
                  value="top"
                />
              </v-col>

              <v-col
                cols="6"
                sm="3"
              >
                <v-checkbox
                  v-model="y"
                  label="Bottom"
                  value="bottom"
                />
              </v-col>

              <v-col
                cols="12"
                sm="3"
              >
                <v-checkbox
                  v-model="mode"
                  label="Multi-line (mobile)"
                  value="multi-line"
                />
              </v-col>

              <v-col
                cols="12"
                sm="3"
              >
                <v-checkbox
                  v-model="mode"
                  label="Vertical (mobile)"
                  value="vertical"
                />
              </v-col>

              <v-col
                cols="12"
                sm="4"
              >
                <v-text-field
                  v-model="text"
                  class="px-4"
                  label="Text"
                  type="text"
                />
              </v-col>

              <v-col
                cols="12"
                sm="4"
              >
                <v-text-field
                  v-model.number="timeout"
                  class="px-4"
                  label="Timeout"
                  type="number"
                />
              </v-col>
            </v-row>
          </v-container>
          <v-btn
            block
            color="primary"
            dark
            @click="snackbarPlay = true"
          >
            Show Snackbar
          </v-btn>
        </v-card-text>

        <v-snackbar
          v-model="snackbarPlay"
          :bottom="y === 'bottom'"
          :color="color"
          :left="x === 'left'"
          :multi-line="mode === 'multi-line'"
          :right="x === 'right'"
          :timeout="timeout"
          :top="y === 'top'"
          :vertical="mode === 'vertical'"
        >
          {{ textPlay }}

          <template v-slot:action="{ attrs }">
            <v-btn
              dark
              text
              v-bind="attrs"
              @click="snackbarPlay = false"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>Usage</v-card-title>
        <v-card-text>
          <v-btn
            dark
            color="primary"
            @click="snackbar = true"
          >
            Open Snackbar
          </v-btn>
          <v-snackbar
            v-model="snackbar"
          >
            {{ text }}

            <template v-slot:action="{ attrs }">
              <v-btn
                color="danger"
                text
                v-bind="attrs"
                @click="snackbar = false"
              >
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>Timeout</v-card-title>
        <v-card-text>
          <v-btn
            dark
            color="orange darken-2"
            @click="snackbar2 = true"
          >
            Open Snackbar
          </v-btn>

          <v-snackbar
            v-model="snackbar2"
            :timeout="timeout"
          >
            {{ text2 }}

            <template v-slot:action="{ attrs }">
              <v-btn
                color="blue"
                text
                v-bind="attrs"
                @click="snackbar2 = false"
              >
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </v-card-text>
      </base-card>
    </v-col>
  </v-row>
</template>
<script>
  export default {
   
    metaInfo: {
      // title will be injected into parent titleTemplate
      title: "Snackbar",
    },
    data: () => ({
      color: '',
      mode: '',
      x: null,
      y: 'top',
      textPlay: 'Hello, I\'m a Playground',
      snackbarPlay: false,
      snackbar: false,
      snackbar2: false,
      text: 'I\'m a snackbar.',
      text2: 'My timeout is set to 2000.',
      timeout: 2000,
    }),
  }
</script>
