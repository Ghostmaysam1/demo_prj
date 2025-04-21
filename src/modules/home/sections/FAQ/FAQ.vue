<script setup lang="ts">
import Accordion from './components/accordion/Accordion.vue';
const list: {question: string, answer: string}[] = [
  {
    question: 'React & vue',
    answer: 'ما بسته به نیاز پروژه، از React یا Vue برای ساخت رابط‌های کاربری استفاده می‌کنیم. هر دو فریم‌ورک سبک، کامپوننت‌محور و بسیار محبوب هستند. React مناسب پروژه‌های مقیاس‌پذیر با ساختار ماژولار بالا و Vue ایده‌آل برای توسعه سریع و ساده‌سازی در پروژه‌هایی با انعطاف بیشتر در معماری است.',
  },
  {
    question: 'git & Github',
    answer: 'برای مدیریت نسخه و همکاری تیمی از Git و GitHub استفاده می‌کنیم. این ابزارها به ما کمک می‌کنن تا توسعه منظم، مستند و قابل پیگیری داشته باشیم.'
  },
  {
    question: 'Tailwind CSS',
    answer: 'برای طراحی سریع، منظم و واکنش‌گرا، از Tailwind استفاده می‌کنیم. با utility-first بودنش، هم کد CSS رو سبک نگه می‌داریم هم طراحی رو دقیق کنترل می‌کنیم.'
  },
  {
    question: 'Typescript',
    answer: 'برای نوشتن کدهای قابل فهم‌تر و با خطای کمتر، از TypeScript استفاده می‌کنیم. این زبان به ما کمک می‌کنه تا با تایپ‌های استاتیک، کدهای بهتری بنویسیم و از خطاهای رایج جلوگیری کنیم.'
  },
  {
    question: 'Vite',
    answer: 'برای سرعت بخشیدن به فرآیند توسعه و بارگذاری سریع‌تر، از Vite استفاده می‌کنیم. این ابزار به ما کمک می‌کنه تا زمان بارگذاری و کامپایل رو کاهش بدیم و تجربه کاربری بهتری ارائه بدیم.'
  },
  {
    question: 'tauri + Rust',
    answer: 'در توسعه اپلیکیشن‌های دسکتاپ، Tauri و زبان Rust انتخاب ماست. ترکیبی سبک، امن و با عملکرد بالا که باعث می‌شه خروجی نهایی هم سریع باشه، هم مصرف منابع پایینی داشته باشه.'
  },
  {
    question: 'Express + Nodejs',
    answer: 'برای توسعه‌ی سمت سرور، از Node.js و فریم‌ورک Express استفاده می‌کنیم. این ترکیب به ما اجازه می‌ده تا APIهایی سریع، مقیاس‌پذیر و غیرهمزمان بسازیم که به راحتی با فرانت‌اند یکپارچه می‌شن. ساختار ساده‌ی Express، توسعه سریع و قابل نگهداری رو ممکن می‌کنه.'
  },
  {
    question: 'Laravel + PHP',
    answer: 'برای پروژه‌هایی که نیاز به توسعه سریع، ساختار MVC و ابزارهای آماده دارن، از PHP همراه با فریم‌ورک Laravel استفاده می‌کنیم. Laravel با امکاناتی مثل روتینگ ساده، ORM قدرتمند و سیستم احراز هویت داخلی، به ما کمک می‌کنه تا بک‌اندهایی تمیز، ایمن و قابل گسترش بسازیم.'
  }
];
</script>

<template>
  <div class="h-screen flex gap-7 flex-col items-center md:pt-20 sm:pt-16 py-10">
    <div class="flex flex-col gap-[1px]">
        <h3 class="bg-[#B9FF66] text-3xl px-2 rounded-lg">ابزار ها</h3>
    </div>
    <div class="flex flex-col gap-5 overflow-auto scroll-hidden py-5">
        <Accordion v-for="(qa, index) in list" :key="qa.question" :index="index" :question="qa.question" :answer="qa.answer" />
    </div>
  </div>
</template>