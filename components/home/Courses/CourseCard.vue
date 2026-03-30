<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden">
    
    <img :src="image" class="w-full h-48 object-cover" />

    <div class="p-6">
      <span class="bg-primary text-white px-3 py-1 rounded text-sm">
        {{ category }}
      </span>

      <h3 class="text-xl font-bold mt-4">
        {{ title }}
      </h3>

      <p class="text-gray-600 my-3">
        {{ desc }}
      </p>

      <div class="flex justify-between text-sm text-gray-500 mb-4">
        <span>{{ level }}</span>
        <span>{{ duration }}</span>
      </div>

      <NuxtLink to="#contact" class="btn btn-primary w-full">
        سجل الآن
      </NuxtLink>
    </div>

  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  desc: String,
  image: String,
  category: String,
  level: String,
  duration: String
})
</script>