<template>
  <div class="border-b border-muted">
    <UContainer class="lg:flex py-16 px-4 lg:py-32 justify-center">
      <h2 class="max-w-5xl text-center">
        Moderne und skalierbare Anwendungen für innovative Unternehmen
      </h2>
    </UContainer>
  </div>

  <div class="border-b border-muted">
    <UContainer class="lg:flex lg:border-r lg:border-l border-muted">
      <div class="flex flex-col lg:w-1/2 px-4 lg:px-8 py-16 lg:border-r border-b lg:border-b-0 border-muted">
        <div class="isolate flex flex-col items-start gap-2">
          <div v-intersection-observer.once="handleIntersection"  class="isolate flex mb-2 rounded-md bg-muted overflow-hidden">
            <UIcon v-if="isVisible" name="i-line-md-compass-loop" class="isolate size-12 mx-2 my-2" />
          </div>
          <h4>UX & UI Design</h4>
          <p class="text-lg text-muted max-w-lg mb-4">
            Von der Zielgruppenanalyse über Wireframes, Design Systemen und Prototyping gestalte ich Produkte und Software, die Ihre Kunden begeistern und zu treuen Vertretern Ihrer Marke machen.
          </p>
          <div class="flex gap-2">
            <UBadge size="md" color="neutral" variant="soft">FIGMA</UBadge>
            <UBadge size="md" color="neutral" variant="soft">ADOBE</UBadge>
            <UBadge size="md" color="neutral" variant="soft">SKETCH</UBadge>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:w-1/2 px-4 lg:px-8 py-16">
        <div class="flex flex-col items-start gap-2">
          <div v-intersection-observer.once="handleIntersection" class="isolate flex mb-2 rounded-md bg-muted overflow-hidden">
             <UIcon v-if="isVisible" name="i-line-md-speed-loop" class="isolate size-12 mx-2 my-2" />
          </div>
          <h4>Frontend Development</h4>
          <p class="text-lg text-muted max-w-lg mb-4">
            Vom Prototypen zum interaktiven Erlebnis: Mit den passenden Werkzeugen – ob Code oder effiziente Webbuilder – sorge ich für eine technische Basis, die schnell, sicher und responsiv ist.
          </p>
          <div class="flex flex-wrap gap-2">
            <UBadge size="md" color="neutral" variant="soft">HTML/CSS</UBadge>
            <UBadge size="md" color="neutral" variant="soft">TAILWIND</UBadge>
            <UBadge size="md" color="neutral" variant="soft">NUXT</UBadge>
            <UBadge size="md" color="neutral" variant="soft">CMS</UBadge>
            <UBadge size="md" color="neutral" variant="soft">SEO</UBadge>
          </div>
        </div>
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