<template>
  <div class="mainContent">
    <div class="pageBody">
      <div class="navigation">
        <ul>
          <li class="list active">
            <a href="#">
          <span class="icon">
            <ion-icon name="home-outline"></ion-icon>
          </span>
              <span class="text">Home</span>
            </a>
          </li>
          <li class="list">
            <a href="#">
          <span class="icon">
            <ion-icon name="person-outline"></ion-icon>
          </span>
              <span class="text">Profile</span>
            </a>
          </li>
          <li class="list">
            <a href="#">
          <span class="icon">
            <ion-icon name="chatbubble-outline"></ion-icon>
          </span>
              <span class="text">Message</span>
            </a>
          </li>
          <li class="list">
            <a href="#">
          <span class="icon">
            <ion-icon name="camera-outline"></ion-icon>
          </span>
              <span class="text">Photo</span>
            </a>
          </li>
          <li class="list">
            <a href="#">
          <span class="icon">
            <ion-icon name="settings-outline"></ion-icon>
          </span>
              <span class="text">Setting</span>
            </a>
          </li>
          <div class="indicator"></div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Animated-circular-menu-vanilla',
    data: () => ({}),
    mounted () {
      const list = document.querySelectorAll('.list')

      function activeLink () {
        list.forEach((item) => {
          item.classList.remove('active')
          this.classList.add('active')
        })
      }

      list.forEach((item) => {
        item.addEventListener('click', activeLink)
      })
    },
  }
</script>

<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

.navigation {
  position: relative;
  width: 400px;
  height: 70px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.navigation ul {
  display: flex;
  width: 350px;
}

.navigation ul li {
  position: relative;
  list-style: none;
  width: 70px;
  height: 70px;
  z-index: 1;
}

.navigation ul li a {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500;
}

.navigation ul li a .icon {
  position: relative;
  display: block;
  line-height: 75px;
  font-size: 1.5em;
  text-align: center;
  transition: 0.5s;
  color: #121212
}

.navigation ul li.active a .icon {
  transform: translateY(-32px);
}

.navigation ul li a .text {
  position: absolute;
  color: #121212;
  font-weight: 400;
  font-size: 0.75em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  opacity: 0;
  transform: translateY(20px);
}

.navigation ul li.active a .text {
  opacity: 1;
  transform: translateY(10px);
}

.indicator {
  position: absolute;
  top: -50%;
  width: 70px;
  height: 70px;
  background: #29fd53;
  border-radius: 50%;
  border: 6px solid #121212;
  transition: 0.5s;
}

.indicator::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -22px;
  width: 20px;
  height: 20px;
  background: transparent;
  border-top-right-radius: 20px;
  box-shadow: 1px -10px 0 0 #121212;
}

.indicator::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -22px;
  width: 20px;
  height: 20px;
  background: transparent;
  border-top-left-radius: 20px;
  box-shadow: -1px -10px 0 0 #121212;
}

.navigation ul li:nth-child(1).active ~ .indicator {
  transform: translateX(calc(-2px * 1));
}

.navigation ul li:nth-child(2).active ~ .indicator {
  transform: translateX(calc(63px * 1));
}

.navigation ul li:nth-child(3).active ~ .indicator {
  transform: translateX(calc(64px * 2));
}

.navigation ul li:nth-child(4).active ~ .indicator {
  transform: translateX(calc(64.5px * 3));
}

.navigation ul li:nth-child(5).active ~ .indicator {
  transform: translateX(calc(64.9px * 4));
}
</style>
