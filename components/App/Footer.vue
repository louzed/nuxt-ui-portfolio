<template>
  <div class="border-b border-muted py-12 lg:py-24">
    <UContainer
      class="flex flex-col bg-muted py-16 !px-4 items-center justify-center relative overflow-hidden">
      <div
        v-intersection-observer.once="handleIntersection"
        class="isolate flex justify-center items-center rounded-md overflow-hidden"
      >
        <UIcon
          v-if="isVisible"
          name="i-line-md-coffee-half-empty-filled-loop"
          class="isolate size-16 mb-4"
        />
      </div>
      <h3 class="text-center mb-2 text-foreground">Lassen Sie uns sprechen</h3>
      <p class="text-lg text-muted text-center mb-8">Ich freue mich auf Ihre Nachricht!
      </p>
      <div class="flex gap-2">
        <UButton to="https://wa.me/491785785578?text=Hallo%20Markus,%20" target="blank" label="WhatsApp" size="lg"
          icon="i-mdi-whatsapp" color="success" />
        <UButton to="https://zeeg.me/biereth" target="blank" label="Termin buchen" size="lg"
          icon="i-mdi-external-link" trailing />
      </div>
    </UContainer>
  </div>

  <footer class="w-full py-4 bg-default lg:py-0">
    <UContainer
      class="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 min-h-16 !px-8">

      <nav class="flex text-sm gap-4 text-muted justify-center items-center">
        <NuxtLink to="/disclaimer" class="hover:text-primary-500 transition">Impressum</NuxtLink>
        <NuxtLink to="/privacy" class="hover:text-primary-500 transition">Datenschutz</NuxtLink>
      </nav>

      <div class="text-xs lg:text-sm text-center lg:text-right text-muted">
        © {{ new Date().getFullYear() }} Markus Biereth
      </div>
    </UContainer>
  </footer>
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