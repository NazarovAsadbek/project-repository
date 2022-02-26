<template>
  <div class="mainContent">
    <section>
      <img src="@/assets/images/bg.jpg" id="background-halloween" alt="background">
      <img src="@/assets/images/bats.png" id="bats-halloween" alt="bats-halloween">
      <img src="@/assets/images/castle.png" id="castle-halloween" alt="castle-halloween">
      <img src="@/assets/images/img.png" id="img-halloween" alt="img-halloween">
      <img src="@/assets/images/wolf.png" id="wolf-halloween" alt="wolf-halloween">
    </section>
    <div class="sec">
      <div class="content">
        <h2>Happy Halloween</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur blanditiis debitis tenetur? Alias
          autem culpa cum cumque dicta, dolorem earum expedita inventore veritatis? Ad aut consequuntur cum dicta
          eaque, et excepturi exercitationem inventore laborum molestiae mollitia nesciunt nisi non obcaecati odit
          officiis quae rerum tempore vel veritatis? Aliquam, assumenda atque, delectus doloribus ducimus eius eos
          facere itaque maxime, omnis quae recusandae reiciendis saepe suscipit tempora totam ut veniam vero!
          Accusantium aliquam eligendi ipsum nihil quidem quisquam unde. Consectetur consequatur cupiditate delectus
          deserunt dolor ducimus earum excepturi facere, illo impedit inventore iste iure magni maiores necessitatibus
          nihil nostrum odio officiis quod rerum sequi sint, sit ullam vel voluptatem. Adipisci amet assumenda atque
          autem blanditiis consectetur consequatur distinctio dolor dolorum ducimus eligendi error esse eum
          exercitationem facilis illo ipsam iste, iusto minus nam nesciunt obcaecati odit perferendis provident quam
          qui quia quo, quos recusandae repellendus sed soluta tenetur voluptatibus. Accusamus aliquam assumenda
          blanditiis cum eaque, eligendi esse excepturi, facere fuga labore modi neque numquam quam qui sequi
          similique, totam voluptatum! Accusantium amet beatae commodi cupiditate dicta distinctio dolor eaque et ex
          explicabo fuga fugiat fugit illo ipsam, iure iusto laborum magni minima modi nam natus necessitatibus neque
          odio omnis optio pariatur placeat possimus quaerat quam quas quidem quis sint soluta ullam ut, vero
          voluptatem! Aliquid animi blanditiis, doloribus est quisquam totam voluptatibus! Amet cupiditate eius
          eveniet explicabo id illo impedit iure iusto laudantium minima modi molestias nam necessitatibus nemo
          nesciunt nobis, officia officiis placeat quam quasi saepe sunt temporibus ullam unde veniam. Asperiores
          dolor eius eligendi ex, exercitationem hic quaerat saepe sunt ullam? Deserunt facere molestiae quos sequi
          tempore! Architecto asperiores cupiditate facere libero neque nisi non quia sint, soluta sunt ullam
          voluptates voluptatibus. Harum quaerat quis recusandae sit voluptates. Accusantium aliquam corporis debitis
          error ipsa necessitatibus nostrum quae voluptas voluptate.</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Animated-circular-menu-vanilla',

    data: () => ({}),
    mounted () {
      gsap.to('#img-halloween', {
        scrollTrigger: {
          scrub: 0.5,
        },
        x: 1500,
        y: 500,
      })

      gsap.from('#wolf-halloween', {
        scrollTrigger: {
          scrub: 0.5,
        },
        x: 400,
      })

      gsap.from('#castle-halloween', {
        scrollTrigger: {
          scrub: 0.5,
        },
        x: -100,
      })

      gsap.to('#bats-halloween', {
        scrollTrigger: {
          scrub: 0.5,
        },
        scale: 1.5,
      })
    },
  }
</script>

<style scoped lang="css">
@import url(//db.onlinewebfonts.com/c/327db0e396c83704b5d2f7663a7ffe60?family=Fruktur);

section {
  position: relative;
  width: 100%;
  height: 650px;
  overflow: hidden;
}

@media (max-width: 1700px) {
  section {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
  }
}

@media (max-width: 1332px) {
  section {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
  }
}

@media (max-width: 768px) {
  section {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
}

@media (max-width: 450px) {
  section {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
  }

  h2 {
    font-size: 3em !important;
  }

  p {
    font-size: 8px !important;
  }
}

section::before {
  content: '';
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 300px;
  background: linear-gradient(to top, #121212, transparent);
  z-index: 10000;
}

section img {
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
}

.sec {
  font-family: 'Fruktur', cursive;
  position: relative;
  padding: 100px;
  text-align: center;
}

.sec h2 {
  font-size: 5em;
  color: #ff9425;
  margin-bottom: 20px;
}

.sec p {
  color: #fff;
  font-size: 1.2em;
  line-height: 1.5em;
  font-family: consolas;
}

</style>
