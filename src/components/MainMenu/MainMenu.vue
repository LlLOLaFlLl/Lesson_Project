<template>
  <div class="main-menu">
    <button class="main-menu__close" @click="$emit('close')">×</button>

    <div
      class="main-menu__section"
      v-for="(section, index) in sections"
      :key="index"
    >
      <h3 class="main-menu__title" @click="isMobile && toggleSection(index)">
        {{ section.title }}
        <span class="arrow" v-if="isMobile" :class="{ open: isOpen(index) }"
          >⌃</span
        >
      </h3>

      <ul v-show="!isMobile || isOpen(index)">
        <li v-for="(item, i) in section.items" :key="i">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const sections = [
  {
    title: "Чем заняться",
    items: [
      "Концерты",
      "Кино",
      "Театры",
      "Фестивали",
      "Выставки",
      "Конференции",
      "Тренинги",
      "Ночная жизнь",
      "Городские праздники",
      "Квесты",
      "Спорт",
      "Детям",
      "Экскурсии ↗",
    ],
  },
  {
    title: "Где поесть",
    items: [
      "Рестораны",
      "Бары и клубы",
      "Кафе",
      "Кондитерские",
      "Пиццерии",
      "Суши",
      "Доставка еды",
    ],
  },
  {
    title: "Что почитать",
    items: ["Подборки", "Блоги", "Новости", "Статьи"],
  },
];

const openSections = ref([]);
const isMobile = ref(window.innerWidth < 768);

const toggleSection = (index) => {
  if (openSections.value.includes(index)) {
    openSections.value = openSections.value.filter((i) => i !== index);
  } else {
    openSections.value.push(index);
  }
};

const isOpen = (index) => openSections.value.includes(index);

const handleResize = () => {
  isMobile.value = window.innerWidth < 768;
  if (!isMobile.value) {
    openSections.value = [];
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped lang="scss">
@import "./MainMenu.scss";
</style>
