<script setup lang="ts">
import TeamMember from "./components/teamMember/TeamMember.vue";

const members: {
  name: string;
  title: string;
  comment: string;
  icon: string;
}[] = [
  {
    name: "سارا امینی",
    title: "توسعه‌دهنده‌ی رابط کاربری",
    comment:
      "متخصص در طراحی و پیاده‌سازی رابط‌های کاربری مدرن با تمرکز بر React و تجربه کاربری پاسخ‌گو.",
    icon: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/66.jpg",
  },
  {
    name: "محمدرضا کریمی",
    title: "توسعه‌دهنده‌ی سمت سرور",
    comment:
      "دارای تخصص در Node.js، پایگاه‌داده‌ها و معماری میکروسرویس. متعهد به نوشتن کدی تمیز و قابل نگهداری.",
    icon: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/62.jpg",
  },
  {
    name: "الناز رحیمی",
    title: "طراح UI/UX",
    comment:
      "طراح رابط و تجربه کاربری با دید هنری قوی و تمرکز بر ساده‌سازی مسیر تعامل کاربر با نرم‌افزار.",
    icon: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/37.jpg",
  },
  {
    name: "آرمین توکلی",
    title: "مدیر پروژه",
    comment:
      "هماهنگ‌کننده‌ی فرآیندها و زمان‌بندی پروژه‌ها، با مهارت بالا در مدیریت تیم و ارتباط با مشتری.",
    icon: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/16.jpg",
  },
  {
    name: "احسان نادری",
    title: "مهندس DevOps",
    comment:
      " مسئول یکپارچه‌سازی، استقرار مداوم و مانیتورینگ زیرساخت‌ها. تسلط کامل بر Docker و CI/CD.",
    icon: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/74.jpg",
  },
  {
    name: "کسری نجفی",
    title: "گرافیست و طراح برند",
    comment:
      "طراحی هویت بصری، لوگو و عناصر گرافیکی وب با هدف خلق تجربه‌ی بصری متمایز و حرفه‌ای.",
    icon: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/45.jpg",
  },
  {
    name: "لیلا محمدی",
    title: "کارشناس تولید محتوا",
    comment:
      "تولید محتوای هدفمند برای وب‌سایت و شبکه‌های اجتماعی، با رویکرد برندینگ و جذب مخاطب.",
    icon: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/77.jpg",
  },
  {
    name: "امیرحسین حسینی",
    title: "توسعه‌دهنده‌ی فول‌استک",
    comment:
      "توانمند در توسعه‌ی هم‌زمان بخش فرانت‌اند و بک‌اند با تمرکز بر کارایی، امنیت و مقیاس‌پذیری.",
    icon: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/71.jpg",
  },
  {
    name: "نگار صادقی",
    title: "تحلیل‌گر داده",
    comment:
      "متخصص در جمع‌آوری، پردازش و تحلیل داده‌ها برای پشتیبانی از تصمیم‌گیری‌های کلان و بهینه‌سازی روندها.",
    icon: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/10.jpg",
  },
];
</script>

<template>
  <div
    class="max-h-screen flex flex-col items-center bg-gray-900 px-4 py-12 md:px-8 md:py-16"
  >
    <div
      class="w-full max-w-6xl mb-8 flex flex-col md:flex-row gap-4 items-start md:items-center"
    >
      <h3
        class="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-2xl md:text-3xl font-bold px-4 py-2 rounded-lg whitespace-nowrap"
      >
        تیم ما
      </h3>
      <p class="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است
      </p>
    </div>

    <div
      class="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6 px-2 pb-4 overflow-y-auto custom-scroll"
    >
      <TeamMember
        v-for="(member, index) in members"
        :key="index"
        :member="member"
        class="hover:transform hover:-translate-y-1 transition-transform duration-300"
      />
    </div>
  </div>
</template>

<style scoped>
.custom-scroll {
  scrollbar-width: thin;
  scrollbar-color: rgba(99, 102, 241, 0.5) transparent;
}

.custom-scroll::-webkit-scrollbar {
  height: 6px;
  width: 6px;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background-color: rgba(99, 102, 241, 0.5);
  border-radius: 3px;
}

.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}
</style>
