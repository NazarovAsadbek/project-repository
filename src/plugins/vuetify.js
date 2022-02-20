// Vuetify Documentation https://vuetifyjs.com

import Vue from "vue";
import Vuetify from "vuetify/lib";
import { themePreset } from "../../src/themeConfig";

Vue.use(Vuetify);

export default new Vuetify({
  theme: themePreset.theme,
  rtl: themePreset.rtl
});
