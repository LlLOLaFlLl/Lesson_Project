<template>
    <div class="contacts">
      <ContactBanner />
      <ContactInfo />

      <div class="contacts-page__form-wrapper">
      <ContactForm />
      </div>
  
      <div class="contacts__content">
        <!-- Контактная информация или форма -->
      </div>
    </div>
  </template>
  
  <script>
  import ContactBanner from '@/components/contactsPage/ContactBanner/ContactBanner.vue'
  import ContactInfo from '@/components/contactsPage/ContactInfo/ContactInfo.vue'
  import ContactForm from '@/components/contactsPage/ContactForm/ContactForm.vue'
  
  export default {
    name: 'ContactsPage',
    components: {
      ContactBanner,
      ContactInfo,
      ContactForm
    }
  }
  </script>
  
  <style scoped lang="scss">
  .contacts {
    &__content {
      padding: 40px 20px;
    }
  }
  </style>
  