<template>
  <div class="mainContent">
    <div class="pageBody">
      <section>
        <img src="@/assets/images/stars.png" alt="stars" id="stars">
        <img src="@/assets/images/moon.png" alt="stars" id="moon">
        <img src="@/assets/images/mountains_behind.png" alt="mountains_behind" id="mountains_behind">
        <h2 id="text">Anime <span>JS</span></h2>
        <a href="#" id="btn">Click me</a>
        <img src="@/assets/images/mountains_front.png" alt="mountains_front" id="mountains_front">
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Awesome-animejs-background',

    data: () => ({
      anime: null,
    }),
    mounted () {
      this.anime = this.$anime.timeline({
        autoplay: false,
      })

      this.anime.add({
        targets: '#btn',
        top: '1500px',
        duration: 500,
        easing: 'easeInOutSine',
      })

        .add({
          targets: '#stars',
          top: '0px',
          duration: 1000,
          easing: 'easeInOutSine',
        })

        .add({
          targets: '#mountains_behind',
          bottom: '0px',
          duration: 1000,
          easing: 'easeInOutSine',
        })

        .add({
          targets: '#moon',
          top: '0px',
          duration: 1000,
          easing: 'easeInOutBack',
        })

        .add({
          targets: '#mountains_front',
          bottom: '0px',
          duration: 1000,
          easing: 'easeInOutSine',
        })

        .add({
          targets: '#text',
          marginRight: '0px',
          duration: 1000,
          easing: 'easeInOutBack',
        })
        .add({
          targets: '#btn',
          top: '50%',
          duration: 1000,
          easing: 'easeInOutBack',
        })

      document.querySelector('#btn').onclick = this.anime.play
    },
  }
</script>

<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

section img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
}

section img#moon {
  top: -100%;
  mix-blend-mode: screen;

}

section img#stars {
  top: -100%;
  height: 100%;
  object-fit: cover;
}

section img#mountains_behind {
  bottom: -100%;
  top: initial;
}

section img#mountains_front {
  bottom: -150%;
  top: initial;
  z-index: 1000;
}

#text {
  position: absolute;
  color: #fff;
  font-size: 6vw;
  font-weight: 200;
  margin-right: -3000px;
}

#text span {
  font-weight: 700;
}

#btn {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: 80px;
  transform: translate(-50%, -50%);
  text-decoration: none;
  display: inline-block;
  padding: 8px 50px;
  background: #ffffff;
  border-radius: 40px;
  font-size: 1.4em;
  color: #2b1055;
  z-index: 10000;
}
</style>
