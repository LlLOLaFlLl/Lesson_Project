<template>
  <div class="travel-card">
    <div class="travel-card__image-wrapper">
      <img :src="image" :alt="title" class="travel-card__image" />
      <button
        v-if="canFavorite"
        class="travel-card__like"
        :class="{ 'travel-card__like--active': isFavorite }"
        @click="toggleFavorite"
      >
      ❤
      </button>
    </div>
    <h3 class="travel-card__title">{{ title }}</h3>
    <p class="travel-card__location">{{ location }}</p>
    <div class="travel-card__info" v-if="price || duration || groupSize">
      <span v-if="price">🚌 {{ price }}</span>
      <span v-if="duration">🕒 {{ duration }}</span>
      <span v-if="groupSize">👥 {{ groupSize }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TravelCard",
  props: {
    image: String,
    title: String,
    location: String,
    price: String,
    duration: String,
    groupSize: String,
    canFavorite: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isFavorite: false,
    };
  },
  methods: {
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    },
  },
};
</script>

<style scoped lang="scss">
@import "./TravelCard.scss";
</style>
