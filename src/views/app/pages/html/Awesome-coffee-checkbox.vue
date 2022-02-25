<template>
  <div class="mainContent">
    <div class="pageBody">
      <label>
        <input type="checkbox">
        <span></span>
        <p>ON</p>
        <p>OFF</p>
      </label>
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

label {
  position: relative;
  width: 300px;
  height: 150px;
  background: #3e3e3e;
  box-shadow: 0 0 0 4px #303030;
  border-radius: 75px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

label input {
  appearance: none;
}

label span {
  position: absolute;
  left: 0;
  width: 175px;
  height: 150px;
  background-image: url('/Coffee_01.png');
  background-size: auto 150px;
  background-repeat: no-repeat;
  transition: 1.5s;
  transform: rotate(-180deg);
  transform-origin: 75px;
}

label input:checked ~ span {
  left: 150px;
  background-image: url('/Coffee_02.png');
  background-size: auto 150px;
  background-repeat: no-repeat;
  transform: rotate(360deg);
}

label p {
  position: absolute;
  left: -100px;
  font-family: Consolas;
  color: #fff;
  font-size: 3em;
  filter: drop-shadow(0 0 15px #fff) drop-shadow(0 0 35px #fff);
  transition: 1.5s;
}

label input:checked ~ p {
  color: #8f8f8f;
  filter: none;
}

label p:last-child {
  position: absolute;
  left: initial;
  right: -100px;
  color: #8f8f8f;
  filter: none;
}

label input:checked ~ p:last-child {
  color: #fff;
  filter: drop-shadow(0 0 15px #fff) drop-shadow(0 0 35px #fff);
}
</style>
