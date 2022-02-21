<template>
  <div class="mainContent">
    <div class="pageBody">
      <div class="container">
        <h3>Popular Create List</h3>
        <div class="list">
          <div class="rank"><span>1</span></div>
          <div class="creator">
            <h4>Ricardo Flanangan</h4>
            <p>Digital Artist</p>
          </div>
        </div>
        <div class="list">
          <div class="rank"><span>2</span></div>
          <div class="creator">
            <h4>Muxamad Irshad</h4>
            <p>UI/UX designer</p>
          </div>
        </div>
        <div class="list">
          <div class="rank"><span>3</span></div>
          <div class="creator">
            <h4>Clara Jones</h4>
            <p>Backend developer</p>
          </div>
        </div>
        <div class="list">
          <div class="rank"><span>4</span></div>
          <div class="creator">
            <h4>Mark Devis</h4>
            <p>Illustrator designer</p>
          </div>
        </div>
        <div class="list">
          <div class="rank"><span>5</span></div>
          <div class="creator">
            <h4>Shara Anderson</h4>
            <p>Food Vloggers</p>
          </div>
        </div>
        <div class="list">
          <div class="rank"><span>6</span></div>
          <div class="creator">
            <h4>Erik Karine</h4>
            <p>Digital Artist</p>
          </div>
        </div>
        <div class="list">
          <div class="rank"><span>7</span></div>
          <div class="creator">
            <h4>Fredrik Walter</h4>
            <p>Photoshop Expert</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Animated-circular-menu-vanilla',

    data: () => ({}),
    mounted () {
    },
  }
</script>

<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

.container {
  position: relative;
  width: 450px;
  min-height: 500px;
  background: #2f363e;
  border-radius: 30px;
  padding: 50px;
  margin: 50px;
  box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.25),
  10px 10px 70px rgba(0, 0, 0, 0.25),
  inset 5px 5px 10px rgba(0, 0, 0, 0.5),
  inset 5px 5px 20px rgba(255, 255, 255, 0.2),
  inset -5px -5px 15px rgba(0, 0, 0, 0.75);
}

.container h3 {
  color: #fff;
  font-weight: 700;
  font-size: 1.2em;
}

.container .list {
  position: relative;
  display: flex;
  /*align-items: center;*/
  margin: 20px 0;
  cursor: pointer;
}

.container .list::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 45px;
  width: 45px;
  background: #1f83f2;
  border-radius: 22px;
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25),
  inset -3px -3px 5px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
}

.container .list:hover::before {
  width: 100%;
}

.container .list .rank {
  position: relative;
  min-width: 45px;
  height: 45px;
  /*background: #fff;*/
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 10px;
}

.container .list .rank::before {
  content: '';
  position: absolute;
  top: 7px;
  width: 30px;
  height: 30px;
  background: #2f363e;
  border-radius: 30px;
  transform: scale(0);
  transition: .5s;
}

.container .list:hover .rank::before {
  transform: scale(1);
}

.container .list .rank span {
  position: relative;
  font-weight: 600;
  font-size: 1em;
  color: #fff;
  transition: 0.5s;
}

.container .list .creator {
  position: relative;
  line-height: 1.15em;
}

.container .list .creator h4 {
  font-weight: 600;
  color: #bcbcc0;
  transition: 0.5s;
}

.container .list .creator p {
  font-weight: 400;
  color: #95999d;
  font-size: 0.85em;
  transition: 0.5s;
}

.container .list:hover .creator h4,
.container .list:hover .creator p {
  color: #fff;
}

</style>
