<template>
  <div class="mainContent">
    <div class="pageBody">
      <div class="mainContainer">
        <div>
          <label>
            <input type="checkbox">
            <span>Dubai</span>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox">
            <span>Tashkent</span>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox">
            <span>Hong Kong</span>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox">
            <span>Goa</span>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox">
            <span>Instanbul</span>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox">
            <span>Rome</span>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox">
            <span>Sydney</span>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox">
            <span>Madrid</span>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox">
            <span>Mexico</span>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox">
            <span>Singapore</span>
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              v-model="isTokyo"
            >
            <span>Tokyo</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Animated-circular-menu-vanilla',

    data: () => ({
      isTokyo: true,
    }),
    mounted () {

    },
  }
</script>

<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

.mainContainer {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

.mainContainer div {
  margin: 10px;
}

.mainContainer div label {
  cursor: pointer;
}

.mainContainer div label input[type='checkbox'] {
  display: none;
}

.mainContainer div label span {
  position: relative;
  display: inline-block;
  background: #424242;
  padding: 15px 30px;
  color: #555;
  text-shadow: 0 1px 4px rgba(0, 0, 0, .5);
  border-radius: 30px;
  font-size: 20px;
  transition: .5s;
  user-select: none;
  overflow: hidden;
}

.mainContainer div label span:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: rgba(255, 255, 255, .1);
}

.mainContainer div:nth-child(6n + 1) label input[type='checkbox']:checked ~ span {
  background: #e91e63;
  color: #fff;
  box-shadow: 0 2px 20px #e91e63;
}

.mainContainer div:nth-child(6n + 2) label input[type='checkbox']:checked ~ span {
  background: #0f0;
  color: #fff;
  box-shadow: 0 2px 20px #0f0;
}

.mainContainer div:nth-child(6n + 3) label input[type='checkbox']:checked ~ span {
  background: #df01d7;
  color: #fff;
  box-shadow: 0 2px 20px #df01d7;
}

.mainContainer div:nth-child(6n + 4) label input[type='checkbox']:checked ~ span {
  background: #2e2efe;
  color: #fff;
  box-shadow: 0 2px 20px #2e2efe;
}

.mainContainer div:nth-child(6n + 5) label input[type='checkbox']:checked ~ span {
  background: #ffeb3b;
  color: #fff;
  box-shadow: 0 2px 20px #ffeb3b;
}

.mainContainer div:nth-child(6n + 6) label input[type='checkbox']:checked ~ span {
  background: #9c27b0;
  color: #fff;
  box-shadow: 0 2px 20px #9c27b0;
}

</style>
