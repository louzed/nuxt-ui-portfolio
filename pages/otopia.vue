<template>
  <div>
    <section id="projecthero">
      <ProjectHero
        :badges="['UI Design', 'Prototyp', 'Figma']"
        title="Otopia"
        description='Ideen- und Kollaborationsnetzwerk für Open-Source Projekte, Entwickler und Enthusiasten auf Basis von <NuxtLink to="https://carbondesignsystem.com/" class="text-(--ui-color-primary-500) underline">Ocelot Social</NuxtLink>'
        imageSrc="/images/oto00.png"
        viewTransitionName="project-image-otopia"
        imageAlt="Beschreibung des Bildes"
      />
    </section>

    <section id="message"> 
      <div class="border-b border-muted">
        <UContainer class="flex flex-col py-24 !px-4">
          <div v-intersection-observer.once="handleIntersection" class="isolate flex size-20 mb-4 mx-auto">
            <UIcon v-if="isVisible" name="i-line-md-chat-round-alert" class="size-20 mx-auto my-auto" />
          </div>
          <h2 class="max-w-5xl mx-auto text-center">Meinem Open Source Projekt fehlt es an Unterstützung.</h2>
        </UContainer>
      </div>
    </section>

    <section id="projectitems">
      <ProjectItem image="/images/oto01.png" title="Feed · Startseite" />
      <ProjectItem image="/images/oto02.png" title="Projektübersicht" />
      <ProjectItem image="/images/oto03.png" title="Profil"/>
      <ProjectItem image="/images/oto04.png" title="Styleguide" />
      <ProjectItem image="/images/oto05.png" title="Dark Mode" />
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