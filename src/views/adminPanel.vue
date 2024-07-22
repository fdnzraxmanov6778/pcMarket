<template>
  <div class="main">
    <div class="page1">
      <img v-if="imgBackVisible" :src="imgBack" alt="" class="imgBack" />
      <button @click="openFileDialog">Upload</button>
      <input type="file" ref="fileInput" @change="handleFileUpload" style="display: none" />
      <div v-if="images.length">
        <ul>
          <li
            style="background-color: rgb(28, 23, 39)"
            v-for="(image, index) in images"
            :key="index"
          >
            <img
              :src="image.url"
              :alt="image.name"
              style="
                z-index: 1000;
                display: block;
                width: 200px;
                height: 200px;
                border: 5px solid rgb(68, 71, 144);
                margin: 40px;
              "
            />
          </li>
        </ul>
      </div>
      <tr>
        <h1>Raxmanov Abduraxim</h1>
        <h3>abduraximraxmanov1@gmail.com</h3>
      </tr>
    </div>
    <div class="page2">
      <router-link class="link" to="/dashboard">
        <h1>Dashboard</h1>
        <img src="../picture/dashboard.png" alt="" />
      </router-link>
      <router-link class="link" to="/user">
        <h1>User Management</h1>
        <img src="../picture/user.png" alt="" />
      </router-link>
      <router-link class="link" to="/product">
        <h1>Product Management</h1>
        <img src="../picture/product.png" alt="" />
      </router-link>
      <router-link class="link" to="/order">
        <h1>Order Management</h1>
        <img src="../picture/order.png" alt="" />
      </router-link>
      <router-link class="link" to="/payments">
        <h1>Payments and Reports</h1>
        <img src="../picture/payments.png" alt="" />
      </router-link>
      <router-link class="link" to="/messages">
        <h1>Notifications and Messages</h1>
        <img src="../picture/message.png" alt="" />
      </router-link>
      <router-link class="link" to="/settings">
        <h1>Settings</h1>
        <img src="../picture/settings.png" alt="" />
      </router-link>
      <router-link class="link" to="/help">
        <h1>Help and Support</h1>
        <img src="../picture/help.png" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      imgBack: `../assets/profile.jpg`,
      imgBackVisible: true
    }
  },
  methods: {
    openFileDialog() {
      this.$refs.fileInput.click()
    },
    handleFileUpload(event) {
      const files = event.target.files
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        const reader = new FileReader()
        reader.onload = (e) => {
          this.images = []
          this.imgBackVisible = false
          this.images.push({ url: e.target.result, name: file.name })
        }
        reader.readAsDataURL(file)
      }
    }
  }
}
</script>

<style scoped>
.main {
  background-color: rgb(28, 23, 39);
}
.page1 {
  width: 1500px;
  height: fit-content;
  display: flex;
  margin: 100px auto;
  background-color: rgb(28, 23, 39);
  border-bottom: 2px solid #ccc;
}
.page1 > img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid rgb(255, 255, 255);
  margin: 40px;
  background: linear-gradient(135deg, #241b35 0%, #4e455e 100%);
}
.imgBack {
  background: none;
}
.page1 > tr {
  height: fit-content;
  margin: 80px 10px;
  background: none;
}
tr > h1 {
  font-size: 4rem;
  text-transform: uppercase;
  color: #6c35de;
  background: none;
}
tr > h3 {
  margin-top: 10px;
  margin-left: 10px;
  font-size: 2.5rem;
  text-shadow: 0 0 10px black;
  background: none;
}
.page1 > button {
  width: 60px;
  height: 60px;
  position: absolute;
  border: none;
  border-radius: 50%;
  filter: drop-shadow(0 0 10px rgb(59, 2, 2));
  background: none;
  background-color: #6c35de;
  text-align: center;
  place-content: center;
  justify-content: end;
  margin: 180px;
}
li > img {
  border: 2px solid black;
  width: 200px;
  height: 200px;
  height: fit-content;
  border-radius: 50%;
}
.page1 {
  background: none;
  width: 1400px;
  padding: 0 20px;
}
.page2 > .link > h1 {
  font-size: 3rem;
  width: 200px;
  height: 100px;
  text-align: center;
  margin: 20px auto;
  background: none;
  justify-content: center;
  align-content: center;
  text-shadow: 0 0 30px black;
}
.page2 {
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin: 0 auto;
  padding: 20px 50px;
  user-select: none;
  background: none;
}
.page2 > .link {
  width: 300px;
  height: 400px;
  margin: 20px 20px;
  background: linear-gradient(130deg, #5f25d2 0%, #b381ff 100%);
  transition: all 0.2s linear;
  text-decoration: none;
  border-radius: 10px;
}
.page2 > .link > img {
  width: 200px;
  height: 200px;
  background: none;
  margin-left: 50px;
  filter: drop-shadow(0 10px 30px rgb(0, 0, 0));
  pointer-events: none;
}
.page2 > .link:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px -5px #342a45;
}
</style>
