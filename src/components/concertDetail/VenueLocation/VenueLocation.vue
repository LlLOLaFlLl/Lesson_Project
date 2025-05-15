<template>
  <section class="venue-location">
    <h2 class="venue-title">Севастопольский театр юного зрителя</h2>
    <div class="venue-info">
      <div class="venue-details">
        <div class="venue-item">
          <span class="label">Адрес:</span>
          <p>г. Севастополь, ул. Ленина, 25</p>
        </div>
        <div class="venue-item">
          <span class="label">Телефон:</span>
          <p>+7 (900) 123-45-67</p>
        </div>
        <button class="route-button">Проложить маршрут</button>
      </div>
      <div class="venue-map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=33.528328%2C44.616291&z=16&text=%D0%A1%D0%B5%D0%B2%D0%B0%D1%81%D1%82%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C%2C%20%D1%83%D0%BB.%20%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0%2C%2025"
          width="100%"
          height="200"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "VenueLocation",
};
</script>

<style scoped lang="scss">
@import "./VenueLocation.scss";
</style>
