<template>
  <div class="main1">
    <div class="form1">
      <h1 class="text">{{ buttonText }}</h1>
      <div class="tr">
        <RouterLink class="btn" to="/about1">
          <button class="btn1" @mouseover="activeButton = 1" @mouseleave="activeButton = 0">
            more
          </button>
        </RouterLink>
        <RouterLink class="btn" to="/about2">
          <button class="btn2" @mouseover="activeButton = 2" @mouseleave="activeButton = 0">
            more
          </button>
        </RouterLink>
      </div>
    </div>
    <div class="form2">
      <h1>Sponsors</h1>
      <marquee behavior="alternate" direction="right">
        <img src="../picture/span1.png" alt="" />
        <img src="../picture/span2.png" alt="" />
        <img src="../picture/span3.png" alt="" />
        <img src="../picture/span4.png" alt="" />
        <img src="../picture/span5.png" alt="" />
        <img src="../picture/span6.png" alt="" />
        <img src="../picture/span7.png" alt="" />
      </marquee>
    </div>
    <div class="form3"></div>
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Footer
  },
  data() {
    return {
      activeButton: 0
    }
  },
  computed: {
    buttonText() {
      if (this.activeButton === 1) {
        return 'Learn more'
      } else if (this.activeButton === 2) {
        return 'Interstellar'
      } else {
        return 'We are always striving for you'
      }
    }
  }
}
</script>
<style scoped>
.main1 {
  padding-left: 300px;
  background: none;
  background-color: rgb(28, 23, 39);
}

.form1 {
  padding-top: 400px;
  height: 100vh;  
  display: flex;
  flex-direction: column;
  background: none;
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
.form1 > h1 {
  font-size: 5rem;
  text-align: center;
  text-shadow: 3px 3px 20px black;
  background: none;
}

.tr > .btn > button {
  width: 160px;
  height: 50px;
  font-size: 2rem;
  margin: 50px 30px;
  background: linear-gradient(130deg, #5f25d2 0%, #b381ff 100%);
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 10px rgb(0, 0, 0);
  text-shadow: 2px 3px 10px black;
}
.form1 > .tr > a {
  background: none;
  background-color: rgb(28, 23, 39);
}
.tr {
  display: flex;
  gap: 20px;
  margin: 20px auto;
  background: none;
}

.form2 {
  /* padding: 50px 0;
  background: linear-gradient(-45deg, #130f40, #020e29, #130f40, #041337);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite; */
}

.form2 > h1 {
  font-size: 5rem;
  text-align: center;
  text-shadow: 3px 3px 20px black;
  padding: 50px 0 10px;
}

marquee > img {
  width: 180px;
  height: 90px;
  margin: 100px 30px;
}
</style>
