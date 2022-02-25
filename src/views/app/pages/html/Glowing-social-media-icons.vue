<template>
  <div class="mainContent">
    <div class="pageBody">
      <ul>
        <li style="--clr: #1877f2"><a href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li>
        <li style="--clr: #ff0000"><a href="#">
          <ion-icon name="logo-youtube"></ion-icon>
        </a></li>
        <li style="--clr: #1da1f2"><a href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li>
        <li style="--clr: #c32aa3"><a href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
        <li style="--clr: #25d366"><a href="#">
          <ion-icon name="logo-whatsapp"></ion-icon>
        </a></li>
      </ul>
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

ul {
  position: relative;
  display: flex;
  gap: 50px
}

ul li {
  position: relative;
  list-style: none;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 1s;
}

ul li:hover {
  z-index: 10000;
  transform: scale(0.75);
}

ul li::before {
  content: '';
  position: absolute;
  inset: 30px;
  box-shadow: 0 0 0 10px var(--clr),
  0 0 0 20px #121212,
  0 0 0 22px var(--clr);
}

ul li::after {
  content: '';
  position: absolute;
  inset: 0;
  background: #121212;
  transform: rotate(45deg);
}

ul li:hover::before {
  inset: 0px;
}

ul li a {
  position: relative;
  text-decoration: none;
  color: var(--clr);
  z-index: 10;
  font-size: 2em;
  transition: 1s;
}

ul li:hover a {
  font-size: 3em;
  filter: drop-shadow(0 0 20px var(--clr)) drop-shadow(0 0 40px var(--clr)) drop-shadow(0 0 60px var(--clr));
}

</style>
