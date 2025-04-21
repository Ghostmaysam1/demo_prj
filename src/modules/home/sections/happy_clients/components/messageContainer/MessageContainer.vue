<script setup lang="ts">
import Accordion from '@/modules/accordion/Accordion.vue'
import { computed } from 'vue'

const testimonials: {name: string, job: string, comment: string}[] = [
    {
        name: 'علی',
        job: 'برنامه نویس',
        comment: '«تجربه‌ی همکاری با این تیم واقعاً فراتر از انتظارم بود. از همون ابتدا تا پایان پروژه، همه‌چیز دقیق، منظم و با کیفیت بالا پیش رفت. حتی توی جزئیات هم دقت زیادی داشتن.»'
    },
    {
        name: 'علی رضا',
        job: 'سایت فروشگاهی',
        comment: '«ما توی چند پروژه با این تیم کار کردیم و همیشه نتیجه عالی بوده. هم طراحی قویه، هم کدنویسی تمیزه و هم تعامل تیمی بی‌نظیره. به‌شدت توصیه می‌کنم.»'
    },
    {
        name: 'مهدی',
        job: 'سایت شرکتی',
        comment: '«یه تیم واقعاً منظم و با اخلاق. مهم‌ترین چیزی که توی این همکاری برام جالب بود، این بود که همیشه در دسترس بودن و پیشنهادهای خوبی برای بهبود پروژه می‌دادن.»'
    },
    {
        name: 'میثم',
        job: 'وبلاگ',
        comment: '«از انتخاب تکنولوژی‌ها تا طراحی UI/UX همه‌چیز به‌روز و حرفه‌ای بود. پروژه بدون تأخیر تحویل داده شد و با کیفیتی بیشتر از چیزی که انتظار داشتم.»'
    }
]

const loopedComments = computed(() => [...testimonials, ...testimonials])
</script>

<template>
    <div class="h-full w-full rounded-4xl overflow-hidden flex items-center bg-[#191A23] relative">
      <div class="flex animate-marquee gap-14" :style="{ animationDuration: '15s' }">
        <div v-for="(comment, index) in loopedComments" :key="index" class="w-[400px] h-[400px] text-base flex justify-center items-center font-medium relative text-gray-700">
            <Accordion type="comment" :question="comment.name + ' ('+ comment.job +')'" :answer="comment.comment" :index="index" />
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(50%);
    }
  }
  
  .animate-marquee {
    animation: marquee linear infinite;
  }

  .animate-marquee:hover {
    animation-play-state: paused;
  }
  </style>
  