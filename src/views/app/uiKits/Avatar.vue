<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <base-card class="h-full">
        <v-card-title>
          Size
        </v-card-title>
        <v-card-text>
          <v-row justify="space-around">
            <v-avatar
              color="indigo"
              size="36"
            >
              <span class="white--text headline">36</span>
            </v-avatar>

            <v-avatar
              color="teal"
              size="48"
            >
              <span class="white--text headline">48</span>
            </v-avatar>

            <v-avatar
              color="orange"
              size="62"
            >
              <span class="white--text headline">62</span>
            </v-avatar>
          </v-row>
        </v-card-text>
      </base-card>
    </v-col>
    <!-- tile  -->
    <v-col
      cols="12"
      md="6"
    >
      <base-card class="h-full">
        <v-card-title>
          Tile
        </v-card-title>
        <v-card-text>
          <div class="text-center">
            <v-avatar
              tile
              color="blue"
            >
              <v-icon dark>
                mdi-alarm
              </v-icon>
            </v-avatar>
          </div>
        </v-card-text>
      </base-card>
    </v-col>
    <!-- Default Slot  -->
    <v-col
      cols="12"
      md="12"
    >
      <base-card class="h-full">
        <v-card-title>
          Default Slot
        </v-card-title>
        <v-card-text>
          <v-row justify="space-around">
            <v-avatar color="indigo">
              <v-icon dark>
                mdi-account-circle
              </v-icon>
            </v-avatar>

            <v-avatar>
              <img
                src="@/assets/images/faces/2.jpg"
                alt="John"
              >
            </v-avatar>

            <v-avatar color="red">
              <span class="white--text headline">CJ</span>
            </v-avatar>
          </v-row>
        </v-card-text>
      </base-card>
    </v-col>
    <!-- Advanced usage  -->
    <v-col md="12">
      <base-card class="h-full">
        <v-card-title>
          Advanced usage
        </v-card-title>
        <v-card-text>
          <v-row justify="center">
            <v-subheader>Today</v-subheader>

            <v-expansion-panels popout>
              <v-expansion-panel
                v-for="(message, i) in messages"
                :key="i"
                hide-actions
              >
                <v-expansion-panel-header>
                  <v-row
                    align="center"
                    class="spacer"
                    no-gutters
                  >
                    <v-col
                      cols="4"
                      sm="2"
                      md="1"
                    >
                      <v-avatar
                        size="36px"
                      >
                        <img
                          v-if="message.avatar"
                          alt="Avatar"
                          src="@/assets/images/faces/4.jpg"
                        >
                        <v-icon
                          v-else
                          :color="message.color"
                          v-text="message.icon"
                        />
                      </v-avatar>
                    </v-col>

                    <v-col
                      class="hidden-xs-only"
                      sm="5"
                      md="3"
                    >
                      <strong v-html="message.name" />
                      <span
                        v-if="message.total"
                        class="grey--text"
                      >
                        &nbsp;({{ message.total }})
                      </span>
                    </v-col>

                    <v-col
                      class="text-no-wrap"
                      cols="5"
                      sm="3"
                    >
                      <v-chip
                        v-if="message.new"
                        :color="`${message.color} lighten-4`"
                        class="ml-0 mr-2 black--text"
                        label
                        small
                      >
                        {{ message.new }} new
                      </v-chip>
                      <strong v-html="message.title" />
                    </v-col>

                    <v-col
                      v-if="message.excerpt"
                      class="grey--text text-truncate hidden-sm-and-down"
                    >
                      &mdash;
                      {{ message.excerpt }}
                    </v-col>
                  </v-row>
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                  <v-divider />
                  <v-card-text v-text="lorem" />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
        </v-card-text>
      </base-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    
    metaInfo: {
      // title will be injected into parent titleTemplate
      title: "Avatar",
    },
    data () {
      return {
        messages: [
          {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'John Leider',
            title: 'Welcome to Vuetify.js!',
            excerpt: 'Thank you for joining our community...',
          },
          {
            color: 'red',
            icon: 'mdi-account',
            name: 'Social',
            new: 1,
            total: 3,
            title: 'Twitter',
          },
          {
            color: 'teal',
            icon: 'mdi-tag',
            name: 'Promos',
            new: 2,
            total: 4,
            title: 'Shop your way',
            exceprt: 'New deals available, Join Today',
          },
        ],
        lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
      }
    },
  }
</script>
