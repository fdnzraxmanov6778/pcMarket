<template>
  <div class="main">
    <div class="page1">
      <h1 @click="toggleFunc">Pages ↴</h1>
      <ul class="ul" v-if="show">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li>
          <RouterLink @click="addFunc" class="link" to=""><h1>Category ↴</h1></RouterLink>
          <div class="little">
            <router-link v-if="show2" class="routerLink" to="/pcViews"
              ><h1 class="router">PC</h1></router-link
            >
            <router-link v-if="show2" class="routerLink" to="/laptop"
              ><h1 class="router">Laptop</h1></router-link
            >
            <router-link v-if="show2" class="routerLink" to="/gadgets"
              ><h1 class="router">Gadgets</h1></router-link
            >
            <RouterLink v-if="show2" class="routerLink" to="/monitors"
              ><h1 class="router">Monitors</h1></RouterLink
            >
            <RouterLink v-if="show2" class="routerLink" to="/gamingChairs"
              ><h1 class="router">Chairs</h1></RouterLink
            >
          </div>
        </li>
        <li>
          <RouterLink style="position: relative; bottom: 10px" to="/reviews">Contact</RouterLink>
        </li>
      </ul>
    </div>
    <div class="page2">
      <h1 @click="brandsFunc">Brands ↴</h1>
      <div class="brandsDiv" v-if="show3">
        <li><a href="">Asus </a></li>
        <li><a href="">Samsung </a></li>
        <li><a href="">Dell </a></li>
        <li><a href="">Razer </a></li>
        <li><a href="">Hp </a></li>
        <li><a href="">Acer </a></li>
        <li><a href="">Msi </a></li>
        <li><a href="">Lenovo </a></li>
        <li><a href="">Lg </a></li>
        <li><a href="">Hyper-X </a></li>
        <li><a href="">Apple </a></li>
        <li><a href="">Microsoft </a></li>
      </div>
    </div>
    <div class="page3">
      <h1 @click="contact">Social networks ↴</h1>
      <a v-if="show4" href=""
        ><img src="../components/iconFooter/insta.svg" alt="" /> <br />
        <h1>Instagram</h1></a
      >
      <a v-if="show4" href=""
        ><img src="../components/iconFooter/facebook.svg" alt="" /> <br />
        <h1>Facebook</h1>
      </a>
      <a v-if="show4" href=""
        ><img src="../components/iconFooter/twitter.svg" alt="" /> <br />
        <h1>Twitter</h1>
      </a>
      <a v-if="show4" href=""
        ><img src="../components/iconFooter/youtube.svg" alt="" /> <br />
        <h1>YouTube</h1>
      </a>
    </div>
  </div>
</template>
<style scoped>
.main {
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid #4d425f;
  user-select: none;
  transition: all 0.3s linear;
}
.main::-webkit-scrollbar {
  width: 3px;
}
.main::-webkit-scrollbar-track {
  background: #ffffff;
}
.main::-webkit-scrollbar-thumb {
  background: #0a053e;
}
.page1 {
  transition: all 1s linear;
  margin: 100px auto 0 auto;
}
.page1 > h1 {
  font-size: 2.5rem;
  cursor: pointer;
  border-bottom: 1px solid rgb(76, 83, 118);
  margin: 10px 20px;
  padding-bottom: 10px;
  color: #ffffff;
}
.page1 > ul {
  list-style-type: none;
  list-style: none;
  margin-left: 40px;
  padding-left: 10px;
  transition: all 1s linear;
  border-left: 1px dashed rgb(76, 83, 118);
}
.ul-list {
  display: block;
}
.page1 > ul > li {
  text-decoration: none;
  list-style: none;
  padding: 5px 5px;
  transition: all 1s linear;
}
.page1 > ul > li > a {
  text-decoration: none;
  font-size: 2rem;
}
.little {
  /* padding-left: 30px; */
}
.router {
  font-size: 1.7rem;
  padding: 5px 5px;
  text-decoration: none;
  padding-top: 10px;
  padding-left: 20px;
  transition: all 1s linear;
  border-left: 1px dashed rgb(76, 83, 118);
}
.routerLink {
  text-decoration: none;
  position: relative;
  bottom: 10px;
  left: 30px;
  transition: all 1s linear;
}
.link > h1 {
  font-size: 2rem;
  height: fit-content;
  position: relative;
  bottom: 10px;
}
.brandsDiv {
  margin: 10px 40px;
  padding: 10px 0 10px 20px;
  border-left: 1px dashed rgb(76, 83, 118);
  font-weight: 700;
}
.brandsDiv > li {
  overflow: hidden;
  list-style: none;
  padding: 4px 0;
}
.brandsDiv > li > a {
  text-decoration: none;
  font-size: 2rem;
  text-transform: capitalize;
}
.page2 > h1 {
  color: #ffffff;
  font-size: 2.5rem;
  cursor: pointer;
  border-bottom: 1px solid rgb(76, 83, 118);
  margin: 10px 20px;
  padding-bottom: 10px;
}
.page3 > a > img {
  width: 50px;
  border: 2px solid #6c35de;
  border-radius: 50%;
  padding: 10px 10px;
  gap: 10px;
  transition: all 0.2s linear;
}
.page3 > a {
  display: flex;
  gap: 10px;
  padding: 5px 40px;
  width: fit-content;
  text-decoration: none;
  transition: all 1s linear;
}
a > h1 {
  font-size: 1.7rem;
  padding-top: 10px;
}
.page3 {
  display: block;
  cursor: pointer;
  transition: all 1s linear;
}
.page3 > h1 {
  margin: 10px 20px;
  border-bottom: 1px solid rgb(76, 83, 118);
  font-size: 2.5rem;
  color: #ffffff;
  padding-bottom: 10px;
}
.page3 > a > img:hover {
  transform: rotateY(30deg);
  background-color: white;
}
</style>
<script>
export default {
  data() {
    return {
      show: false,
      show2: false,
      show3: false,
      show4: false
    }
  },
  methods: {
    toggleFunc() {
      this.show = !this.show
    },
    addFunc() {
      this.show2 = !this.show2
    },
    brandsFunc() {
      this.show3 = !this.show3
    },
    contact() {
      this.show4 = !this.show4
    }
  }
}
</script>
