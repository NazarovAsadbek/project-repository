<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>Usage</v-card-title>
        <v-card-text>
          <v-file-input  label="File input"></v-file-input>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>Multiple</v-card-title>
        <v-card-text>
          <v-file-input multiple label="File input"></v-file-input>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>Accept Formats</v-card-title>
        <v-card-text>
          <v-file-input accept="image/*" label="File input"></v-file-input>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>Size Displaying</v-card-title>
        <v-card-text>
          <v-file-input show-size label="File input"></v-file-input>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
    >
      <base-card>
        <v-card-title>With Chips</v-card-title>
        <v-card-text>
          <v-file-input chips multiple label="File input w/ chips"></v-file-input>
          <v-file-input small-chips multiple label="File input w/ small chips"></v-file-input>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>Counter</v-card-title>
        <v-card-text>
          <v-file-input show-size counter multiple label="File input"></v-file-input>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>Custom Icons</v-card-title>
        <v-card-text>
          <v-file-input
            label="File input"
            filled
            prepend-icon="mdi-camera"
          ></v-file-input>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <base-card class="h-full">
        <v-card-title>Dense</v-card-title>
        <v-card-text>
          <v-file-input label="File input" outlined dense></v-file-input>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>Selection Slot </v-card-title>
        <v-card-text>
          <v-file-input
            v-model="files"
            placeholder="Upload your documents"
            label="File input"
            multiple
            prepend-icon="mdi-paperclip"
          >
            <template v-slot:selection="{ text }">
              <v-chip
                small
                label
                color="primary"
              >
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <base-card class="h-full">
        <v-card-title>Validation</v-card-title>
        <v-card-text>
          <v-file-input
            :rules="rules"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Pick an avatar"
            prepend-icon="mdi-camera"
            label="Avatar"
          ></v-file-input>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>Complex Selection Slot</v-card-title>
        <v-card-text>
          <v-file-input
            v-model="files"
            color="deep-purple accent-4"
            counter
            label="File input"
            multiple
            placeholder="Select your files"
            prepend-icon="mdi-paperclip"
            outlined
            :show-size="1000"
          >
            <template v-slot:selection="{ index, text }">
              <v-chip
                v-if="index < 2"
                color="deep-purple accent-4"
                dark
                label
                small
              >
                {{ text }}
              </v-chip>

              <span
                v-else-if="index === 2"
                class="overline grey--text text--darken-3 mx-2"
              >
                +{{ files.length - 2 }} File(s)
              </span>
            </template>
          </v-file-input>
        </v-card-text>
      </base-card>
    </v-col>
  </v-row>
</template>
<script>
  export default {
   
    metaInfo: {
      // title will be injected into parent titleTemplate
      title: "FileInputs",
    },
    data: () => ({
      files: [],
      rules: [
        value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ],
    }),
  }
</script>
