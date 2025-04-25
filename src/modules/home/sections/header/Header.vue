<script setup lang="ts">
import Navbar from '@modules/navbar/Navbar.vue';
import { isMobile } from '@/utils/windowSize';
</script>

<template>
    <div class="h-screen relative md:py-[60px] py-[20px] bg-dark overflow-hidden">
        <div class="h-full #bg-slate-50 md:px-[60px] px-[20px]">
            <Navbar />
            <span class="block h-[70px]"></span> <!-- gap -->
            <div v-if="isMobile" class="flex h-full flex-col text-slate-50 justify-evenly items-center gap-5">
                <div class="flex flex-col items-center gap-5 text-center">
                    <div class="text-right">
                        <h2 class="text-3xl font-bold">سلام من <span class="text-main">امیر اسدی</span> هستم</h2>
                        <p class="flex items-center gap-2 font-bold"><span class="w-9 h-1 bg-main block"></span> برنامه نویس</p>
                    </div>
                    <h3 class="font-thin text-lg col-span-3 text-justify row-span-3 row-start-5">ما عاشق کدنویسی و ساختن چیزای باحال با تکنولوژی‌های روز دنیا هستیم. از طراحی تا توسعه، کنار شماییم تا ایده‌هات رو به نرم‌افزارهایی سریع، مقیاس‌پذیر و کاربردی تبدیل کنیم.</h3>
                </div>
                <img src="/men.png" alt="me" class=" relative z-50">
            </div>

            <div v-else class="grid grid-cols-2 gap-5">
                <div class="flex flex-col justify-between text-center bg text-slate-50">
                    <div class="flex flex-col gap-9">
                        <div class="text-right">
                        <h2 class="text-3xl font-bold">سلام من <span class="text-main">امیر اسدی</span> هستم</h2>
                        <p class="flex items-center gap-2 font-bold"><span class="w-9 h-1 bg-main block"></span> برنامه نویس</p>
                    </div>
                        <h3 class="font-thin text-lg col-span-3 text-justify row-span-3 row-start-5">ما عاشق کدنویسی و ساختن چیزای باحال با تکنولوژی‌های روز دنیا هستیم. از طراحی تا توسعه، کنار شماییم تا ایده‌هات رو به نرم‌افزارهایی سریع، مقیاس‌پذیر و کاربردی تبدیل کنیم.</h3>
                    </div>
                </div>
                <div class="flex justify-center items-center h-90">
                    <img src="/men.png" alt="me" class="h-[550px] bottom-0 z-50 absolute">
                </div>
            </div>
        </div>
        <img src="/wave1.svg" class="absolute z-10 bottom-0 opacity-65 w-full">
        <img src="/wave2.svg" class="absolute z-10 bottom-0 opacity-65 w-full">
    </div>
</template>