<script setup lang="ts">
import Section from '../section/Section.vue';
import SectionDots from './components/sectionDonts/SectionDots.vue';

// Sections
import Header from './sections/header/Header.vue';
import Services from './sections/services/Services.vue';
import Team from './sections/team/Team.vue';
import ContactUs from './sections/contact_us/ContactUs.vue';
</script>

<template>
    <div id="home" class="scroll-smooth flex flex-col gap-1 scroll-hidden snap-y snap-mandatory overflow-auto h-screen">
        <Section id="header">
            <Header />
        </Section>
        <Section id="services">
            <Services />
        </Section>
        <Section id="happy_clients">
            <Team />
        </Section>
        <Section id="contact_us">
            <ContactUs />
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