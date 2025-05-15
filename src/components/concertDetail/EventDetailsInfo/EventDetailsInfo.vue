<template>
  <section class="event-info">
    <div class="event-info__left">
      <div class="event-info__heading-row">
        <h2 class="event-info__title">О концерте</h2>
        <button class="event-info__calendar-btn">
          <img src="@/assets/icons/calendar.svg" alt="Calendar" />
          Добавить в календарь
        </button>
      </div>
      <p class="event-info__description">
        Лауреат Оскара, Грэмми и Золотого Глобуса Ханс Циммер, несомненно, один из самых известных и влиятельных кинокомпозиторов нашего времени.
      </p>
      <a href="#" class="event-info__more">Подробнее</a>
    </div>

    <div class="event-info__right">
      <div class="event-info__actions">
        <button class="event-info__go-btn">Я пойду</button>
        <div class="event-info__counter">42 идут</div>
        <button :class="['event-info__call-btn', `event-info__call-btn--${type}`]">
          Заказать звонок
        </button>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'EventDetailsInfo',
  props: {
    type: {
      type: String,
      default: 'concert' 
    }
  }
}
</script>

<style scoped lang="scss">
@import "./EventDetailsInfo.scss";
</style>
