<template>
  <section class="concert-description">
    <div class="description-container">
      <p class="description-text">
        {{ fullText }}
      </p>
      <button class="read-more" @click="handleReadMore">читать далее</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "ConcertDescription",
  data() {
    return {
      isExpanded: false,
      fullText: `Саундтреки Ханса Циммера к практически бесконечному числу блокбастеров и кинохитов узнаваемы и любимы. Мощные музыкальные опусы Циммера подарили драматизм и глубину таким картинам, как «Король Лев», «Гладиатор», «Пираты Карибского моря», «Код Да Винчи», «Темный рыцарь», «Начало», «Интерстеллар» — и это лишь малая часть фильмографии маэстро. В январе 2018 года Ханс Циммер получил свою 11ю номинацию на премию Оскар за музыкальную партитуру к последней`,
    };
  },
  methods: {
    handleReadMore() {
      console.log("Читать далее нажато");
    },
  },
};
</script>

<style scoped lang="scss">
@import "./ConcertDescription.scss";
</style>
