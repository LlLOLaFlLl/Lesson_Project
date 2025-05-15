<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__container container">
        <div class="header__logo">
          <span>НАШ</span>
          <span class="header__dot"></span>
          <span>ГУРУ</span>
        </div>

        <div class="city-selector header__city-selector" v-show="!isMobile">
          <button class="city-selector__current" @click="toggleCityDropdown">
            {{ currentCity }}
            <svg class="city-selector__icon" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </button>

          <transition name="fade">
            <ul v-if="showCityDropdown" class="city-selector__dropdown">
              <li v-for="city in cities" :key="city" class="city-selector__item" @click="selectCity(city)">
                {{ city }}
              </li>
            </ul>
          </transition>
        </div>

        <!-- Навигация -->
        <nav class="header__nav">
          <ul class="header__menu">
            <li v-for="(item, index) in menuItems" :key="index" class="header__menu-item">
              <a href="#" class="header__link">{{ item }}</a>
            </li>
          </ul>
        </nav>

        <!-- Кнопки -->
        <div class="header__actions">
          <button class="header__action header__action--search">
            <svg class="header__icon" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </button>
          <button class="header__action header__action--auth" @click="openAuthPanel">
            <svg class="header__icon" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </button>
          <button class="header__action header__action--menu" @click="toggleMainMenu">
            <svg class="header__icon" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <MainMenu v-if="isMenuOpen" />
    <Auth :show="showAuthPanel" @close="closeAuthPanel" />
    <MainMenu v-if="isMenuOpen" @close="isMenuOpen = false" />
  </header>
</template>

<script>
import Auth from '@/components/auth/auth.vue'
import MainMenu from '@/components/MainMenu/MainMenu.vue'

export default {
  name: 'Header',
  components: {
    Auth,
    MainMenu
  },
  
  data() {
    return {
      lastScrollPosition: 0,
      menuItems: ['АФИША', 'Концерты', 'Кино', 'Театры', 'Город', 'Где поесть', 'Публикации'],
      currentCity: 'Севастополь',
      showCityDropdown: false,
      cities: ['Севастополь', 'Весь Крым', 'Симферополь', 'Алупка', 'Алушта'],
      showAuthPanel: false,
      isMenuOpen: false,
      isMobile: false
    }
  },
  mounted() {
    this.checkViewport()
    window.addEventListener('resize', this.checkViewport)
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkViewport)
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    checkViewport() {
      this.isMobile = window.innerWidth < 576
    },
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) return

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) return

      const header = this.$el
      header.style.transform = currentScrollPosition > this.lastScrollPosition
        ? 'translateY(-100%)'
        : 'translateY(0)'
      this.lastScrollPosition = currentScrollPosition
    },
    toggleCityDropdown() {
      this.showCityDropdown = !this.showCityDropdown
    },
    selectCity(city) {
      this.currentCity = city
      this.showCityDropdown = false
    },
    openAuthPanel() {
      this.showAuthPanel = true
    },
    closeAuthPanel() {
      this.showAuthPanel = false
    },
    toggleMainMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style lang="scss" scoped>
@import './header.scss';
</style>
