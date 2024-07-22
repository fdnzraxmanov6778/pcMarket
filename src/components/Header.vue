<template>
  <div @mouseenter="hideHeaderShadow" @mouseleave="showHeaderShadow" class="header">
    <div class="div1">
      <img alt="Vue logo" class="logo" src="@/assets/favicon2.png" width="50px" height="40x" />
      <a href="/"><h1>rogTech</h1></a>
    </div>
    <div class="div3">
      <input class="inputSearch" type="search" placeholder="Search" v-if="show" />
      <img @click="inputShow" class="iconSearch" src="../components/icons/search.svg" alt="" />
      <RouterLink to="/adminPanel">
        <img class="adminPanel" src="../components/icons/admin.svg" alt="" />
      </RouterLink>
    </div>
  </div>
</template>
<style scoped>
.dropdown {
  position: absolute;
  top: 30px;
  display: none;
}
.adminPanel {
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-top: 25px;
}
.header {
  width: 100vw;
  height: 80px;
  display: flex;
  position: absolute;
  justify-content: space-between;
  padding: 0 70px;
  z-index: 100;
  position: fixed;
  display: flex;
  overflow: hidden;
  border: 2px solid #4d425f;
}
.classAdd {
  box-shadow: 0 -5px 20px #000;
}
select {
  width: 80px;
  height: 30px;
  font-size: 2rem;
  text-align: center;
  justify-content: center;
  border-radius: 5px;
  margin-top: 25px;
}
ul {
  display: flex;
  gap: 60px;
  list-style: none;
  align-items: center;
  overflow: hidden;
}
ul > li > a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 1.8rem;
  padding: 30px 5px;
}
img {
  margin: 15px 0px;
  width: 4rem;
  height: 3.5rem;
}
a {
  text-decoration: none;
  display: flex;
  font-size: 1.8rem;
}
.div1 {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  overflow: hidden;
}
.div3 {
  display: flex;
  gap: 30px;
  overflow: hidden;
}
a > h1 {
  text-decoration: none;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 20px;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  color: rgb(255, 255, 255);
  margin: 15px 5px;
}
.iconSearch {
  cursor: pointer;
  width: 2rem;
  margin-top: 25px;
  user-select: none;
}
.inputSearch {
  padding: 10px 0;
  margin: 20px 0 20px 10px;
  width: 300px;
  border-radius: 10px;
  color: white;
  font-size: 2rem;
  padding: 20px 10px;
  animation: animateInput 0.5s forwards;
  position: relative;
  box-shadow: 0 0 3px white;
  border: none;
  outline: none;
}

@keyframes animateInput {
  0% {
    transform: translateX(20%);
    opacity: 0;
  }
  100% {
    transform: translateX();
    opacity: 1;
  }
}
</style>

<script>
const header = document.querySelector('.header')
export default {
  methods: {},

  name: 'Header',
  data() {
    return {
      isOpen: false,
      show: false
    }
  },
  methods: {
    closeDropdown() {
      this.isOpen = false
    },
    inputShow() {
      this.show = !this.show
    }
  },
  hideHeaderShadow() {
    const main = document.querySelector(`.header`)
    const back = (main.style.height = `200px`)
    this.$nextTick(() => {
      const header = document.querySelector('.header')
      if (header == back) {
        header.style.boxShadow = 'none'
      }
    })
  },
  showHeaderShadow() {
    this.$nextTick(() => {
      const header = document.querySelector('.header')
      if (header) {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'
      }
    })
  }
}
</script>
