<template>
  <section class="concert-performers">
    <h2 class="title">Исполнители</h2>
    <div class="performers-list">
      <div
        v-for="(performer, index) in performers"
        :key="index"
        class="performer"
      >
        <div class="avatar-wrapper">
          <img :src="performer.photo" :alt="performer.name" class="avatar" />
        </div>
        <div class="info">
          <div class="name">{{ performer.name }}</div>
          <div class="role" v-if="performer.role">{{ performer.role }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gavin from "@/assets/images/performers/gavin.jpg";
import lisa from "@/assets/images/performers/lisa.jpg";
import pedro from "@/assets/images/performers/pedro.jpg";
import orchestra from "@/assets/images/performers/orchestra.jpg";

export default {
  name: "ConcertPerformers",
  data() {
    return {
      performers: [
        {
          name: "Гэвин Гринуэй",
          role: "Дирижёр",
          photo: gavin,
        },
        {
          name: "Лиза Джерард",
          role: "Вокал",
          photo: lisa,
        },
        {
          name: "Педро Юсташ",
          role: "Флейта",
          photo: pedro,
        },
        {
          name: "Симфонический оркестр",
          role: "",
          photo: orchestra,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "./ConcertPerformers.scss";
</style>
