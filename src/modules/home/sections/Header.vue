<script setup lang="ts">
import Navbar from '@modules/navbar/Navbar.vue';
import { isMobile } from '@/utils/windowSize';
</script>

<template>
    <div class="h-screen relative md:py-[60px] py-[20px] overflow-hidden">
        <Navbar />
        <span class="block h-[70px]"></span> <!-- gap -->
        <div>
            <div v-if="isMobile" class="flex flex-col justify-between items-center gap-5">
                <div class="flex flex-col items-center gap-5 text-center">
                    <h2 class="text-3xl font-bold">برج فناوری؛<br> جایی برای توسعه‌ راه‌حل‌های هوشمند</h2>
                    <h3 class="font-thin text-lg col-span-3 row-span-3 row-start-5">"ما عاشق کدنویسی و ساختن چیزای باحال با تکنولوژی‌های روز دنیا هستیم. از طراحی تا توسعه، کنار شماییم تا ایده‌هات رو به نرم‌افزارهایی سریع، مقیاس‌پذیر و کاربردی تبدیل کنیم."</h3>
                    <button class="bg-slate-900 w-full text-slate-50 max-w-[480px] text-xl flex justify-center items-center py-4 rounded-2xl">معرفی</button>
                </div>
                <img src="@pics/men.png" alt="me" class="h-80 object-cover">
            </div>

            <div v-else class="grid grid-cols-2 gap-5">
                <div class="flex flex-col justify-between text-center bg">
                    <div class="flex flex-col gap-9">
                        <h2 class="text-4xl font-bold">برج فناوری؛ جایی برای توسعه‌ راه‌حل‌های هوشمند</h2>
                        <h3 class="font-thin text-lg col-span-3 row-span-3 row-start-5">"ما عاشق کدنویسی و ساختن چیزای باحال با تکنولوژی‌های روز دنیا هستیم. از طراحی تا توسعه، کنار شماییم تا ایده‌هات رو به نرم‌افزارهایی سریع، مقیاس‌پذیر و کاربردی تبدیل کنیم."</h3>
                    </div>
                    <button class="bg-slate-900 text-slate-50 text-xl flex justify-center items-center py-4 rounded-2xl">معرفی</button>
                </div>
                <div class="flex justify-center items-center h-90">
                    <img src="@pics/men.png" alt="me" class="h-[550px] bottom-0 z-50 absolute">
                </div>
            </div>
        </div>
    </div>
</template>