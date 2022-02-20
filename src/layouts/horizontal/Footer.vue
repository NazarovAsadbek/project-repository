<template>
  <v-footer
    tile
    flat
    
    class="font-weight-medium shadow-md -mt-20"
    :color="$vuetify.theme.dark ? 'dark' : 'primary darken-4'"
    :dark="$vuetify.theme.dark"
    :inset="true"
  >
    <v-container class="">
      <v-row class="mt-20">
        <v-col
          cols="12"
          md="4"
        >
          <p class="body-2 white--text"> About Us</p>
          <p class="body-1 grey--text text--lighten-2" >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
            of type and scrambled it to make a type specimen book.</p>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <p class="body-2 white--text"> Site Links</p>
          <div class="mb-2">
            <a href="#" class="grey--text text--lighten-2">Help Center</a>
          </div>
          <div class="mb-2">
            <a href="#" class="grey--text text--lighten-2">Terms & Conditions</a>
          </div>
          <div class="mb-2">
            <a href="#" class="grey--text text--lighten-2">Privacy & Policy</a>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <p class="body-2 white--text"> Contact Us</p>
          <v-text-field
            color="white"
            dark
            label="Your Email...."
          ></v-text-field>
          <p class="body-2 white--text"> Contact Us</p>
          <div>
            <v-btn class="mx-2" fab dark x-small color="#ec412c">
              <v-icon small dark>mdi-google</v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark x-small color="#3765c9">
              <v-icon small dark>mdi-facebook</v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark x-small color="#039ff5">
              <v-icon small dark>mdi-twitter</v-icon>
            </v-btn>
          </div>
        </v-col>
        
      </v-row>
      <v-row class="mt-4">
        <v-col
          cols="12"
          md="6"
        >
          <p class="grey--text text--lighten-2">Design & developed by <a class="grey--text text--lighten-2 font-weight-medium" href="http://ui-lib.com/">UI Lib </a> with  <v-icon small color="danger">mdi-heart</v-icon></p>
        </v-col>

        <v-col
          cols="12"
          md="6"
          class="md:text-right sm:text-left"
        >
          
            <v-btn dark text small>About</v-btn>
          
          
            <v-btn dark text small>Blog</v-btn>
          
          
            <v-btn dark text small>Contact Us</v-btn>
          
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
