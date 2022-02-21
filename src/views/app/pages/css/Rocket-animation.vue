<template>
  <div class="mainContent">
    <div class="pageBody">
      <div class="container">
        <img src="@/assets/images/rocket.svg" id="rocket" alt="rocket">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Rocket-animation',
  }
</script>

<style scoped lang="css">

.container
{
  position: relative;
  height: 300px;
  width: 300px;
}
.container #rocket
{
  position: absolute;
  left: 0;
  right: 0;
  bottom: -300px;
  animation: fly 2s .5s infinite;
}
@keyframes fly {
  0%{ bottom: -300px; }
  100%{ bottom: 100%; }
}

</style>
