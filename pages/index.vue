<template>
  <div>
    <section id="hero" ref="heroSection">
      <Hero />
      <Services />
    </section>

    <section id="projects" ref="projectsSection">
      <Projects />
    </section>

    <section id="about" ref="aboutSection">
      <About />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

// Refs to your sections
const heroSection = ref<HTMLElement | null>(null);
const projectsSection = ref<HTMLElement | null>(null);
const aboutSection = ref<HTMLElement | null>(null);

// Access the shared state (MUST use the same key as in the header)
const activeSectionId = useState<string>('activeSection');

// --- Logic to determine the active section based on intersection ratio ---

// Keep track of the intersection state for each section
const sectionIntersections: Record<string, { isIntersecting: boolean; intersectionRatio: number }> = {};

// Function to handle intersection changes for any observed element
const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void => {
  let currentActiveId: string | null = null;
  let maxRatio = 0;

  entries.forEach(entry => {
    const targetId = entry.target.id;
    if (targetId) {
      sectionIntersections[targetId] = {
        isIntersecting: entry.isIntersecting,
        intersectionRatio: entry.intersectionRatio,
      };
    }
  });

  // After processing all entries, find the section with the largest intersection ratio
  for (const id in sectionIntersections) {
    const intersection = sectionIntersections[id];

    // --- FIX: Add a check here to ensure intersection is not undefined ---
    if (intersection !== undefined && intersection.isIntersecting && intersection.intersectionRatio > maxRatio) {
    // Or simply: if (intersection && intersection.isIntersecting && intersection.intersectionRatio > maxRatio) {
      maxRatio = intersection.intersectionRatio;
      currentActiveId = id;
    }
  }

  // Update the shared state IF an active section is found AND it's different from the current state
  if (currentActiveId !== null && activeSectionId.value !== currentActiveId) {
     activeSectionId.value = currentActiveId;
     // console.log('Active section updated:', activeSectionId.value); // Debugging
  }
};

// --- Set up Intersection Observers for each section ---

// Observe the hero section
const { stop: stopObservingHero } = useIntersectionObserver(
  heroSection,
  handleIntersection,
  { threshold: 0.1 } // Trigger the callback when 10% or more of the target is visible
);

// Observe the projects section
const { stop: stopObservingProjects } = useIntersectionObserver(
  projectsSection,
  handleIntersection,
  { threshold: 0.1 }
);

// Observe the about section
const { stop: stopObservingAbout } = useIntersectionObserver(
  aboutSection,
  handleIntersection,
  { threshold: 0.1 }
);

// The observers are automatically stopped when the component is unmounted.
// The 'stop' functions returned by useIntersectionObserver can also be called manually if needed.


useHead({
  title: "Markus Biereth - UX/UI Design & Frontend Development in Mainfranken",
  meta: [
    {
      name: "description",
      content: "Willkommen auf meinem Portfolio. Entdecke meine Projekte im Bereich UX/UI Design.",
    },
  ],
});
</script>