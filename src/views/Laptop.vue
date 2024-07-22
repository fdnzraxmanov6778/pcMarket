<template>
  <div class="main">
    <div class="page">
      <div class="page1">
        <button class="btn">ᐸ</button>
        <div class="box1" v-for="lp in lpSlide" :key="lp.image">
          <img :class="imgPC" :src="lp.image" alt="" />
          <p>{{ lp.text }}</p>
          <button @click="toggleAddList" class="btnAdd">to the cart</button>
        </div>
        <button class="btn">ᐳ</button>
      </div>
      <div v-if="showAddList" class="addList">
        <!-- Add your content here -->
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
    return {
      lpSlide: [
        {
          image: `../src/picture/laptop.png`,
          text: `Asus ROG Strix GeForce RTX4050 6GB GDDR6 | Intel Core i7-13650HX`
        },
        {
          image: `../src/picture/laptop.png`,
          text: `Asus ROG Strix GeForce RTX4050 6GB GDDR6 | Intel Core i7-13650HX`
        },
        {
          image: `../src/picture/laptop.png`,
          text: `Asus ROG Strix GeForce RTX4050 6GB GDDR6 | Intel Core i7-13650HX`
        }
      ],
      showAddList: false
    }
  },
  methods: {
    toggleAddList() {
      this.showAddList = !this.showAddList
      if (this.showAddList) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    }
  }
}
</script>
<style scoped>
body.no-scroll {
  overflow: hidden;
}

.imgPC {
  width: 200px;
  height: 200px;
  transition: all 0.2s linear;
}
.addList {
  width: 1600px;
  height: 700px;
  background: none;
  border: 2px solid rgb(77, 7, 7);
  border-radius: 10px;
  box-shadow: 0 0 50px rgb(72, 3, 3);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(20px);
  position: fixed;
  pointer-events: all;
}
.page {
  width: fit-content;
  height: 100vh;
  padding: 100px 100px;
  margin: 200px auto;
  margin-left: 300px;
}
.page1 {
  display: flex;
  width: 1200px;
  height: fit-content;
}
.page1 > .box1 > img {
  width: 200px;
  margin: 10px auto;
  margin: 20px 0 20px 50px;
  transition: all 0.2s linear;
  pointer-events: none;
}
.box1 {
  width: fit-content;
  height: fit-content;
  backdrop-filter: blur(10px);
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
