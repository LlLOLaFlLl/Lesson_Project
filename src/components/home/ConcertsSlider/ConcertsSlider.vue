<template>
  <section class="concerts-slider">
    <div class="concerts-slider__header">
  <div class="concerts-slider__title-block">
    <h2 class="concerts-slider__title">
      Концерты в <span class="concerts-slider__city">Севастополе</span>
    </h2>
    <router-link to="/concerts" class="concerts-slider__link">Все концерты</router-link>
  </div>
  <div class="concerts-slider__nav">
    <button @click="slidePrev" class="nav-button">‹</button>
    <button @click="slideNext" class="nav-button">›</button>
  </div>
</div>


    <Swiper
      :slides-per-view="6"
      :space-between="20"
      :loop="true"
      :breakpoints="breakpoints"
      @swiper="onSwiper"
    >
      <SwiperSlide v-for="(concert, index) in concerts" :key="index">
        <div class="concert-card">
          <div
            class="concert-card__image"
            :style="{ backgroundImage: `url(${concert.image})` }"
          ></div>
          <div class="concert-card__info">
            <h3 class="concert-card__title">{{ concert.title }}</h3>
            <p class="concert-card__date">{{ concert.date }}</p>
            <p class="concert-card__price">{{ concert.price }}</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

export default {
  name: "ConcertsSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperInstance: null,
      concerts: [
        {
          title: "Фестиваль искусств Юрия Башметова в Москве",
          date: "28 января 2020",
          price: 'от 1000 ₽',
          image: new URL("@/assets/images/concert/concert1.jpg", import.meta.url).href,
        },
        {
          title: "Twenty One Pilots Москва 2020",
          date: "28 января 2020",
          price: 'от 600 ₽',
          image: new URL("@/assets/images/concert/concert2.jpg", import.meta.url).href,
        },
        {
          title: "Наталья Ветлицкая",
          date: "28 января 2020",
          price: 'от 2000 ₽',
          image: new URL("@/assets/images/concert/concert3.jpg", import.meta.url).href,
        },
        {
          title: "Шоу Metallica Romance",
          date: "28 января 2020",
          price: 'от 2500 ₽',
          image: new URL("@/assets/images/concert/concert4.jpg", import.meta.url).href,
        },
        {
          title: "Louis Tomlinson",
          date: "28 января 2020",
          price: 'от 1000 ₽',
          image: new URL("@/assets/images/concert/concert5.jpg", import.meta.url).href,
        },
        {
          title: "X Русская музыкальная премия телеканала RU.TV",
          date: "28 января 2020",
          price: 'от 1000 ₽',
          image: new URL("@/assets/images/concert/concert6.jpg", import.meta.url).href,
        },
        {
          title: "Фестиваль искусств Юрия Башметова в Москве",
          date: "28 января 2020",
          price: 'от 1000 ₽',
          image: new URL("@/assets/images/concert/concert1.jpg", import.meta.url).href,
        }
      ],
      breakpoints: {
        0: {
          slidesPerView: 1.5,
        },
        600: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 6,
        },
      },
    };
  },
  methods: {
    onSwiper(swiper) {
      this.swiperInstance = swiper;
    },
    slideNext() {
      if (this.swiperInstance) this.swiperInstance.slideNext();
    },
    slidePrev() {
      if (this.swiperInstance) this.swiperInstance.slidePrev();
    },
  },
};
</script>

<style scoped lang="scss">
@import "./ConcertSlider.scss";
</style>
