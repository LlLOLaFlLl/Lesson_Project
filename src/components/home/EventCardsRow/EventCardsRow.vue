<template>
  <section class="event-cards-row">
    <div class="event-cards-row__header">
      <h2 class="event-cards-row__title">События на ближайшие дни</h2>
      <a href="#" class="event-cards-row__view-all">Смотреть все</a>
    </div>

    <div class="event-cards-row__grid">
      <div
        v-for="(event, index) in filteredTopEvents"
        :key="index"
        class="event-card event-card--large"
        :style="{ backgroundImage: `url(${event.image})` }"
      >
        <div class="event-card__overlay">
          <h3 class="event-card__title">{{ event.title }}</h3>
          <p class="event-card__genre">{{ event.genre }}</p>
          <p class="event-card__date">{{ event.date }}</p>
        </div>
      </div>

      <div
        v-for="(event, index) in filteredBottomEvents"
        :key="'b' + index"
        class="event-card event-card--small"
      >
        <div
          class="event-card__image"
          :style="{ backgroundImage: `url(${event.image})` }"
        ></div>
        <div class="event-card__info">
          <h3 class="event-card__title">{{ event.title }}</h3>
          <p class="event-card__genre">{{ event.genre }}</p>
          <p class="event-card__date">{{ event.date }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EventCardsRow",
  data() {
    return {
      screenWidth: window.innerWidth,
      topEvents: [
        {
          title: "Джонатан Бри",
          genre: "Инди-поп музыка",
          date: "28 января 2020",
          image: new URL("@/assets/images/event/event1.jpg", import.meta.url).href,
        },
        {
          title: "Фестиваль волшебных китайских фонарей",
          genre: "Маскарадное шоу",
          date: "28 января 2020",
          image: new URL("@/assets/images/event/event2.jpg", import.meta.url).href,
        },
      ],
      bottomEvents: [
        {
          title: "Joe Bonamasa",
          genre: "Рок, Джаз и блюз",
          date: "22-28 февраля 2020",
          image: new URL("@/assets/images/event/event3.jpg", import.meta.url).href,
        },
        {
          title: "Барашек Шон: Фермагеддон",
          genre: "Мультфильм, 0+",
          date: "12-19 марта 2020",
          image: new URL("@/assets/images/event/event4.jpg", import.meta.url).href,
        },
        {
          title: "Транскрипция цвета",
          genre: "Пластический спектакль",
          date: "28 января 2020",
          image: new URL("@/assets/images/event/event5.jpg", import.meta.url).href,
        },
      ],
    };
  },
  computed: {
    filteredTopEvents() {
      if (this.screenWidth <= 1024) {
        return [this.topEvents[0]];
      }
      return this.topEvents;
    },
    filteredBottomEvents() {
      if (this.screenWidth <= 1024) {
        return this.bottomEvents.slice(0, 2);
      }
      return this.bottomEvents;
    },
  },
  mounted() {
    window.addEventListener("resize", this.updateScreenWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateScreenWidth);
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
  },
};
</script>

<style scoped lang="scss">
@import "./EventCardsRow.scss";
</style>
