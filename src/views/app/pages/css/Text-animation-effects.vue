<template>
  <div class="mainContent">
    <div class="pageBody">
      <div v-if="$vuetify.breakpoint.xl || $vuetify.breakpoint.lg || $vuetify.breakpoint.md">
        <v-text-field placeholder="Your name" v-model="guestFirstname" style="width: 30%;"/>
        <h2>
          <span style="--i:1;">W</span>
          <span style="--i:2;">e</span>
          <span style="--i:3;">l</span>
          <span style="--i:4;">c</span>
          <span style="--i:5;">o</span>
          <span style="--i:6;">m</span>
          <span style="--i:7;">e</span>
          <span style="--i:8; margin-left: 2vw;">o</span>
          <span style="--i:9;">n</span>
          <span style="--i:10; margin-left: 2vw;">b</span>
          <span style="--i:11;">o</span>
          <span style="--i:12;">a</span>
          <span style="--i:13;">r</span>
          <span style="--i:14;">d</span>
        </h2>
        <h2>
          <span style="--i:1;">d</span>
          <span style="--i:2;">e</span>
          <span style="--i:3;">a</span>
          <span style="--i:4;">r</span>
          <span
            v-show="guestFirstname.length > 0"
            v-for="(letter, idx) in guestFirstname"
            :style="`--i:${idx}; ${idx == 0 ? 'margin-left: 2vw;' : ''}`"
          >
            {{ letter }}
          </span>
          <span v-show="guestFirstname.length == 0" style="--i:5; margin-left: 2vw;">v</span>
          <span v-show="guestFirstname.length == 0" style="--i:6;">i</span>
          <span v-show="guestFirstname.length == 0" style="--i:7;">s</span>
          <span v-show="guestFirstname.length == 0" style="--i:8;">i</span>
          <span v-show="guestFirstname.length == 0" style="--i:9;">t</span>
          <span v-show="guestFirstname.length == 0" style="--i:10;">o</span>
          <span v-show="guestFirstname.length == 0" style="--i:11;">r</span>
        </h2>
      </div>
      <div style="display: flex; align-content: center; justify-content: center; max-width: 400px; margin: 0 auto;"
           v-else
      >
        <h1 style="max-width: 600px">
          This page is available only for the web version.
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Animated-circular-menu-vanilla',

    data: () => ({
      guestFirstname: '',
    }),
    mounted () {
    },
  }
</script>

<style scoped lang="css">
h2 {
  color: transparent;
  font-family: 'Bad Script', cursive;
  display: flex;
  font-size: 7vw;
}

h2 span {
  animation: animate 3s linear infinite;
  animation-delay: calc(0.1s * var(--i));
}

@keyframes animate {
  0% {
    color: #fff;
    filter: blur(1px) hue-rotate(0deg);
    text-shadow: 0 0 10px #00b3ff,
    0 0 20px #00b3ff,
    0 0 40px #00b3ff,
    0 0 80px #00b3ff,
    0 0 120px #00b3ff,
    0 0 200px #00b3ff,
    0 0 300px #00b3ff,
    0 0 400px #00b3ff;
  }
  30%, 70% {
    color: #fff;
    filter: blur(1px) hue-rotate(360deg);
    text-shadow: 0 0 10px #00b3ff,
    0 0 20px #00b3ff,
    0 0 40px #00b3ff,
    0 0 80px #00b3ff,
    0 0 120px #00b3ff,
    0 0 200px #00b3ff;
  }
  100% {
    color: transparent;
    box-shadow: none;
    filter: blur(0px) hue-rotate(0deg);
  }
}
</style>
