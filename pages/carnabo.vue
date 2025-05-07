<template>
  <div>
    <section id="projecthero">
      <ProjectHero
        :badges="['UX/UI Design', 'Auftrag', 'Figma']"
        title="Carnabo"
        duration="Projektdauer: ~1 Woche"
        description="Überarbeitung der Fahrzeugsuche eines Webportals, welches sich auf Auto-Abonnemonts spezialisiert hat."
        imageSrc="/images/car00.png"
        viewTransitionName="project-image-carnabo"
        imageAlt="Beschreibung des Bildes"
      />
    </section>

    <section id="message"> 
      <div class="border-b border-muted">
        <UContainer class="flex flex-col py-24 !px-4">
          <div v-intersection-observer.once="handleIntersection" class="isolate flex size-20 mb-4 mx-auto">
            <UIcon v-if="isVisible" name="i-line-md-chat-round-alert" class="size-20 mx-auto my-auto" />
          </div>
          <h2 class="max-w-5xl mx-auto text-center">Ich möchte schnell und unkompliziert ein Auto-Abo finden.</h2>
        </UContainer>
      </div>
    </section>

    <section id="projectitems">
      <ProjectItem image="/images/car01.png" title="Ausgangspunkt" />
      <ProjectItem image="/images/car02.png" title="Erste Überarbeitung" />
      <ProjectItem image="/images/car03.png" title="Layout Variationen"/>
      <ProjectItem image="/images/car04.png" title="Mobile Ansicht" />
      <ProjectItem image="/images/car05.png" title="Styleguide" />
    </section>

    <section id="contact">
      <AppContact />
    </section>
  </div>
</template>

<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components';
import { ref } from 'vue';

const isVisible = ref(false);

function handleIntersection(entries: IntersectionObserverEntry[]): void {
  if (entries[0]?.isIntersecting) {
    isVisible.value = true;
  }
}
</script>
