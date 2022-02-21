<template>
  <div class="mainContent">
    <div class="pageBody">
      <div>
        <h3>Email Validation Check</h3>
        <form id="form" action="#">
          <div class="inputBox">
            <input
              type="text"
              id="email"
              placeholder="Enter Email Address"
              @keyup="validation()"
            >
            <span id="text"></span>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'Email-vanila-form',

    data: () => ({}),
    methods: {
      validation () {
        let form = document.getElementById('form'),
          email = document.getElementById('email').value,
          text = document.getElementById('text'),
          pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

        if (email.match(pattern)) {
          form.classList.add('valid')
          form.classList.remove('invalid')
          text.innerHTML = 'Your Email Address in Valid.'
          text.style.color = '#00ff00'
        } else {
          form.classList.remove('valid')
          form.classList.add('invalid')
          text.innerHTML = 'Please enter valid email.'
          text.style.color = '#ff0000'
        }
      },
    },
  }
</script>

<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

h3 {
  position: relative;
  font-size: 20px;
  color: #f9f9f9;
  letter-spacing: 1px;
  font-weight: 500;
  margin-bottom: 5px;
}

#form {
  position: relative;
}

#form #email {
  width: 300px;
  background: #292929;
  outline: none;
  border: none;
  padding: 10px;
  border-radius: 6px;
  color: #fff;
  font-size: 18px;
}

.inputBox {
  position: relative;
}

#text {
  display: block;
  color: #000;
  font-weight: 300;
  font-style: italic;
  padding: 5px;
}

#form.invalid .inputBox:before {
  content: '';
  position: absolute;
  right: 12px;
  top: 9px;
  width: 24px;
  height: 24px;
  background: url("/invalid.png");
  background-size: cover;
  z-index: 1000;
}

#form.valid .inputBox:before {
  content: '';
  position: absolute;
  right: 12px;
  top: 9px;
  width: 24px;
  height: 24px;
  background: url("/valid.png");
  background-size: cover;
  z-index: 1000;
}

</style>
