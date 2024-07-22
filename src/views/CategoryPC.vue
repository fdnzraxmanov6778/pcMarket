<template>
  <div>
    <h1>Hello</h1>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'CategoryPC',
  components: {
    Footer
  }
}
</script>
<style scoped>
* {
  position: relative;
}
div {
  border: 2px solid black;
  width: fit-content;
  margin: 100px auto;
}
h1 {
  color: red;
  font-size: 10rem;
}
</style>
