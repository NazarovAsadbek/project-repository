<template>
  <div>
    <header>
      <a href="#" class="logo justify-start">Logo</a>
      <div class="rightSide">
        <div class="btns dayNight" @click="dayNightClick">
          <ion-icon name="moon-outline"></ion-icon>
          <ion-icon name="sunny-outline"></ion-icon>
        </div>
        <div class="btns menuToggle" @click="menuClick">
          <ion-icon name="menu-outline"></ion-icon>
          <ion-icon name="close-outline"></ion-icon>
        </div>
      </div>
    </header>
    <section class="mainSection">
      <video
        src="@/assets/images/ocean.mp4"
        autoplay
        loop
        muted
        type="mp4"
      />
      <img src="@/assets/images/ocean-mask.jpg" class="mask" alt="Ocean mask">
      <h2>Ocean</h2>
      <p class="copyrightTextOcean">Made with love - 2022.02.25</p>
      <ul class="sciOcean">
        <li>
          <a href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
      </ul>
    </section>

    <!--  Navigation  -->
    <ul class="navigationSection">
      <li><a href="">Home</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Package</a></li>
      <li><a href="">Contract</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Animated-circular-menu-vanilla',

    data: () => ({}),
    methods: {
      dayNightClick () {
        let dayNight = document.querySelector('.dayNight')
        let body = document.querySelector('.v-main__wrap')

        body.classList.toggle('darkOcean')
        dayNight.classList.toggle('active')
      },
      menuClick () {
        let menuToggle = document.querySelector('.menuToggle')
        let navigation = document.querySelector('.navigationSection')
        menuToggle.classList.toggle('active')
        navigation.classList.toggle('active')
      },
    },
    mounted () {

    },
  }
</script>

<style scoped lang="css">
header {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 40px 100px;
  z-index: 10000;
}

header .logo {
  position: relative;
  display: inline-flex;
  color: var(--blackOcean);
  text-decoration: none;
  font-size: 2em;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.rightSide {
  display: flex;
}

.btns {
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
}

.btns ion-icon {
  font-size: 1.5em;
  color: var(--blackOcean)
}

.btns.menuToggle ion-icon {
  font-size: 3em;
}

.btns ion-icon:nth-child(2) {
  display: none;
}

.btns.active ion-icon:nth-child(2) {
  display: block;
}

.btns.active ion-icon:nth-child(1) {
  display: none;
}

.mainSection {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mainSection video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  user-select: none;
  mix-blend-mode: screen;
}

.darkOcean .mask {
  filter: invert(1);
  mix-blend-mode: multiply;
}

.mainSection h2 {
  position: relative;
  z-index: 3;
  font-size: 16vw;
  color: #fff;
  text-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);

}

.navigationSection {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--whiteOcean);
  z-index: 4;
  transition: 0.5s;
}

.navigationSection.active {
  left: 0;
}

.navigationSection li {
  list-style: none;
}

.navigationSection li a {
  display: inline-flex;
  margin: 5px 0;
  font-size: 1.35em;
  text-decoration: none;
  color: var(--blackOcean);
  padding: 5px 20px;
  border-radius: 40px;
}

.navigationSection li a:hover {
  background: var(--blackOcean);
  color: var(--whiteOcean);
}

.copyrightTextOcean {
  position: absolute;
  left: 100px;
  bottom: 0;
  z-index: 4;
  font-weight: 500;
  font-size: 1.2em;
  color: var(--blackOcean);
}

.sciOcean {
  position: absolute;
  right: 100px;
  bottom: 0;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.sciOcean li {
  list-style: none;
}

.sciOcean li a {
  text-decoration: none;
  color: var(--blackOcean);
  font-size: 1.75em;
}

@media (max-width: 768px) {
  header {
    padding: 20px;
  }

  .copyrightTextOcean {
    left: 20px;
    bottom: 0;
  }

  .sciOcean {
    right: 20px;
    bottom: 0;
  }
}

</style>
