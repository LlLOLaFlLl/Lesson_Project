<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__container">
        <div class="footer__grid">
          <div class="footer__columns footer__columns--nav">
            <div
              class="footer__column"
              v-for="(col, index) in navColumns"
              :key="index"
            >
              <h3 class="footer__title">&nbsp;</h3>
              <ul class="footer__list">
                <li
                  v-for="(item, idx) in col"
                  :key="idx"
                  class="footer__item footer__item--bold"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>

          <div class="footer__columns footer__columns--info">
            <div class="footer__column">
              <h3 class="footer__title">&nbsp;</h3>
              <ul class="footer__list">
                <li class="footer__item">О проекте</li>
                <li class="footer__item">
                  <router-link to="/contacts" class="footer__link"
                    >Хотите сотрудничать?</router-link
                  >
                </li>
              </ul>
            </div>

            <div class="footer__column footer__column--social">
              <h3 class="footer__title">&nbsp;</h3>
              <div class="footer__social">
                <a href="#" class="footer__social-link">
                  <img
                    src="@/assets/icons/vk.svg"
                    alt="vk"
                    class="footer__social-icon"
                  />
                </a>
                <a href="#" class="footer__social-link">
                  <img
                    src="@/assets/icons/tg.svg"
                    alt="tg"
                    class="footer__social-icon"
                  />
                </a>
                <a href="#" class="footer__social-link">
                  <img
                    src="@/assets/icons/inst.svg"
                    alt="inst"
                    class="footer__social-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="footer__bottom">
          <div class="footer__copyright">© 2020 Наш Гуру</div>
          <div class="footer__policy">Политика конфиденциальности</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      navColumns: [
        ["Концерты", "Кино", "Театры"],
        ["Город", "Афиша", "Экскурсии"],
        ["Фестивали", "Конференции", "Выставки"],
        ["Обучение", "Где поесть", "Публикации"],
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./footer.scss";
</style>
