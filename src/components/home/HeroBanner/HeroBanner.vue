<template>
  <section class="hero-banner">
    <router-link
      :to="{ name: 'concert-details', params: { id: 1 } }"
      class="hero-banner__link"
    >
      <div
        class="hero-banner__image"
        :style="{ backgroundImage: `url(${bannerImage})` }"
      ></div>
      <div class="hero-banner__content">
        <h1 class="hero-banner__main-title">
          Симфоническое таинство – Мир Ханса Циммера
        </h1>

        <div class="hero-banner__info-line">
          <div class="hero-banner__info-box hero-banner__info-box--left">
            <div class="day">28</div>
            <div class="date-text">
              <div class="month">сентября</div>
              <div class="year">2020</div>
            </div>
          </div>
          <div class="hero-banner__info-box hero-banner__info-box--center">
            Стоимость от 9800 рублей
          </div>
          <div class="hero-banner__info-box hero-banner__info-box--right">
            Подробнее
          </div>
        </div>
      </div>
    </router-link>
  </section>
</template>

<script>
import bannerImage from "@/assets/images/banners/hans-zimmer.jpg";

export default {
  name: "HeroBanner",
  data() {
    return {
      bannerImage,
    };
  },
};
</script>

<style scoped lang="scss">
@import "./HeroBanner.scss";
</style>
