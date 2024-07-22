<script setup>
import Footer from '../components/Footer.vue'
</script>

<template>
  <main @wheel="handleScroll" class="mainHome">
    <div @mouseenter="hideHeaderShadow" @mouseleave="showHeaderShadow" class="page1">
      <div class="nameCompany">
        <h1>Hello welcome to our store</h1>
        <p>We bring you only the best, hang with us</p>
      </div>
      <div class="imgCompany">
        <img src="../picture/homeImg.png" alt="" class="shadowed-image" />
        <h1>
          ASUS ZenBook Pro 14 Duo OLED <br />
          Price : 1500$
        </h1>
        <p>
          Intel Core i5-12500H| DDR5 16GB| SSD 1TB NVMe| 14.5 2.8K OLED WQXGA+| Intel Iris Xe
          Graphics| W11H| RU| Black
        </p>
        <!-- <MyIcon /> -->
      </div>
    </div>
    <div class="page2">
      <marquee class="custom-marquee" behavior="alternate" decoration="left">
        <img src="../picture/mon1.png" alt="" />
        <img src="../picture/mon2.png" alt="" />
        <img src="../picture/mon3.png" alt="" />
        <img src="../picture/mon4.png" alt="" />
        <img src="../picture/mon5.png" alt="" />
      </marquee>
      <marquee class="custom-marquee2" behavior="alternate" direction="right">
        <img src="../picture/not1.png" alt="" />
        <img src="../picture/not2.png" alt="" />
        <img src="../picture/not3.png" alt="" />
        <img src="../picture/not4.png" alt="" />
        <img src="../picture/not5.png" alt="" />
      </marquee>
    </div>
    <div class="page3"></div>
    <Header />
    <Footer />
  </main>
</template>
<style scoped>
.custom-marquee {
  animation: marquee 10s linear infinite;
}
.custom-marquee2 {
  display: flex;
  gap: 50px;
  padding: 10px 0;
  background: none;
}
.mainHome {
  height: fit-content;
  margin-left: 300px;
  background-color: rgb(28, 23, 39);
}
.custom-marquee > img {
  transform: perspective(1200px) rotateY(40deg) rotateX(5deg);
  width: 350px;
  background: none;
}
.custom-marquee2 > img {
  padding: 0 50px;
  width: 350px;
  margin-bottom: 100px;
  background: none;
}
.page1 {
  width: fit-content;
  height: fit-content;
  display: flex;
  margin: 200px auto;
  pointer-events: none;
  gap: 20px;
  background: none;
}
.page2 {
  display: block;
  margin: 0 auto;
  background: none;
}
.page3 {
  background-image: url(../assets/page3.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 60vh;
  background-attachment: fixed;
}
.custom-marquee {
  white-space: nowrap;
  display: flex;
  background: none;
}
.imgCompany > img {
  background: none;
  width: 300px;
  height: fit-content;
  position: relative;
  top: 50px;
  left: 50px;
  filter: drop-shadow(0 0 20px rgb(28, 28, 28));
  /* transform: perspective(1100px) rotateY(12deg) rotateX(5deg); */
}
.imgCompany {
  overflow-y: hidden;
  width: 700px;
  height: 690px;
  background: linear-gradient(135deg, #241b35 0%, #30273e 100%);
  border-radius: 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
}
.nameCompany > h1 {
  font-size: 5rem;
  width: fit-content;
  padding: 100px 60px;
  border: 2px solid black;
  background: linear-gradient(130deg, #5f25d2 0%, #b381ff 100%);
  border-radius: 20px;
  text-align: center;
  text-shadow: 0 0 20px black;
}
.nameCompany > p {
  font-size: 4rem;
  width: fit-content;
  padding: 90px 60px;
  border-radius: 20px;
  background: linear-gradient(135deg, #241b35 0%, #30273e 100%);
  margin: 15px 0;
  text-align: center;
  text-shadow: 0 0 10px black;
}
.nameCompany {
  width: 500px;
  border-radius: 20px;
  display: block;
  background: none;
}
.imgCompany > h1 {
  background: linear-gradient(130deg, #5f25d2 0%, #b381ff 100%);
  width: 250px;
  padding: 50px 40px;
  height: fit-content;
  border-radius: 10px;
  font-size: 2.5rem;
  position: relative;
  top: 25%;
  right: 82%;
  filter: drop-shadow(0 0 20px #282230);
}
.imgCompany > p {
  font-size: 2.5rem;
  width: 600px;
  padding: 90px 60px;
  height: fit-content;
  border-radius: 10px;
  background: linear-gradient(135deg, #342a45 0%, #3d344d 100%);  
  text-align: center;
  position: relative;
  top: 0;
  left: 8%;
  filter: drop-shadow(0 0 10px #282230);
}
</style>

<script>
export default {
  name: 'Home',
  components: {
    // Header,
    Footer
  },
  methods: {}
}
</script>
