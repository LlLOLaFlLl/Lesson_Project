<template>
  <section class="subscription-form">
    <div class="subscription-form__icon">
      <MailIcon size="24" stroke-width="2.5" />
    </div>
    <div class="subscription-form__text">
      <h2 class="subscription-form__title">Куда пойти<br />в выходные?</h2>
    </div>
    <form class="subscription-form__form" @submit.prevent="submitForm">
      <label for="email" class="subscription-form__label"
        >Укажите ваш e-mail</label
      >
      <input
        id="email"
        v-model="email"
        type="email"
        placeholder="example@mail.com"
        required
        class="subscription-form__input"
      />
    </form>
    <button class="subscription-form__button" @click="submitForm">
      Подписаться
    </button>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Mail as MailIcon } from "lucide-vue-next";

const email = ref("");

function submitForm() {
  if (email.value.trim()) {
    alert(`Подписка оформлена для ${email.value}`);
    email.value = "";
  }
}
</script>

<style scoped lang="scss">
@import "./SubscriptionForm.scss";
</style>
