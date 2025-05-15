<template>
  <section class="hotels-section">
    <div class="hotels-header">
      <h2 class="hotels-title">Где остановиться?</h2>
      <div class="hotels-actions">
        <a href="#" class="view-all">Смотреть все {{ total }} отелей</a>
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
          :disabled="startIndex + itemsPerPage >= hotels.length"
        >›</button>
      </div>
    </div>

    <div
      class="hotels-carousel"
      @touchstart="startTouch"
      @touchend="endTouch"
    >
      <div
        class="hotel-card"
        v-for="(hotel, index) in visibleHotels"
        :key="startIndex + index"
      >
        <img :src="hotel.image" alt="hotel" />
        <div class="info">
          <h3>{{ hotel.name }}</h3>
          <p class="type">{{ hotel.type }}</p>
          <p class="details">от {{ hotel.price }} ₽ · {{ hotel.distance }} м</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import more from '@/assets/images/hotels/more.jpg'
import villa from '@/assets/images/hotels/villa.jpg'
import hostel from '@/assets/images/hotels/hostel.jpg'
import south from '@/assets/images/hotels/south.jpg'
import seaview from '@/assets/images/hotels/seaview.jpg'
import mini from '@/assets/images/hotels/mini.jpg'
import retro from '@/assets/images/hotels/south.jpg'
import eco from '@/assets/images/hotels/hostel.jpg'

export default {
  name: 'NearbyHotels',
  data() {
    return {
      startIndex: 0,
      itemsPerPage: 6,
      windowWidth: window.innerWidth,
      touchStartX: 0,
      touchEndX: 0,
      hotels: [
        { name: 'Мрия ресорт & СПА %*', type: '', price: 4200, distance: 300, image: more },
        { name: 'Ялта Интурист 4*', type: 'Ялта', price: 3000, distance: 450, image: villa },
        { name: 'Море СПА Ресорт 4*', type: 'Алушта', price: 900, distance: 150, image: hostel },
        { name: 'Ливадийский 3*', type: 'Ялта', price: 3200, distance: 200, image: south },
        { name: 'Бутик-отель Мускатель 4*', type: '', price: 7500, distance: 600, image: seaview },
        { name: 'Ялта круглый год 3*', type: '', price: 2700, distance: 100, image: mini },
        { name: 'Ретро-отель', type: '', price: 3500, distance: 400, image: retro },
        { name: 'Эко-отель Лесной', type: '', price: 3900, distance: 500, image: eco }
      ]
    }
  },
  computed: {
    visibleHotels() {
      return this.hotels.slice(this.startIndex, this.startIndex + this.itemsPerPage)
    },
    total() {
      return this.hotels.length
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
      if (this.startIndex + this.itemsPerPage < this.hotels.length) {
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
@import "./NearbyHotels.scss";
</style>
