<template>
  <section class="concert-schedule">
    <div class="schedule-wrapper">
      <div class="schedule-list">
        <div
          v-for="(event, index) in schedule"
          :key="index"
          class="schedule-item"
        >
          <div class="date-block">
            <div class="day">{{ formatDay(event.date) }}</div>
            <div class="month-year">
              <div class="month">{{ formatMonth(event.date) }}</div>
              <div class="year">{{ formatYear(event.date) }}</div>
            </div>
          </div>
          <div class="location-block">
            <div class="city">{{ event.city }}</div>
            <div class="venue">{{ event.venue }}</div>
          </div>
          <div class="price-block">от {{ event.price }} ₽</div>
        </div>
        <button class="show-more">Показать ещё</button>
      </div>

      <div class="recommendation-ticket" :class="`ticket-${eventType}`">
        <div class="content">
          <div class="text">На какой концерт сходить именно вам?</div>
          <button class="pick-button">Подобрать</button>
        </div>
        <div class="cutout" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ConcertSchedule",
  props: {
    eventType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      schedule: [
        {
          date: "28 сентября 2020",
          city: "Севастополь",
          venue: "Севастопольский театр юного зрителя",
          price: 3000,
        },
        {
          date: "29 сентября 2020",
          city: "Ялта",
          venue: "Ялтинский театр имени Чехова",
          price: 2500,
        },
        {
          date: "30 сентября 2020",
          city: "Симферополь",
          venue: "Театр имени Горького",
          price: 3300,
        },
      ],
    };
  },
  methods: {
    formatDay(date) {
      return date.split(" ")[0];
    },
    formatMonth(date) {
      return date.split(" ")[1];
    },
    formatYear(date) {
      return date.split(" ")[2];
    },
  },
};
</script>

<style scoped lang="scss">
@import "./ConcertSchedule.scss";
</style>
