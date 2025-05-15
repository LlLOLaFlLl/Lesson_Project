<template>
    <div class="home">
      <!-- <p>Home.vue загружен</p> временно -->
      <HeroBanner />
      <EventCardsRow />
      <PromoBanner />
      <ConcertsSlider />
      <SpecialEvent />
      <TravelCards />
      <SubscriptionForm />
    </div>
  </template>
  
  <script setup>
    import HeroBanner from '../../components/home/HeroBanner/HeroBanner.vue'
    import EventCardsRow from '../../components/home/EventCardsRow/EventCardsRow.vue'
    import PromoBanner from '../../components/home/PromoBanner/PromoBanner.vue'
    import ConcertsSlider from '../../components/home/ConcertsSlider/ConcertsSlider.vue'
    import SpecialEvent from '../../components/home/SpecialEvent/SpecialEvent.vue'
    import TravelCards from '../../components/home/TravelCards/TravelCards.vue'
    import SubscriptionForm from '../../components/home/SubscriptionForm/SubscriptionForm.vue'
  </script>
  
  <style scoped lang="scss">
  </style>
  