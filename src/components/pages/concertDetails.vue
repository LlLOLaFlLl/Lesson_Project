<template>
  <div>
    <ConcertBanner
      eventType="concert"
      date="28 сентября 2020"
      time="17:00"
      :age="12"
      :rating="4.3"
      :price="3000"
    />

    <EventDetailsInfo type="concert" />
    <ConcertGallery />
    <ConcertPerformers />
    <ConcertSchedule eventType="concert" />
    <ConcertDescription />
    <VenueLocation />
    <SocialInviteBar eventType="concert" :count="152" />
    <NearbyRestaurants />
    <NearbyHotels />
    <section class="weekend-subscribe">
      <SubscriptionForm />
    </section>
  </div>
</template>

<script>
  import ConcertBanner from "@/components/concertDetail/concertBanner/concertBanner.vue";
  import EventDetailsInfo from "@/components/concertDetail/EventDetailsInfo/EventDetailsInfo.vue";
  import ConcertGallery from "@/components/concertDetail/ConcertGallery/ConcertGallery.vue";
  import ConcertPerformers from "@/components/concertDetail/ConcertPerformers/ConcertPerformers.vue";
  import ConcertSchedule from "@/components/concertDetail/ConcertSchedule/ConcertSchedule.vue";
  import ConcertDescription from "@/components/concertDetail/ConcertDescription/ConcertDescription.vue";
  import VenueLocation from "@/components/concertDetail/VenueLocation/VenueLocation.vue";
  import SocialInviteBar from "@/components/concertDetail/SocialInviteBar/SocialInviteBar.vue";
  import NearbyRestaurants from "@/components/concertDetail/NearbyRestaurants/NearbyRestaurants.vue";
  import NearbyHotels from "@/components/concertDetail/NearbyHotels/NearbyHotels.vue";
  import SubscriptionForm from "@/components/home/SubscriptionForm/SubscriptionForm.vue";

export default {
  name: "ConcertDetails",
  components: {
    ConcertBanner,
    EventDetailsInfo,
    ConcertGallery,
    ConcertPerformers,
    ConcertSchedule,
    ConcertDescription,
    VenueLocation,
    SocialInviteBar,
    NearbyRestaurants,
    NearbyHotels,
    SubscriptionForm,
  },
};
</script>
