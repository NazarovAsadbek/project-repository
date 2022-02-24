<template>
  <div class="mainContent">
    <div class="pageBody">
      <div class="mainContainer">
        <marquee direction="down" width="100%" height="100%" scrollamount="30" behavior="alternate">
          <marquee behavior="alternate" scrollamount="30">
            <img src="dvd_logo.png" alt="DVD LOGO">
          </marquee>
        </marquee>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Awesome-coffee-checkbox',

    data: () => ({}),
    mounted () {

    },
  }
</script>

<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

.mainContainer {
  width: 100%;
  height: 100vh;
}
</style>
