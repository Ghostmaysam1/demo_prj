<script setup lang="ts">
const { communicationWays } = defineProps<{
  communicationWays: {
    icon: `/icons/${string}.svg`;
    name: string;
    content: string;
  }[];
}>();
</script>

<template>
  <div class="h-full flex flex-col justify-evenly">
    <div v-for="_ in communicationWays">
      <div class="flex flex-row-reverse items-center gap-2">
        <img :src="_.icon" :alt="_.name" class="w-10" />
        <p v-text="_.content"></p>
      </div>
      <span class="w-full h-1 block bg-main"></span>
    </div>
  </div>
</template>
