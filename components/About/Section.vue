<template>
    <div class="border-b border-muted">
    <UContainer class="flex flex-col py-24 !px-4">
      <h2 class="max-w-5xl mx-auto text-center">Kreative & attraktive Lösungen für komplexe Herausforderungen</h2>
    </UContainer>
  </div>

    <div class="border-b border-muted">
      <UContainer class="grid grid-cols-1 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:border-r lg:border-l border-muted">

        <div class="border-b lg:border-b-0 lg:border-r border-muted py-12 lg:row-span-2">
          <div class="flex flex-col items-start gap-4 h-full">
            <ClientOnly>
              <img :src="getImage('about')" alt="Beschreibung des Bildes" class="min-w-full min-h-full object-cover object-center" />
            </ClientOnly>
          </div>
        </div>

        <div class="border-b border-muted px-8 py-16">
          <div class="flex flex-col items-start gap-2">
            <div v-intersection-observer.once="handleIntersection"
              class="isolate flex mb-2 size-16 rounded-md bg-muted overflow-hidden">
              <UIcon v-if="isVisible" name="i-line-md-github-loop" class="size-12 mx-auto my-auto" />
            </div>
            <h4>Wer bin ich?</h4>
            <p class="text-lg text-muted mb-4 max-w-lg">
              Ich gestalte Webseiten und andere digitale Produkte seit ca. 20 Jahren aus Leidenschaft. 
            </p>
            <div class="flex gap-2">
              <DrawerCv />            
              <UButton to="https://github.com/louzed" target="_blank" icon="i-simple-icons-github" variant="ghost" color="neutral" size="lg" />
              <UButton to="https://dribbble.com/mbiereth" target="_blank" icon="i-mingcute-dribbble-fill" variant="ghost" color="neutral" size="lg" />
            </div>
          </div>
        </div>

        <div class="px-8 py-16">
          <div class="flex flex-col items-start gap-2">
            <div v-intersection-observer.once="handleIntersection2"
              class="isolate size-16 flex mb-2 rounded-md bg-muted overflow-hidden">
              <UIcon v-if="isVisible2" name="i-line-md-star-pulsating-loop" class="size-12 mx-auto my-auto" />
            </div>
            <h4>Certified UX Designer</h4>
            <p class="text-lg text-muted mb-4 max-w-lg">
              2022 absolvierte ich eine Weiterbildung zum UX/UI Designer und arbeite seitdem freiberuflich.
            </p>
            <div class="flex gap-2">
              <DrawerXdi />
              <DrawerWebflow />
            </div>
          </div>
        </div>

      </UContainer>
    </div>

  <AboutAccordion />
</template>

<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components';
import { ref } from 'vue';

const isVisible = ref(false);
const isVisible2 = ref(false);

function handleIntersection(entries: IntersectionObserverEntry[]) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      isVisible.value = true;
    }
  }
}

function handleIntersection2(entries: IntersectionObserverEntry[]) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      isVisible2.value = true;
    }
  }
}

const colorMode = useColorMode()

const getImage = (name: string) => {
  const suffix = colorMode.value === 'dark' ? 'dark' : 'light'
  return `/images/${name}-${suffix}.jpg`
}

</script>