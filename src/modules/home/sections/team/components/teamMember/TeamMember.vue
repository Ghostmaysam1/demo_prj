<script setup lang="ts">
const { member } = defineProps<{
  member: {
    name: string;
    title: string;
    comment: string;
    icon: string;
  };
}>();
</script>

<template>
  <div
    class="w-full max-w-xs h-[380px] p-6 rounded-3xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/20 flex flex-col gap-4 items-center text-center transition-all hover:scale-[1.01]"
  >
    <div class="relative mt-2">
      <img
        :src="member.icon"
        :alt="member.name"
        class="rounded-full w-32 h-32 object-cover border-4 border-purple-500/30 shadow-lg"
      />
    </div>

    <h3 class="text-xl font-bold text-white mt-2 tracking-tight">
      {{ member.name }}
    </h3>

    <p class="text-sm font-medium text-purple-400 uppercase tracking-wider">
      {{ member.title }}
    </p>

    <p class="text-gray-300 text-sm leading-relaxed px-4 line-clamp-4">
      {{ member.comment }}
    </p>
  </div>
</template>
