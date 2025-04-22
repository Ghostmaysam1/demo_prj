<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { width } from '@/utils/windowSize'

const submit = ref(false);

const form = reactive<{name: string, email: string, message: string}>({
    name: '',
    email:'',
    message:''
})

const handleSubmit = () => {
  submit.value = true;
    if (!form.name || !form.email || !form.message) {
        return
    }
    if (!testEmail.value) {
        return
    }

    // Here you can send the form data to your server or API
    console.log('Form submitted:', form)
    alert('پیام شما با موفقیت ارسال شد');
    submit.value = false;
    form.name = ''
    form.email = ''
    form.message = ''
}

const testEmail = computed(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(form.email);
})
</script>

<template>
  <div class="h-screen flex gap-7 flex-col items-center md:pt-20 sm:pt-16 py-10">
    <div class="flex">
      <h3 class="bg-[#B9FF66] text-3xl px-2 rounded-lg">ارتباط با ما</h3>
    </div>

    <div class="bg-[#F3F3F3] w-full rounded-4xl h-full pt-[60px] md:px-[100px] sm:px-[80px] px-[30px] pb-[80px] flex justify-between items-center    relative overflow-hidden">
        <form @submit.prevent="handleSubmit" class="lg:w-2/3 w-full flex flex-col gap-7">
            <label class="flex flex-col gap-3">
                <span class="text-2xl">نام</span>
                <input v-model="form.name" type="text" class="border border-black/80 outline-none rounded-[14px] w-full px-4 py-2" />
                <p v-if="submit && !form.name" class="text-sm font-thin text-red-600/70">لطفا فیلد را پر کنید</p>
            </label>

            <label class="flex flex-col gap-3">
                <span class="text-2xl">ایمیل*</span>
                <input v-model="form.email" type="text" dir="ltr" class="border border-black/80 outline-none rounded-[14px] w-full px-4 py-2" />
                <p v-if="submit && !form.email" class="text-sm font-thin text-red-600/70">لطفا فیلد را پر کنید</p>
                <p v-else-if="submit && !testEmail" class="text-sm font-thin text-red-600/70">ایمیل نا معتبر</p>
            </label>

            <label class="flex flex-col gap-3">
                <span class="text-2xl">پیام*</span>
                <textarea v-model="form.message" type="text" class="border max-h-[140px] h-140px min-h-[70px] border-black/80 outline-none rounded-[14px] w-full px-4 py-2" />
                <p v-if="submit && !form.message" class="text-sm font-thin text-red-600/70">لطفا فیلد را پر کنید</p>
            </label>

            <button class="bg-slate-900 cursor-pointer text-slate-50 text-xl flex justify-center items-center py-4 rounded-2xl">ارسال پیام</button>
        </form>

        <img v-if="width > 1280" src="@pics/illustration/star.svg" class="rotate-180 absolute left-0 transform -translate-x-1/2">
    </div>
  </div>
</template>
