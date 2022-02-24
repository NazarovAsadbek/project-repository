<template>
  <div class="mainContent">
    <div class="pageBody">
      <ul>
        <li style="--clr: #00ade1"><a href="#" data-text="Home">&nbsp; Home &nbsp;</a></li>
        <li style="--clr: #ff6493"><a href="#" data-text="About">&nbsp; About &nbsp;</a></li>
        <li style="--clr: #ffdd1c"><a href="#" data-text="Services">&nbsp; Services &nbsp;</a></li>
        <li style="--clr: #00dc82"><a href="#" data-text="Team">&nbsp; Team &nbsp;</a></li>
        <li style="--clr: #dc00d4"><a href="#" data-text="Contact">&nbsp; Contact &nbsp;</a></li>
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
  flex-direction: column;
  gap: 30px;
}

ul li {
  position: relative;
  list-style: none;
}

ul li a {
  position: relative;
  font-size: 4em;
  text-decoration: none;
  line-height: 1em;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, .5);
}

ul li a::before {
  content: attr(data-text);
  position: absolute;
  color: var(--clr);
  width: 0;
  overflow: hidden;
  transition: 1s;
  border-right: 1px solid var(--clr);
  -webkit-text-stroke: 1px var(--clr);
}

ul li a:hover::before {
  width: 100%;
  filter: drop-shadow(0 0 25px var(--clr));
}

</style>
