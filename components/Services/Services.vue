<script setup lang="ts">
import { ref } from 'vue';
import ServiceCard from './ServiceCard.vue';
import type { Service } from './types/Service';

const services = ref<Service[]>([])

function generateServices(): void {
  services.value = [
    {
      icon: 'i-line-md-compass-loop',
      title: 'services.uxdesign.title',
      description: 'services.uxdesign.description',
      skills: ['Figma', 'Adobe', 'Sketch']
    },
    {
      icon: 'i-line-md-speed-loop',
      title: 'services.frontdev.title',
      description: 'services.frontdev.description',
      skills: ['HTML/CSS', 'NuxtJS', 'Tailwind']
    }
  ]
}

onMounted(() => {
  generateServices()
})
</script>
<template>
  <div class="border-b border-muted">
    <UContainer class="flex flex-col py-24 !px-4">
      <h2 class="max-w-5xl mx-auto text-center">{{ $t('services.header') }}</h2>
    </UContainer>
  </div>
  <div class="border-b border-muted">
    <UContainer class="lg:flex lg:border-r lg:border-l border-muted">
      <ServiceCard :services="services" />
    </UContainer>
  </div>
</template>

