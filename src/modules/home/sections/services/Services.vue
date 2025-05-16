<script setup lang="ts">
import ServiceBox from "./components/ServiceBox.vue";
</script>

<template>
  <div class="h-screen Services overflow-auto bg-light flex gap-7 flex-col items-center px-2 md:px-10 pt-10 md:pt-20 sm:pt-16">
    <div class="flex items-center justify-start w-full gap-3">
        <span class="w-30 h-1 bg-main block"></span> 
        <p>حرفه ای ها روی رشد و پیشرفت برند شما متمرکز شده اند</p>
    </div>
    <div class="w-full h-80 flex items-center justify-center">
      <div class="flex items-center gap-3 bg-dark px-3 py-3 rounded-full border-dashed border border-light">
        <h3 class="text-xl md:text-3xl md:flex gap-3  font-bold text-light">ایده های <span class="text-main text-xl md:text-3xl">منحصر به فرد</span></h3>
        <img class="w-35 rounded-full" src="/team.webp" alt="team">
      </div>
    </div>
    <div class="w-full h-fit md:h-full flex flex-col md:flex-row items-center justify-around gap-4 pb-10">
      <ServiceBox label="طراحی و توسعه,Website" content="طراحی وبسایت حرفه‌ای با UI/UX مدرن و سازگار با موبایل. ما وبسایت‌هایی سریع، امن و بهینه‌شده برای SEO می‌سازیم تا کسب‌وکار شما همیشه رقابتی بماند. طراحی ریسپانسیو، سئو حرفه‌ای و پشتیبانی دائمی از خدمات ماست. برای حضور قدرتمند آنلاین با ما همکار کنید." />
      <ServiceBox label="طراحی,Application" content="طراحی اپلیکیشن موبایل حرفه‌ای با UI/UX کاربرپسند و عملکرد روان. ما اپلیکیشن‌های بومی، هیبریدی و وب اپلیکیشن‌های سازگار با تمام پلتفرم‌ها توسعه می‌دهیم. با تمرکز بر امنیت، سرعت و تجربه کاربری عالی، اپلیکیشنی متناسب با نیازهای کسب‌وکار شما می‌سازیم. پشتیبانی و به‌روزرسانی دائمی از خدمات ماست." />
      <ServiceBox label="دیجیتال, Marketing" content="با استراتژی‌های هدفمند و داده‌محور، کسب‌وکار شما را در فضای دیجیتال به‌روز و رقابتی نگه می‌داریم. از سئو و تبلیغات گوگل ادز تا مدیریت شبکه‌های اجتماعی و ایمیل مارکتینگ، کمپین‌هایی طراحی می‌کنیم که مخاطبان را به مشتریان وفادار تبدیل می‌کند. با تحلیل دقیق عملکرد، همواره در مسیر رشد خواهید بود." />
    </div>
  </div>
</template>

<style scoped>
.Services {
  background-image: 
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent calc(50px - 1px), /* فاصله عمودی بین خطوط */
      rgba(200, 200, 200, 0.2) calc(50px - 1px),
      rgba(200, 200, 200, 0.2) 50px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent calc(50px - 2px), /* فاصله افقی بین خطوط */
      rgba(200, 200, 200, 0.2) calc(50px - 1px),
      rgba(200, 200, 200, 0.2) 50px
    );
}
</style>