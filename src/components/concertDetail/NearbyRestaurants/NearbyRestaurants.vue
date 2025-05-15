<template>
  <section class="restaurants-section">
    <div class="restaurants-header">
      <h2 class="restaurants-title">Где поесть?</h2>
      <div class="restaurants-actions">
        <a href="#" class="view-all">Смотреть все {{ total }} ресторанов</a>
        <button
          v-if="windowWidth > 768"
          @click="prevSlide"
          class="nav-btn"
          :disabled="startIndex === 0"
        >‹</button>
        <button
          v-if="windowWidth > 768"
          @click="nextSlide"
          class="nav-btn"
          :disabled="startIndex + itemsPerPage >= restaurants.length"
        >›</button>
      </div>
    </div>

    <div
      class="restaurants-carousel"
      @touchstart="startTouch"
      @touchend="endTouch"
    >
      <div
        class="restaurant-card"
        v-for="(restaurant, index) in visibleRestaurants"
        :key="startIndex + index"
      >
        <img :src="restaurant.image" alt="restaurant" />
        <div class="info">
          <h3>{{ restaurant.name }}</h3>
          <p class="type">{{ restaurant.type }}</p>
          <p class="details">от {{ restaurant.price }} ₽ · {{ restaurant.distance }} м</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sushi from '@/assets/images/restaurants/sushi.jpg'
import smoke from '@/assets/images/restaurants/smoke.jpg'
import grill from '@/assets/images/restaurants/grill.jpg'
import veggie from '@/assets/images/restaurants/vegitables.jpg'
import pasta from '@/assets/images/restaurants/eu_food.jpg'
import bistro from '@/assets/images/restaurants/grill.jpg'
import burger from '@/assets/images/restaurants/eu_food.jpg'
import chaikhana from '@/assets/images/restaurants/grill.jpg'

export default {
  name: 'NearbyRestaurants',
  data() {
    return {
      startIndex: 0,
      itemsPerPage: 6,
      windowWidth: window.innerWidth,
      touchStartX: 0,
      touchEndX: 0,
      restaurants: [
        { name: 'Sushi Place', type: 'Японская кухня', price: 800, distance: 250, image: sushi },
        { name: 'Smoke Bar', type: 'Кальян-бар', price: 1200, distance: 500, image: smoke },
        { name: 'Grill House', type: 'Стейки и гриль', price: 1000, distance: 300, image: grill },
        { name: 'Veggie Café', type: 'Вегетарианское', price: 600, distance: 450, image: veggie },
        { name: 'Bunin Bar', type: 'Итальянская кухня', price: 900, distance: 200, image: pasta },
        { name: 'Коровка', type: 'Русская кухня', price: 700, distance: 150, image: bistro },
        { name: 'Burger & Beer', type: 'Фастфуд', price: 500, distance: 600, image: burger },
        { name: 'Chaikhana', type: 'Восточная кухня', price: 750, distance: 400, image: chaikhana }
      ]
    }
  },
  computed: {
    visibleRestaurants() {
      return this.restaurants.slice(this.startIndex, this.startIndex + this.itemsPerPage)
    },
    total() {
      return this.restaurants.length
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    nextSlide() {
      if (this.startIndex + this.itemsPerPage < this.restaurants.length) {
        this.startIndex++
      }
    },
    prevSlide() {
      if (this.startIndex > 0) {
        this.startIndex--
      }
    },
    handleResize() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 768) {
        this.itemsPerPage = 1.5
      } else if (this.windowWidth <= 1024) {
        this.itemsPerPage = 3
      } else {
        this.itemsPerPage = 6
      }
    },
    startTouch(e) {
      this.touchStartX = e.changedTouches[0].screenX
    },
    endTouch(e) {
      this.touchEndX = e.changedTouches[0].screenX
      const deltaX = this.touchEndX - this.touchStartX
      if (Math.abs(deltaX) > 50) {
        deltaX < 0 ? this.nextSlide() : this.prevSlide()
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "./NearbyRestaurants.scss";
</style>
