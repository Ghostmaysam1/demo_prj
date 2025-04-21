<script setup lang="ts">
import ServiceBox from "./components/ServiceBox.vue";
</script>

<template>
  <div class="h-screen flex gap-7 flex-col items-center md:pt-20 sm:pt-16 py-10">
    <div class="flex">
        <h3 class="bg-[#B9FF66] text-3xl px-2 rounded-lg">خدمات</h3>
    </div>
    <div class="w-full h-full grid  grid-cols-1 sm:grid-cols-2 place-items-center gap-4">
      <ServiceBox icon="src/assets/pictures/illustration/1.svg" color="white" label="Search engine, optimization" />
      <ServiceBox icon="src/assets/pictures/illustration/2.svg" color="green" label="Pay-per-click, advertising" />
      <ServiceBox icon="src/assets/pictures/illustration/3.svg" color="dark" label="Social Media, Marketing" />
      <ServiceBox icon="src/assets/pictures/illustration/4.svg" color="white" label="Email, Marketing" />
      <ServiceBox icon="src/assets/pictures/illustration/5.svg" color="green" label="Content, Creation" />
      <ServiceBox icon="src/assets/pictures/illustration/6.svg" color="dark" label="Analytics and, Tracking" />
    </div>
  </div>
</template>
