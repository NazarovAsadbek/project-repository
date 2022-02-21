<template>
  <div class="mainContent">
    <div class="pageBody">
      <div class="container">
        <form action="submit">
          <h3>Log in</h3>
          <div class="inputBox">
            <span>Username</span>
            <div class="box">
              <div class="icon">
                <ion-icon name="person-outline"></ion-icon>
              </div>
              <input type="text">
            </div>
          </div>
          <div class="inputBox">
            <span>Password</span>
            <div class="box">
              <div class="icon">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </div>
              <input type="password">
            </div>
          </div>
          <label for="">
            <input type="checkbox"> Remember me
          </label>
          <div class="inputBox">
            <div class="box">
              <input type="submit" value="log in">
            </div>
          </div>
          <a href="#" class="forgot">Forget Password</a>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Claymorphism-login-form',

    data: () => ({}),
    mounted () {
    },
  }
</script>

<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

.container {
  position: relative;
  width: 350px;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2f363e;
  box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.25),
  10px 10px 70px rgba(0, 0, 0, 0.25),
  inset 5px 5px 10px rgba(0, 0, 0, 0.5),
  inset 5px 5px 20px rgba(255, 255, 255, 0.2),
  inset -5px -5px 15px rgba(0, 0, 0, 0.75);
  border-radius: 30px;
  padding: 50px;
}

form {
  position: relative;
  width: 100%;
}

.container h3 {
  color: #fff;
  font-weight: 600;
  font-size: 2em;
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.inputBox {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
}

.inputBox span {
  display: inline-block;
  color: #fff;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.75em;
  border-left: 4px solid #fff;
  padding-left: 4px;
  line-height: 1em;
}

.inputBox .box {
  display: flex;
}

.inputBox .box .icon {
  position: relative;
  min-width: 40px;
  height: 40px;
  background: #ff2c74;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 10px;
  color: #fff;
  font-size: 1.15em;
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25),
  inset 2px 2px 5px rgba(255, 255, 255, 0.25),
  inset -3px -3px 5px rgba(0, 0, 0, 0.5);
}

.inputBox .box input {
  position: relative;
  width: 100%;
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.85em;
  box-shadow: 5px 5px 7px rgba(5, 5, 5, 0.25),
  inset 2px 2px 5px rgba(0, 0, 0, 0.35),
  inset -3px -3px 5px rgba(0, 0, 0, 0.5);
}

.inputBox .box input[type="submit"] {
  background: #1f83f2;
  box-shadow: 5px 5px 7px rgba(5, 5, 5, 0.25),
  inset 2px 2px 5px rgba(255, 255, 255, 0.25),
  inset -3px -3px 5px rgba(0, 0, 0, 0.5);
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 10px;
}

.inputBox .box input[type="submit"]:hover {
  filter: brightness(1.1);
}

label {
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.85em;
  display: flex;
  align-items: center;
}

label input {
  margin-right: 5px;
}

.forgot {
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.85em;
  text-decoration: none;
}

</style>
