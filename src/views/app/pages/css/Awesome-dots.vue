<template>
  <div class="mainContent">
    <div class="pageBody">
      <div class="navigation">
        <span style="--i:0;--x:-1;--y:0"><ion-icon name="camera-outline"></ion-icon></span>
        <span style="--i:1;--x:1;--y:0"><ion-icon name="diamond-outline"></ion-icon></span>
        <span style="--i:2;--x:0;--y:-1"><ion-icon name="chatbubble-outline"></ion-icon></span>
        <span style="--i:3;--x:0;--y:1"><ion-icon name="alarm-outline"></ion-icon></span>
        <span style="--i:4;--x:1;--y:1"><ion-icon name="game-controller-outline"></ion-icon></span>
        <span style="--i:5;--x:-1;--y:-1"><ion-icon name="moon-outline"></ion-icon></span>
        <span style="--i:6;--x:0;--y:0"><ion-icon name="notifications-outline"></ion-icon></span>
        <span style="--i:7;--x:-1;--y:1"><ion-icon name="water-outline"></ion-icon></span>
        <span style="--i:8;--x:1;--y:-1"><ion-icon name="time-outline"></ion-icon></span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Claymorphism-login-form',

    data: () => ({}),
    mounted () {
      let navigation = document.querySelector('.navigation')
      navigation.onclick = function () {
        navigation.classList.toggle('active')
      }
    },
  }
</script>

<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

.navigation {
  position: relative;
  width: 70px;
  height: 70px;
  background: #212532;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  transition-delay: 0.8s;
}

.navigation.active {
  width: 200px;
  height: 200px;
  transition-delay: 0s;
}

.navigation span {
  position: absolute;
  width: 7px;
  height: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 50%;
  transform: translate(calc(12px * var(--x)), calc(12px * var(--y)));
  transition: transform 0.5s, width 0.5s, height 0.5s;
  background: 0.5s;
  transition-delay: calc(0.1s * var(--i));
}

.navigation.active span {
  width: 45px;
  height: 45px;
  background: #333849;
  transform: translate(calc(60px * var(--x)), calc(60px * var(--y)));
}

.navigation span ion-icon {
  transition: 0.5s;
  font-size: 0em;
}

.navigation.active span ion-icon {
  font-size: 1.35em;
  color: #fff;
}

.navigation.active span:hover ion-icon {
  color: #2dfc52;
  filter: drop-shadow(0 0 2px #2dfc52) drop-shadow(0 0 5px #2dfc52) drop-shadow(0 0 15px #2dfc52);
}

</style>
