<template>
 <v-row>
    <v-col cols="12" sm="6" md="6">
      <base-card>
        <v-card-text>
          <v-badge
          bordered
          color="success"
          icon="mdi-lock"
          overlap
        >
          <v-btn
            class="white--text"
            color="primary"
            depressed
          >
            Lock Account
          </v-btn>
        </v-badge>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col cols="12" sm="6" md="6">
      <base-card>
        <v-card-text>
          <v-badge
            bordered
            bottom
            color="deep-purple accent-4"
            dot
            offset-x="10"
            offset-y="10"
            class="mr-3"
          >
            <v-avatar size="40">
              <v-img src="@/assets/images/faces/2.jpg"></v-img>
            </v-avatar>
          </v-badge>
          <v-badge
            avatar
            bordered
            overlap
          >
            <template v-slot:badge>
              <v-avatar>
                <v-icon>mdi-vuejs</v-icon>
              </v-avatar>
            </template>

            <v-avatar size="40">
              <v-img src="@/assets/images/faces/1.jpg"></v-img>
            </v-avatar>
          </v-badge>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col cols="12" sm="12" md="6">
      <base-card>
        <v-card-text>
          <div>
            <v-btn
              class="mx-1"
              color="primary"
              @click="messages++"
            >
              Send Message
            </v-btn>

            <v-btn
              class="mx-1"
              color="error"
              @click="messages = 0"
            >
              Clear Notifications
            </v-btn>
            <v-badge
              :content="messages"
              :value="messages"
              color="green"
              overlap
            >
              <v-icon large>
                mdi-vuetify
              </v-icon>
            </v-badge>
          </div>

          
        </v-card-text>
      </base-card>
    </v-col>
    <v-col cols="12" sm="6" md="6">
      <base-card>
        <v-card-text>
          <v-badge
            :value="hover"
            color="deep-purple accent-4"
            content="9999+"
            left
            transition="slide-x-transition"
          >
            <v-hover v-model="hover">
              <v-icon
                color="grey lighten-1"
                large
              >
                mdi-account
              </v-icon>
            </v-hover>
          </v-badge>
        </v-card-text>
      </base-card>
    </v-col>
 </v-row>
</template>

<script>
export default {
 
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Badge",
  },
  data() {
    return {
      messages: 0,
      show: false,
      hover: false,
    };
  }
};
</script>
