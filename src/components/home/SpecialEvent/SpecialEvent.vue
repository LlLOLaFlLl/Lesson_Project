<template>
  <section class="special-event">
    <div class="special-event__cut special-event__cut--left"></div>
    <div class="special-event__cut special-event__cut--right"></div>
    <div class="special-event__content">
      <div class="special-event__date">
        <span class="special-event__day">19</span>
        <span class="special-event__month-year">января 2020</span>
      </div>
      <div class="special-event__info">
        <h2 class="special-event__title">Park Live 2020</h2>
        <p class="special-event__description">
          Хедлайнеры Placebo, The Killers и The Offspring
        </p>
        <button class="special-event__button">Купить билет</button>
      </div>
    </div>
    <div class="special-event__image">
      <img :src="eventImage" alt="Park Live 2020" />
    </div>
  </section>
</template>

<script>
export default {
  name: "SpecialEvent",
  data() {
    return {
      eventImage: new URL("@/assets/images/banners/special-event.png", import.meta.url)
        .href,
    };
  },
};
</script>

<style scoped lang="scss">
@import "./SpecialEvent.scss";
</style>
