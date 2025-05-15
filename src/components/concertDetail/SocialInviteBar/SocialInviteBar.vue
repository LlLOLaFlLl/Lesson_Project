<template>
  <section class="social-bar">
    <div class="social-bar__content">
      <span class="social-bar__text">Планируете пойти на мероприятие?</span>

      <button :class="['social-bar__btn', `bg--${eventType}`]">Я пойду</button>
      <button class="social-bar__btn social-bar__btn--light">Пригласить</button>

      <div class="avatars">
        <img :src="avatars[0]" alt="avatar" />
        <div class="avatar-circle" :class="`bg--${eventType}`"></div>
        <span class="count">{{ count }} человек идут</span>
      </div>

      <div class="social-icons">
        <a href="#" aria-label="VK"
          ><img src="@/assets/icons/vk.svg" alt="VK"
        /></a>
        <a href="#" aria-label="Telegram"
          ><img src="@/assets/icons/tg.svg" alt="Telegram"
        /></a>
        <a href="#" aria-label="Facebook"
          ><img src="@/assets/icons/inst.svg" alt="Facebook"
        /></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SocialInviteBar",
  props: {
    eventType: {
      type: String,
      required: true,
    },
    avatars: {
      type: Array,
      default: () => [
        "https://randomuser.me/api/portraits/women/1.jpg",
      ],
    },
    count: {
      type: Number,
      default: 152,
    },
  },
};
</script>

<style scoped lang="scss">
@import "./SocialInviteBar.scss";

</style>
