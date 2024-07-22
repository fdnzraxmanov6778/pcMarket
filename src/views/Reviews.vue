<template>
  <div class="bigDiv">
    <div class="main">
      <div class="pageRegister">
        <h1>Register</h1>
        <input type="text" placeholder="user" />
        <input type="text" placeholder="email" />
        <textarea name="" id="" cols="30" rows="10" placeholder="comments"></textarea>
        <div>
          <button>Clear</button>
          <button>Send</button>
        </div>
      </div>
      <div class="pageContact">
        <h1>Contacts</h1>
        <div>
          <img src="../components/icons/email.svg" alt="" />
          <img src="../components/icons/tel.svg" alt="" />
          <img src="../components/icons/tg.svg" alt="" />
          <img src="../components/icons/insta.svg" alt="" />
          <img src="../components/icons/twitter.svg" alt="" />
        </div>
        <div class="address">
          <h1>Address</h1>
          <p>
            Shark Farmer's Market, 5A Microdistrict, 200100, Bukhara, Bukhara Region, Uzbekistan
          </p>
        </div>
      </div>
      <div class="pageAddress">
        <div>
          <h1>Location</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.7169464285416!2d64.41771184518349!3d39.746008617415725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5007363c52a249%3A0x792a8ff6bbab34ac!2sKorzinka%20%E2%80%94%20Buxoro%20-%203!5e0!3m2!1sru!2s!4v1720523878080!5m2!1sru!2s"
            width="400"
            height="300"
            style="border: 0"
            allowfullscreen="1"
            loading="lazy"
            filter="blur(100)"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',

  props: {
    movies: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
iframe {
  filter: contrast(1);
}
.bigDiv {
  width: 100vw;
  height: 100vh;
  background-color: rgb(28, 23, 39);
}
.main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  width: 1700px;
  height: fit-content;
  background-color: rgb(28, 23, 39);
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.pageRegister {
  width: 400px;
  height: fit-content;
  padding: 20px 0;
  background: none;
  margin-left: 80px;
}

.pageRegister input,
.pageRegister textarea {
  margin: 5px 0;
  /* margin-bottom: 20px; */
}
.pageRegister > h1 {
  text-align: center;
  font-size: 30px;
  padding-top: 10px;
  padding-bottom: 30px;
  overflow: hidden;
  background: none;
}
.pageRegister input {
  padding: 0 10px;
  width: 400px;
  height: 50px;
  border-radius: 5px;
  font-size: 2rem;
  outline: none;
  border: none;
  border: 2px solid rgb(93, 91, 91);
}

.pageRegister textarea {
  width: 400px;
  height: 200px;
  border-radius: 10px;
  font-size: 20px;
  padding: 10px 10px;
}
div > button {
  width: 190px;
  overflow: hidden;
  text-align: center;
  font-size: 20px;
  padding: 10px 50px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(130deg, #5f25d2 0%, #b381ff 100%);
  box-shadow: 0 0 10px rgb(0, 0, 0);
}
.pageRegister > div {
  display: flex;
  overflow: hidden;
  width: fit-content;
  gap: 20px;
  margin: 10px auto;
}
.pageContact,
.pageAddress {
  flex: 1;
  background-color: rgb(28, 23, 39);
  background: none;
  overflow: hidden;
}
.pageContact > div > img {
  width: 70px;
  height: 70px;
  margin: 20px 20px 20px 20px;
  padding: 0 20px;
  border-radius: 50%;
  background: linear-gradient(130deg, #5f25d2 0%, #b381ff 100%);
  filter: drop-shadow(0 0 10px rgb(0, 0, 0));
  transition: all 0.5s linear;
}
.pageContact > div > img:hover {
  transform: rotateY(180deg);
}
.pageContact > div {
  width: fit-content;
  margin: 0 auto;
  background: none;
}
img > svg {
  fill: white;
}
.pageContact > h1 {
  font-size: 30px;
  padding: 0 10px;
  width: fit-content;
  padding-top: 10px;
  padding-bottom: 10px;
  overflow: hidden;
  margin: 40px auto;
  background: none;
}
.pageContact {
  width: fit-content;
  background: none;
}
.pageAddress {
  background: none;
}
.pageAddress > div {
  margin: 50px auto;
  width: fit-content;
  background: none;
}
.pageAddress > div > h1 {
  font-size: 30px;
  width: fit-content;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 50px;
  background: none;
}
.address {
  width: fit-content;
  margin: 0 auto;
  background: none;
  position: relative;
  top: 30px;
}
.address > p {
  font-size: 20px;
  padding: 40px 0;
  text-align: center;
  background: none;
}
.address > h1 {
  font-size: 30px;
  width: fit-content;
  background: none;
  margin: 0 auto;
  background: none;
}
</style>
