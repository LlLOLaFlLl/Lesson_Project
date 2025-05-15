<template>
  <section
    class="concert-banner"
    :style="{ backgroundImage: `url(${bannerImage})` }"
  >
    <div class="concert-banner__overlay">
      <div class="concert-banner__content">
        <div class="concert-banner__left">
          <span class="concert-banner__category">Все концерты</span>
          <h2 class="concert-banner__title">
            Симфоническое таинство –<br />Мир Ханса Циммера
          </h2>
          <span class="concert-banner__location"
            >Ялтинский театр имени А.П. Чехова</span
          >
        </div>
        <div class="concert-banner__right">
          <span>Классика</span>
          <span>Электронная музыка</span>
        </div>
      </div>
    </div>

    <div
      class="concert-banner__info"
      :class="`concert-banner__info--${eventType}`"
    >
      <div class="concert-banner__details">
        <span class="concert-banner__detail">
          <strong>{{ date }}</strong>
        </span>
        <div class="concert-banner__divider"></div>
        <span class="concert-banner__detail">{{ time }}</span>
        <div class="concert-banner__divider"></div>
        <span class="concert-banner__detail">{{ age }}+</span>
        <div class="concert-banner__divider"></div>
        <span class="concert-banner__detail">★ {{ rating }}</span>
      </div>

      <div class="concert-banner__action">
        <span class="concert-banner__price"
          >от <strong>{{ price }} ₽</strong></span
        >
        <button class="concert-banner__button">Купить билет</button>
      </div>
    </div>
  </section>
</template>

<script>
import bannerImage from "@/assets/images/banners/hans-zimmer2.jpg";

export default {
  name: "ConcertBanner",
  props: {
    eventType: {
      type: String,
      required: true,
      default: "concert",
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      bannerImage,
    };
  },
};
</script>

<style scoped lang="scss">
@import "./ConcertBanner.scss";
</style>
