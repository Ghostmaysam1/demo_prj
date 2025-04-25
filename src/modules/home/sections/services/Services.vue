<script setup lang="ts">
import ServiceBox from "./components/ServiceBox.vue";
</script>

<template>
  <div class="h-screen flex gap-7 flex-col items-center md:px-10 px-2 md:pt-20 sm:pt-16 py-10">
    <div class="flex justify-start w-full gap-1">
        <h3 class="bg-main text-3xl px-2 rounded-lg">خدمات</h3>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
    </div>
    <div class="w-full h-full grid  grid-cols-1 sm:grid-cols-2 place-items-center gap-4">
      <ServiceBox color="dark" label="Search engine, optimization" />
      <ServiceBox color="dark" label="front-end, back-end" />
      <ServiceBox color="dark" label="Social Media, Marketing" />
      <ServiceBox color="dark" label="Mobile apk, Apps" />
      <ServiceBox color="dark" label="Content, Creation" />
      <ServiceBox color="dark" label="AI, services" />
    </div>
  </div>
</template>
