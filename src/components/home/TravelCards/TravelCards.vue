<template>
  <section class="travel-cards">
    <h2 class="travel-cards__title">Крым — влюбиться навсегда!</h2>

    <div class="travel-cards__grid">
      <TravelCard
        v-for="(item, index) in cards"
        :key="index"
        :image="item.image"
        :title="item.title"
        :location="item.location"
        :price="item.price"
        :duration="item.duration"
        :groupSize="item.groupSize"
        :canFavorite="item.title !== ''"
      />
    </div>

    <div class="travel-cards__btn-wrapper">
      <button class="travel-cards__btn">Смотреть все</button>
    </div>
  </section>
</template>

<script>
import TravelCard from "./TravelCard.vue";

export default {
  name: "TravelCards",
  components: { TravelCard },
  data() {
    return {
      cards: [
        {
          image: new URL("@/assets/images/crimea/crimea1.jpg", import.meta.url).href,
          title: "Дворцы Южного берега Крыма",
          location: "Ялта, ЮБК",
          price: "от 1200 ₽",
          duration: "7–9 часов",
          groupSize: "12 человек",
        },
        {
          image: new URL("@/assets/images/crimea/crimea2.jpg", import.meta.url).href,
          title: "Секретные места вулкана Фиолент",
          location: "Севастополь, Западное побережье",
          price: "от 1200 ₽",
          duration: "12–14 часов",
          groupSize: "10 человек",
        },
        {
          image: new URL("@/assets/images/crimea/crimea3.jpg", import.meta.url).href,
          title: "",
          location: "",
          price: "",
          duration: "",
          groupSize: "",
        },
        {
          image: new URL("@/assets/images/crimea/crimea4.jpg", import.meta.url).href,
          title: "Бахчисарай — город-сад!",
          location: "Бахчисарай, Центральный Крым",
          price: "от 1200 ₽",
          duration: "4–7 часов",
          groupSize: "8 человек",
        },
        {
          image: new URL("@/assets/images/crimea/crimea5.jpg", import.meta.url).href,
          title: "Крымская Ривьера",
          location: "Ливадия, ЮБК",
          price: "от 1200 ₽",
          duration: "8 часов",
          groupSize: "15 человек",
        },
        {
          image: new URL("@/assets/images/crimea/crimea6.jpg", import.meta.url).href,
          title: "Легендарный Севастополь",
          location: "Севастополь, Западное побережье",
          price: "от 1200 ₽",
          duration: "3 часа",
          groupSize: "8 человек",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "./TravelCards.scss";
</style>
