<template>
  <section class="concert-gallery">
    <div class="gallery-header">
      <h2 class="gallery-title"></h2>
      <div class="gallery-controls">
        <button @click="prevSlide" class="gallery-button">‹</button>
        <button @click="nextSlide" class="gallery-button">›</button>
      </div>
    </div>

    <div class="gallery-images">
      <img
        v-for="(image, index) in visibleImages"
        :key="index"
        :src="image"
        class="gallery-image"
        alt="Кадр с концерта"
      />
    </div>

    <div class="gallery-tags">
      <span v-for="(tag, index) in tags" :key="index" class="gallery-tag">
        #{{ tag }}
      </span>
    </div>
  </section>
</template>

<script>
import img1 from "@/assets/images/gallery/gallery1.jpg";
import img2 from "@/assets/images/gallery/gallery2.jpg";
import img3 from "@/assets/images/gallery/gallery3.jpg";

export default {
  name: "ConcertGallery",
  data() {
    return {
      images: [img1, img2, img3],
      currentIndex: 0,
      tags: ["симфонический оркестр", "классика", "электроника"],
    };
  },
  computed: {
    visibleImages() {
      // Показываем два изображения: current и следующий
      return [
        this.images[this.currentIndex],
        this.images[(this.currentIndex + 1) % this.images.length],
      ];
    },
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style scoped lang="scss">

@import "./ConcertGallery.scss";
</style>
