<template>
  <div class="contact-form">
    <h2 class="contact-form__title">Остались вопросы? Напиши нам</h2>

    <div class="contact-form__row">
      <input
        v-model="form.name"
        type="text"
        placeholder="Как к вам обращаться"
        class="contact-form__input"
      />
      <input
        v-model="form.phone"
        type="tel"
        placeholder="Телефон"
        class="contact-form__input"
      />
    </div>

    <!-- Вопрос -->
    <div class="contact-form__row">
      <textarea
        v-model="form.question"
        placeholder="Ваш вопрос"
        class="contact-form__textarea"
        rows="4"
      ></textarea>
    </div>

    <div class="contact-form__checkbox">
      <label>
        <input type="checkbox" v-model="form.agree" required />
        Отправляя заявку, вы соглашаетесь с политикой конфиденциальности...
      </label>
    </div>

    <button class="contact-form__submit" @click="handleSubmit">
      Отправить
    </button>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: "",
        phone: "",
        question: "",
        agree: false,
      },
    };
  },
  methods: {
    handleSubmit() {
      if (!this.form.agree) {
        alert("Пожалуйста, согласитесь с политикой конфиденциальности");
        return;
      }

      console.log("Форма отправлена:", this.form);
      alert("Спасибо! Мы получили ваш вопрос.");

      this.form = {
        name: "",
        phone: "",
        question: "",
        agree: false,
      };
    },
  },
};
</script>

<style scoped lang="scss">
@import "./ContactForm.scss";
</style>
