<template>
  <transition name="slide">
    <div class="auth-panel" v-if="show">
      <div class="auth-panel__content">
        <div class="auth-panel__header">
          <button :class="{ active: mode === 'login' }" @click="mode = 'login'">
            Вход
          </button>
          <button
            :class="{ active: mode === 'register' }"
            @click="mode = 'register'"
          >
            Регистрация
          </button>
          <button class="auth-panel__close" @click="$emit('close')">×</button>
        </div>

        <div class="auth-panel__body">
          <div class="auth-panel__left">
            <template v-if="mode === 'login'">
              <input
                type="email"
                placeholder="Email"
                v-model="loginForm.email"
              />
              <input
                type="password"
                placeholder="Пароль"
                v-model="loginForm.password"
              />
              <a href="#" class="auth-panel__forgot">Забыли пароль?</a>
              <button class="auth-panel__submit">Войти</button>

              <div class="auth-panel__socials-wrapper mobile-only">
                <p>Войти через:</p>
                <div class="auth-panel__socials">
                  <button class="social-btn vk">
                    <img src="@/assets/icons/vk2.svg" alt="VK" />
                  </button>
                  <button class="social-btn tg">
                    <img src="@/assets/icons/tg2.svg" alt="Telegram" />
                  </button>
                  <button class="social-btn ya">
                    <img src="@/assets/icons/classmates.svg" alt="Yandex" />
                  </button>
                  <button class="social-btn g">
                    <img src="@/assets/icons/google.svg" alt="Google" />
                  </button>
                </div>
                <button class="auth-panel__sber">
                  <img src="@/assets/icons/sber.svg" alt="Сбер" />
                  Войти по Сбер ID
                </button>
              </div>
            </template>

            <template v-else>
              <input
                type="text"
                placeholder="Фамилия"
                v-model="registerForm.lastName"
              />
              <input
                type="text"
                placeholder="Имя"
                v-model="registerForm.firstName"
              />
              <input
                type="email"
                placeholder="Email"
                v-model="registerForm.email"
              />
              <label class="auth-panel__checkbox">
                <input type="checkbox" v-model="registerForm.isOrganizer" />
                Я — организатор мероприятий
              </label>
              <input
                v-if="registerForm.isOrganizer"
                type="text"
                placeholder="ИНН"
                v-model="registerForm.inn"
              />
              <button class="auth-panel__submit">Зарегистрироваться</button>
              <p class="auth-panel__policy">
                Регистрируясь, вы соглашаетесь с
                <a href="#">политикой конфиденциальности</a> и на обработку
                персональных данных
              </p>
            </template>
          </div>

          <div class="auth-panel__right desktop-only">
            <p>Войти через:</p>
            <div class="auth-panel__socials">
              <button class="social-btn vk">
                <img src="@/assets/icons/vk2.svg" alt="VK" />
              </button>
              <button class="social-btn tg">
                <img src="@/assets/icons/tg2.svg" alt="Telegram" />
              </button>
              <button class="social-btn ya">
                <img src="@/assets/icons/classmates.svg" alt="Yandex" />
              </button>
              <button class="social-btn g">
                <img src="@/assets/icons/google.svg" alt="Google" />
              </button>
            </div>

            <button class="auth-panel__sber">
              <img src="@/assets/icons/sber.svg" alt="Сбер" />
              Войти по Сбер ID
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["show"],
  data() {
    return {
      mode: "login",
      loginForm: {
        email: "",
        password: "",
      },
      registerForm: {
        lastName: "",
        firstName: "",
        email: "",
        isOrganizer: false,
        inn: "",
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import "./auth.scss";
</style>
