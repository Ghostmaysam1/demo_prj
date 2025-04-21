<script setup lang="ts">
import MessageContainer from './components/messageContainer/MessageContainer.vue';
</script>

<template>
  <div class="h-screen flex gap-7 flex-col items-center md:pt-20 sm:pt-16 py-10">
    <div class="flex">
        <h3 class="bg-[#B9FF66] text-3xl px-2 rounded-lg">نظر کارفرمایان</h3>
    </div>

    <MessageContainer />
  </div>
</template>