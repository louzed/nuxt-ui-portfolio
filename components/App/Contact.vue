<template>
  <div class="border-b border-muted py-12 lg:py-24 relative overflow-hidden">
    <UContainer class="relative flex flex-col py-16 !px-4">
      <div class="absolute inset-0 bg-[url('/images/contact-light.jpg')] dark:bg-[url('/images/contact-dark.jpg')] 
        bg-fixed bg-cover bg-center bg-muted pointer-events-none">
      </div>
      
      <div v-intersection-observer.once="handleIntersection" class="size-16 flex mx-auto mb-4 relative z-10">
        <UIcon
          v-if="isVisible"
          name="i-line-md-coffee-half-empty-filled-loop"
          class="isolate size-16 mx-auto"
        />
      </div>
      <h3 class="text-center mb-2 relative z-10">Lassen Sie uns sprechen</h3>
      <p class="text-lg text-muted text-center mb-8 relative z-10">Ich freue mich auf Ihre Nachricht!</p>
      <div class="flex gap-2 mx-auto relative z-10">
        <UButton to="https://wa.me/491785785578?text=Hallo%20Markus,%20" target="blank" label="WhatsApp" size="lg"
          icon="i-mdi-whatsapp" color="success" />
        <UButton to="https://zeeg.me/biereth" target="blank" label="Termin buchen" size="lg"
          icon="i-mdi-external-link" trailing />
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components';
import { shallowRef } from 'vue';

// State variable to control the icon's visibility
const isVisible = shallowRef(false);

function handleIntersection(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void {
  const entry = entries[0];

  if (entry?.isIntersecting) {
    isVisible.value = true;
  }
}
</script>