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

    <!-- main -->
    <div class="adminMain">
      <div class="topbar">
        <div class="adminToggle">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <!-- search -->
        <div class="adminSearch">
          <label for="">
            <input type="text" placeholder="Search here"/>
            <ion-icon name="search-outline"></ion-icon>
          </label>
        </div>
        <!-- userImg -->
        <div class="adminUser">
          <img src="@/assets/images/user.jpg" alt="user logo"/>
        </div>
      </div>

      <!--      card-->
      <div class="adminCardBox">
        <div class="adminCard">
          <div>
            <div class="adminNumbers">1,504</div>
            <div class="cardName">Nazarov Asadbek</div>
          </div>
          <div class="iconBox">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
        </div>
        <div class="adminCard">
          <div>
            <div class="adminNumbers">80</div>
            <div class="cardName">Sales</div>
          </div>
          <div class="iconBox">
            <ion-icon name="cart-outline"></ion-icon>
          </div>
        </div>
        <div class="adminCard">
          <div>
            <div class="adminNumbers">284</div>
            <div class="cardName">Comments</div>
          </div>
          <div class="iconBox">
            <ion-icon name="chatbubbles-outline"></ion-icon>
          </div>
        </div>
        <div class="adminCard">
          <div>
            <div class="adminNumbers">$7,842</div>
            <div class="cardName">Earning</div>
          </div>
          <div class="iconBox">
            <ion-icon name="cash-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'Awesome-coffee-checkbox',

    data: () => ({}),
    mounted () {
      // menu Toggle
      const toggle = document.querySelector('.adminToggle'),
        navigation = document.querySelector('.navigation'),
        main = document.querySelector('.adminMain')

      toggle.onclick = function () {
        navigation.classList.toggle('active')
        main.classList.toggle('active')
      }

      // add hovered class in selected list item
      let list = document.querySelectorAll('.navigation li')

      function activeLink () {
        list.forEach(item => {
          item.classList.remove('hovered')
          this.classList.add('hovered')
        })
      }

      list.forEach(item => {
        item.addEventListener('mouseover', activeLink)
      })
    },
  }
</script>

<style scoped lang="css">
.adminContainer {
  position: relative;
  background: red !important;
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

.navigation.active {
  width: 80px;
}

.navigation ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0;
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
  background: var(--black3SimpleAdmin);
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
  box-shadow: 35px 35px 0 10px var(--black3SimpleAdmin);
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
  box-shadow: 35px -35px 0 10px var(--black3SimpleAdmin);
  pointer-events: none;
}

/* main */
.adminMain {
  position: absolute;
  width: calc(100% - 300px);
  left: 300px;
  min-height: 100vh;
  transition: 0.5s;
}

.adminMain.active {
  width: calc(100% - 80px);
  left: 80px;
}

.topbar {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.adminToggle {
  position: relative;
  top: 0;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5em;
  cursor: pointer;
  color: var(--whiteSimpleAdmin)
}

.adminSearch {
  position: relative;
  width: 400px;
  margin: 0px 10px;
}

.adminSearch label {
  position: relative;
  width: 100%;
}

.adminSearch label input {
  width: 100%;
  height: 40px;
  border-radius: 40px;
  padding: 5px 20px;
  padding-left: 35px;
  font-size: 18px;
  outline: none;
  border: 1px solid var(--black2SimpleAdmin);
  color: var(--whiteSimpleAdmin)
}

.adminSearch label ion-icon {
  position: absolute;
  top: 0;
  left: 10px;
  font-size: 1.1em;
  color: var(--whiteSimpleAdmin)
}

.adminUser {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}

.adminUser img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.adminCardBox {
  position: relative;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}

.adminCardBox .adminCard {
  position: relative;
  background: var(--black3SimpleAdmin);
  padding: 30px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  box-shadow: 0 7px 24px rgba(0, 0, 0, 0.8);
}

.adminCardBox .adminCard .adminNumbers {
  position: relative;
  font-weight: 500;
  font-size: 2.5em;
  color: var(--blueSimpleAdmin)
}

.adminCardBox .adminCard .cardName {
  color: var(--black2SimpleAdmin);
  font-size: 1.1em;
  margin-top: 5px;
}

.adminCardBox .adminCard .iconBox {
  font-size: 3.5em;
  color: var(--black2SimpleAdmin)
}

.adminCardBox .adminCard:hover {
  background: var(--whiteSimpleAdmin);
}

.adminCardBox .adminCard:hover .adminNumbers,
.adminCardBox .adminCard:hover .cardName,
.adminCardBox .adminCard:hover .iconBox {
  color: var(--blueSimpleAdmin)
}
</style>
