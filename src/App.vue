<template>
  <div class="font-poppins">
    <Header />
    <div class="p-2">
      <Home />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Home
  },
}
</script>
