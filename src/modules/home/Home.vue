<script setup lang="ts">
import Section from '../section/Section.vue';
import SectionDots from './components/sectionDonts/SectionDots.vue';

// Sections
import Header from './sections/Header.vue';
</script>

<template>
    <div id="home" class="scroll-smooth scroll-hidden snap-y snap-mandatory overflow-auto h-screen">
        <Section>
            <Header />
        </Section>
        <Section>
            <div class="h-screen flex items-center justify-center">
                <h1 class="text-5xl font-bold">صفحه دوم</h1>
            </div>
        </Section>
        <Section>
            <div class="h-screen flex items-center justify-center">
                <h1 class="text-5xl font-bold">صفحه سوم</h1>
            </div>
        </Section>
        <Section>
            <div class="h-screen flex items-center justify-center">
                <h1 class="text-5xl font-bold">صفحه چهارم</h1>
            </div>
        </Section>
        <Section>
            <div class="h-screen flex items-center justify-center">
                <h1 class="text-5xl font-bold">صفحه پنجم</h1>
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