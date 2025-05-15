<template>
  <router-link
    to="/events"
    class="promo-banner"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="promo-banner__overlay">
      <div class="promo-banner__content"></div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "PromoBanner",
  data() {
    return {
      backgroundImage: new URL("@/assets/images/banners/promo.jpg", import.meta.url)
        .href,
    };
  },
};
</script>

<style scoped lang="scss">
@import "./PromoBanner.scss";
</style>
