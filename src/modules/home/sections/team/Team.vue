<script setup lang="ts">
import TeamMember from './components/teamMember/TeamMember.vue';
import { faker } from '@faker-js/faker';

const members: {name: string, title: string, comment: string, icon: string}[] = [
    {
        name: 'سارا امینی',
        title: 'توسعه‌دهنده‌ی رابط کاربری',
        comment: 'متخصص در طراحی و پیاده‌سازی رابط‌های کاربری مدرن با تمرکز بر React و تجربه کاربری پاسخ‌گو.',
        icon: faker.image.personPortrait()
    },
    {
        name: 'محمدرضا کریمی',
        title: 'توسعه‌دهنده‌ی سمت سرور',
        comment: 'دارای تخصص در Node.js، پایگاه‌داده‌ها و معماری میکروسرویس. متعهد به نوشتن کدی تمیز و قابل نگهداری.',
        icon: faker.image.personPortrait()
    },
    {
        name: 'الناز رحیمی',
        title: 'طراح UI/UX',
        comment: 'طراح رابط و تجربه کاربری با دید هنری قوی و تمرکز بر ساده‌سازی مسیر تعامل کاربر با نرم‌افزار.',
        icon: faker.image.personPortrait()
    },
    {
        name: 'آرمین توکلی',
        title: 'مدیر پروژه',
        comment: 'هماهنگ‌کننده‌ی فرآیندها و زمان‌بندی پروژه‌ها، با مهارت بالا در مدیریت تیم و ارتباط با مشتری.',
        icon: faker.image.personPortrait()
    },
    {
        name: 'احسان نادری',
        title: 'مهندس DevOps',
        comment: ' مسئول یکپارچه‌سازی، استقرار مداوم و مانیتورینگ زیرساخت‌ها. تسلط کامل بر Docker و CI/CD.',
        icon: faker.image.personPortrait()
    },
    {
        name: 'کسری نجفی',
        title: 'گرافیست و طراح برند',
        comment: 'طراحی هویت بصری، لوگو و عناصر گرافیکی وب با هدف خلق تجربه‌ی بصری متمایز و حرفه‌ای.',
        icon: faker.image.personPortrait()
    },
    {
        name: 'لیلا محمدی',
        title: 'کارشناس تولید محتوا',
        comment: 'تولید محتوای هدفمند برای وب‌سایت و شبکه‌های اجتماعی، با رویکرد برندینگ و جذب مخاطب.',
        icon: faker.image.personPortrait()
    },
    {
        name: 'امیرحسین حسینی',
        title: 'توسعه‌دهنده‌ی فول‌استک',
        comment: 'توانمند در توسعه‌ی هم‌زمان بخش فرانت‌اند و بک‌اند با تمرکز بر کارایی، امنیت و مقیاس‌پذیری.',
        icon: faker.image.personPortrait()
    },
    {
        name: 'نگار صادقی',
        title: 'تحلیل‌گر داده',
        comment: 'متخصص در جمع‌آوری، پردازش و تحلیل داده‌ها برای پشتیبانی از تصمیم‌گیری‌های کلان و بهینه‌سازی روندها.',
        icon: faker.image.personPortrait()
    }
]
</script>

<template>
  <div class="h-screen flex gap-7 flex-col items-center bg-dark md:px-10 px-2 md:pt-20 sm:pt-16 py-10">
    <div class="flex justify-start w-full gap-1">
        <h3 class="bg-main text-3xl px-2 rounded-lg min-w-max">تیم ما</h3>
        <p class="text-justify text-white">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
    </div>

    <div class="h-full w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-1 gap-3 overflow-auto members">
            <TeamMember v-for="member in members" :member="member"/>
    </div>
  </div>
</template>

<style scoped>
.members::-webkit-scrollbar {
    width: 10px;
    background: transparent;
    border: 1px solid #ffffff55;
    border-radius: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.members::-webkit-scrollbar-thumb {
    width: 5px;
    display: block;
    background-color: #F4CA39;
    border-radius: 15px;
}
</style>