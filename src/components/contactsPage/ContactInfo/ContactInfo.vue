<template>
  <div class="contact-info">
    <div class="contact-info__top-row">
      <div class="contact-info__item">
        <strong>Адрес:</strong> 127055, г. Ялта, ул. Примерная, в 1.5 км от вас
      </div>
      <div class="contact-info__item">
        <strong>Телефон:</strong> 8-(499)-123-45-67
      </div>
      <button class="contact-info__route-btn">Проложить маршрут</button>
    </div>

    <div class="contact-info__work-hours">
      <strong>Время работы офиса:</strong> 11:00–18:00 (пн–пт)
    </div>

    <div class="contact-info__map">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3AXXXXXXXXXXXXX&amp;source=constructor"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>

    <div class="contact-info__row">
      <div class="contact-info__item">
        <strong>По вопросам материалов на сайте:</strong> materials@example.ru
      </div>
      <div class="contact-info__item">
        <strong>Бухгалтерия НашГуру:</strong> accountant@example.ru
      </div>
    </div>

    <div class="contact-info__row">
      <div class="contact-info__item">
        <strong>По вопросам рекламы:</strong> reklama@example.ru
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactInfo",
};
</script>

<style scoped lang="scss">
@import "./ContactInfo.scss";
</style>
