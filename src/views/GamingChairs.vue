<template>
  <div class="main">
    <div class="page">
      <div class="page1">
        <button class="btn">ᐸ</button>
        <div class="box1">
          <img src="../picture/chairs.png" alt="" />
          <p>Noblechairs HERO ST Gaming Chair – Black Edition</p>
          <button>to the cart</button>
        </div>
        <div class="box1">
          <img src="../picture/chairs.png" alt="" />
          <p>Noblechairs HERO ST Gaming Chair – Black Edition</p>
          <button>to the cart</button>
        </div>
        <div class="box1">
          <img src="../picture/chairs.png" alt="" />
          <p>Noblechairs HERO ST Gaming Chair – Black Edition</p>
          <button>to the cart</button>
        </div>

        <button class="btn">ᐳ</button>
      </div>
      <div class="page2"></div>
      <div class="page3"></div>
    </div>
  </div>
  <Footer />
</template>
<script>
import Footer from '@/components/Footer.vue'
export default {
  name: 'PcViews',
  components: {
    Footer
  },
  data() {
    pcSlide: [
      {
        image: `../picture/pc1.png`,
        text: `Intel-Pentium G6400 4.0 GHz | ОЗУ 8GB DDR4 | M.2 SSD 256 GB`
      }
    ]
  }
}
</script>
<style scoped>
.main {
}
.page {
  width: fit-content;
  height: 100vh;
  padding: 100px 100px;
  margin: 200px auto;
  margin-left: 300px;
}
.page1 {
  /* border: 2px solid white; */
  /* display: grid;
  grid-template-columns: repeat(4, 1fr); */
  display: flex;
  width: 1200px;
  height: fit-content;
}
.page1 > .box1 > img {
  width: 200px;
  margin: 10px auto;
  margin: 20px 0 20px 50px;
  transition: all 0.2s linear;
}
.box1 {
  width: fit-content;
  height: fit-content;
  backdrop-filter: blur(10);
  border: 2px solid rgb(125, 5, 5);
  box-shadow: 0 0 30px rgb(60, 2, 2);
  border-radius: 10px;
  margin: 30px auto;
}
.box1 > p {
  width: 300px;
  font-size: 20px;
  text-align: center;
  padding: 0 30px;
  transition: all 0.2s linear;
}
.box1 > button {
  width: 100px;
  height: 40px;
  margin: 30px 0 20px 100px;
  border: none;
  background-color: rgb(138, 8, 8);
  border-radius: 5px;
  font-size: 13px;
}
.box1 > button:hover {
  animation: animate 0.3s linear;
}
.box1 > button:active {
  scale: 0.95;
}
@keyframes animate {
  0% {
    transform: scaleX(1.1);
  }
  100% {
    transform: scaleX(1);
  }
}
.box1:hover p {
  color: red;
}
.box1:hover img {
  transform: perspective(6000px) scaleY(0.95) scaleX(1.1);
}
.btn {
  width: 50px;
  height: 50px;
  margin: 200px auto;
  font-size: 30px;
  border: none;
}
</style>
