<script setup lang="ts">
// import Accordion from '@/modules/accordion/Accordion.vue'
const {member} = defineProps<{member: {name: string, title: string, comment: string, icon: string}}>()

</script>

<template>
    <div class="h-[350px] rounded-4xl flex flex-col gap-3 items-center relative">
      <img :src="member.icon" class="rounded-full w-2/5" :alt="member.name">
      <h3 class="font-bold text-light" v-text="member.name"></h3>
      <p class="text-center text-main" v-text="member.title"></p>
      <p class="text-center text-white" v-text="member.comment"></p>
    </div>
</template>