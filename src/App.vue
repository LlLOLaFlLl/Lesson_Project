<template>
  <div class="app-wrapper">
    <!-- Передаём currentCity в Header и слушаем событие update-city -->
    <Header :current-city="currentCity" @update-city="updateCity" />

    <main class="main-content">
      <!-- Прокидываем currentCity во все страницы через router-view -->
      <router-view :current-city="currentCity" />
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header/header.vue'
import Footer from '@/components/footer/footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      currentCity: 'Севастополь' // значение по умолчанию
    }
  },
  methods: {
    updateCity(city) {
      this.currentCity = city
    }
  }
}
</script>


<style lang="scss">
*, *::before, *::after {
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  padding-top: calc(40px + 2 * 20px);
  background-color: white;
}

body {
  overflow-x: clip;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding-top: calc(40px + 2 * 20px);
  z-index: 1;
}
</style>
