<script setup lang="ts">
import Section from '../section/Section.vue';
import SectionDots from './components/sectionDonts/SectionDots.vue';

// Sections
import Header from './sections/Header.vue';
import Services from './sections/services/Services.vue';
</script>

<template>
    <div id="home" class="scroll-smooth md:px-[60px] px-[20px] flex flex-col gap-1 scroll-hidden snap-y snap-mandatory overflow-auto h-screen">
        <Section id="header">
            <Header />
        </Section>
        <Section id="section2">
            <Services />
        </Section>
        <Section id="section3">
            <div class="h-screen flex items-center justify-center">
                <h1 class="text-5xl font-bold">صفحه سوم</h1>
            </div>
        </Section>
        <Section id="section4">
            <div class="h-screen flex items-center justify-center">
                <h1 class="text-5xl font-bold">صفحه چهارم</h1>
            </div>
        </Section>
        <Section id="section5">
            <div class="h-screen flex items-center justify-center">
                <h1 class="text-5xl font-bold">صفحه پنجم</h1>
            </div>
        </Section>
        <Section id="section6">
            <div class="h-screen flex items-center justify-center">
                <h1 class="text-5xl font-bold">صفحه ششم</h1>
            </div>
        </Section>


        <!-- Dots -->
        <SectionDots class="md:flex hidden" />
    </div>
</template>

<style>
.scroll-hidden {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.scroll-hidden::-webkit-scrollbar {
  display: none;
}
</style>