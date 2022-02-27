<template>
  <div class="adminContainer">
    <div class="navigation">
      <ul>
        <li>
          <a href="">
            <span class="icon"><ion-icon name="logo-apple"></ion-icon></span>
            <span class="title">Brand Name</span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
            <span class="title">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="icon">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span class="title">Customers</span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="icon">
              <ion-icon name="chatbubble-outline"></ion-icon>
            </span>
            <span class="title">Message</span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="icon"><ion-icon name="help-outline"></ion-icon></span>
            <span class="title">Help</span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="icon"
              ><ion-icon name="settings-outline"></ion-icon
            ></span>
            <span class="title">Settings</span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="icon">
              <ion-icon name="lock-closed-outline"></ion-icon>
            </span>
            <span class="title">Password</span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="icon"
              ><ion-icon name="log-out-outline"></ion-icon
            ></span>
            <span class="title">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Awesome-coffee-checkbox",

  data: () => ({}),
  mounted() {
    let list = document.querySelectorAll(".navigation li");
    function activeLink() {
      list.forEach(item => {
        item.classList.remove("hovered");
        this.classList.add("hovered");
      });
    }
    list.forEach(item => {
      item.addEventListener("mouseover", activeLink);
    });
  }
};
</script>

<style scoped lang="css">
.adminContainer {
  position: relative;
  width: 100%;
}
.navigation {
  position: fixed;
  width: 300px;
  height: 100%;
  background: var(--blueSimpleAdmin);
  border-left: 10px solid var(--blueSimpleAdmin);
  transition: 0.5s;
  overflow: hidden;
}
.navigation ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.navigation ul li {
  position: relative;
  width: 100%;
  list-style: none;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}
.navigation ul li:hover,
.navigation ul li.hovered {
  background: var(--whiteSimpleAdmin);
}
.navigation ul li:nth-child(1) {
  margin-bottom: 40px;
  pointer-events: none;
}
.navigation ul li a {
  position: relative;
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: var(--whiteSimpleAdmin);
}
.navigation ul li:hover a,
.navigation ul li.hovered a {
  color: var(--blueSimpleAdmin);
}
.navigation ul li a .icon {
  position: relative;
  display: block;
  min-width: 60px;
  height: 60px;
  line-height: 70px;
  text-align: center;
}
.navigation ul li a .icon ion-icon {
  font-size: 1.75em;
}
.navigation ul li a .title {
  position: relative;
  display: block;
  padding: 0 10px;
  height: 60px;
  line-height: 60px;
  text-align: start;
  white-space: nowrap;
}
.navigation ul li:hover a::before,
.navigation ul li.hovered a::before {
  content: "";
  position: absolute;
  top: -50px;
  right: 0;
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 35px 35px 0 10px var(--whiteSimpleAdmin);
  pointer-events: none;
}
.navigation ul li:hover a::after,
.navigation ul li.hovered a::after {
  content: "";
  position: absolute;
  bottom: -50px;
  right: 0;
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 35px -35px 0 10px var(--whiteSimpleAdmin);
  pointer-events: none;
}
</style>
