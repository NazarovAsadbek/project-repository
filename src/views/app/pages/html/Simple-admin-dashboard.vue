<template>
  <div class="adminContainer">
    <div class="navigation">
      <ul>
        <li>
          <a href="#">
            <span class="icon"><ion-icon name="logo-apple"></ion-icon></span>
            <span class="title">Brand Name</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
            <span class="title">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span class="title">Customers</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <ion-icon name="chatbubble-outline"></ion-icon>
            </span>
            <span class="title">Message</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon"><ion-icon name="help-outline"></ion-icon></span>
            <span class="title">Help</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon"
            ><ion-icon name="settings-outline"></ion-icon
            ></span>
            <span class="title">Settings</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <ion-icon name="lock-closed-outline"></ion-icon>
            </span>
            <span class="title">Password</span>
          </a>
        </li>
        <li>
          <a href="#">
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

      <!--      data list-->
      <div class="adminDetails">
        <div class="recetOrders">
          <div class="cardHeader">
            <h2>Recent orders</h2>
            <a href="#" class="adminBtn">View All</a>
          </div>
          <table>
            <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Payment</td>
              <td>Status</td>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Star Refrigerator</td>
              <td>$1200</td>
              <td>Paid</td>
              <td><span class="adminStatus adminDelivered">Delivered</span></td>
            </tr>
            <tr>
              <td>Window Coolers</td>
              <td>$110</td>
              <td>Due</td>
              <td><span class="adminStatus adminPending">Pending</span></td>
            </tr>
            <tr>
              <td>Speakers</td>
              <td>$620</td>
              <td>Paid</td>
              <td><span class="adminStatus adminReturn">Return</span></td>
            </tr>
            <tr>
              <td>HP Laptop</td>
              <td>$11000</td>
              <td>Due</td>
              <td><span class="adminStatus delivered">Delivered</span></td>
            </tr>
            <tr>
              <td>Apple Watch</td>
              <td>$1200</td>
              <td>Paid</td>
              <td><span class="adminStatus adminPending">Pending</span></td>
            </tr>
            <tr>
              <td>Wall Fan</td>
              <td>$119</td>
              <td>Paid</td>
              <td><span class="adminStatus adminPending">Pending</span></td>
            </tr>
            <tr>
              <td>Adidas Shoes</td>
              <td>$740</td>
              <td>Paid</td>
              <td><span class="adminStatus adminReturn">Return</span></td>
            </tr>
            <tr>
              <td>Denim Shoes</td>
              <td>$110</td>
              <td>Due</td>
              <td><span class="adminStatus adminInProgress">In Progress</span></td>
            </tr>
            <tr>
              <td>Casual Shoes</td>
              <td>$575</td>
              <td>Paid</td>
              <td><span class="adminStatus adminPending">Pending</span></td>
            </tr>
            <tr>
              <td>Wall Fan</td>
              <td>$110</td>
              <td>Paid</td>
              <td><span class="adminStatus adminPending">Pending</span></td>
            </tr>
            <tr>
              <td>Denim Shirts</td>
              <td>$110</td>
              <td>Due</td>
              <td><span class="adminStatus adminInProgress">In Progress</span></td>
            </tr>
            <tr>
              <td>Star Refrigerator</td>
              <td>$1200</td>
              <td>Paid</td>
              <td><span class="adminStatus delivered">Delivered</span></td>
            </tr>
            </tbody>
          </table>
        </div>
        <!--        New Customers-->
        <div class="adminRecentCustomers">
          <div class="cardHeader">
            <h2>Recent Customers</h2>
          </div>
          <table>
            <tr>
              <td>
                <div class="adminImgBx"><img src="@/assets/images/img2.jpg" alt="Avatar"></div>
              </td>
              <td><h4>David <br> <span>Italy</span></h4></td>
            </tr>
          </table>
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

/* main */
.adminMain {
  position: relative;
  width: calc(100% - 300px);
  left: 300px;
  min-height: 100vh;
  transition: 0.5s;
  background: var(--whiteSimpleAdmin);
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
  color: var(--black1SimpleAdmin)
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
  background: var(--whiteSimpleAdmin);
  padding: 30px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  box-shadow: 0 7px 25px rgba(0, 0, 0, .08);
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

.adminDetails {
  position: relative;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;
  margin-top: 10px;
}

.adminDetails .recetOrders {
  position: relative;
  display: grid;
  min-height: 500px;
  background: var(--whiteSimpleAdmin);
  padding: 20px;
  box-shadow: 0 7px 25px rgba(0, 0, 0, .08);
  border-radius: 20px;
}

.cardHeader {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.cardHeader h2 {
  font-width: 600;
  color: var(--blueSimpleAdmin);
}

.adminBtn {
  position: relative;
  padding: 5px 10px;
  background: var(--blueSimpleAdmin);
  text-decoration: none;
  color: var(--whiteSimpleAdmin);
  border-radius: 6px;
}

.adminDetails table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.adminDetails table thead td {
  font-weight: 600;
}

.adminDetails .recetOrders table tr {
  color: var(--black1SimpleAdmin);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.adminDetails .recetOrders table tr:last-child {
  border-bottom: none;
}

.adminDetails .recetOrders table tbody tr:hover {
  background: var(--blueSimpleAdmin);
  color: var(--whiteSimpleAdmin);
}

.adminDetails .recetOrders table tr td {
  padding: 10px;
}

.adminDetails .recetOrders table tr td:last-child {
  text-align: end;
}

.adminDetails .recetOrders table tr td:nth-child(2) {
  text-align: end;
}

.adminDetails .recetOrders table tr td:nth-child(3) {
  text-align: center;
}

.adminStatus.adminDelivered {
  padding: 2px 4px;
  background: #8de02c;
  color: var(--whiteSimpleAdmin);
  border-radius: 14px;
  font-weight: 500;
}

.adminStatus.adminPending {
  padding: 2px 4px;
  background: #f9ca3f;
  color: var(--whiteSimpleAdmin);
  border-radius: 14px;
  font-weight: 500;
}

.adminStatus.adminReturn {
  padding: 2px 4px;
  background: #f00;
  color: var(--whiteSimpleAdmin);
  border-radius: 14px;
  font-weight: 500;
}

.adminStatus.adminInProgress {
  padding: 2px 4px;
  background: #1795ce;
  color: var(--whiteSimpleAdmin);
  border-radius: 14px;
  font-weight: 500;
}

</style>
