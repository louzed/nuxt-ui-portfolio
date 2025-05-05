<template>
  <div>
    <div class="border-b border-muted">
      <UContainer class="lg:flex py-16 lg:py-32 !px-4 justify-center">
        <h2 class="max-w-5xl text-center">
          Kreative und ansprechende Lösungen für komplexe Herausforderungen
        </h2>
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
              class="isolate flex mb-2 rounded-md bg-muted overflow-hidden">
              <UIcon v-if="isVisible" name="i-line-md-github-loop" class="isolate size-12 mx-2 my-2" />
            </div>
            <h4>Wer bin ich?</h4>
            <p class="text-lg text-muted mb-4 max-w-lg">
              Ich gestalte Webseiten und andere digitale Produkte seit ca. 20 Jahren aus Leidenschaft. 
            </p>
            <div class="flex gap-2">
              <DrawerOne />            
              <UButton to="https://github.com/louzed" target="_blank" icon="i-simple-icons-github" variant="ghost" color="neutral" size="lg" />
              <UButton to="https://dribbble.com/mbiereth" target="_blank" icon="i-mingcute-dribbble-fill" variant="ghost" color="neutral" size="lg" />
            </div>
          </div>
        </div>

        <div class="px-8 py-16">
          <div class="flex flex-col items-start gap-2">
            <div v-intersection-observer.once="handleIntersection2"
              class="isolate flex mb-2 rounded-md bg-muted overflow-hidden">
              <UIcon v-if="isVisible2" name="i-line-md-star-pulsating-loop" class="isolate size-12 mx-2 my-2" />
            </div>
            <h4>Certified UX Designer</h4>
            <p class="text-lg text-muted mb-4 max-w-lg">
              2022 absolvierte ich eine Weiterbildung zum UX/UI Designer und arbeite seitdem freiberuflich.
            </p>
            <div class="flex gap-2">
              <DrawerTwo />
              <DrawerThree />
            </div>
          </div>
        </div>

      </UContainer>
    </div>

    <div class="border-b border-muted">
      <UContainer class="lg:border-r lg:border-l border-muted !px-8 py-12">
        <UAccordion v-model="active" :items="items" />
      </UContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { AccordionItem } from '@nuxt/ui'
import { vIntersectionObserver } from '@vueuse/components';
import { shallowRef } from 'vue';

// State variable to control the icon's visibility
const isVisible = shallowRef(false);
const isVisible2 = shallowRef(false);

function handleIntersection(entries: IntersectionObserverEntry[]) {
  const entry = entries[0];
  if (entry.isIntersecting) {
    isVisible.value = true;
  }
}

function handleIntersection2(entries: IntersectionObserverEntry[]) {
  const entry = entries[0];
  if (entry.isIntersecting) {
    isVisible2.value = true;
  }
}

const active = ref('0');

const items = ref<AccordionItem[]>([
  {
    label: 'Was ist User Experience Design?',
    defaultopen: 'true',
    content: 'Meine Aufgabe ist es, Produkte, Dienstleistungen oder Systeme so zu gestalten, dass sie für den Nutzer einfach, intuitiv und angenehm zu bedienen sind. Eine gute Usability führt zu zufriedeneren Kunden, die gerne wiederkommen und Ihr Angebot weiterempfehlen. Das senkt die Kosten für Support und Schulung, erhöht die Kundentreue und verschafft Ihrem Unternehmen einen klaren Wettbewerbsvorteil.'
  },
  {
    label: 'Ist Ihre Wordpress-Seite veraltet?',
    content: 'Im Vergleich zu modernen, performanten Technologien (Webflow/Nuxt/Tailwind) sind alte WordPress Installationen oft deutlich langsamer und birgen hohe Sicherheitsrisiken, primär durch veraltete Plugins oder PHP-Versionen. Zudem wirkt ein antiquiertes Design wenig seriös und kann viele potenzielle Kunden abschrecken. Warten Sie deshalb nicht zu lange, um über eine technische und gestalterische Auffrischung nachzudenken. Ein frisches Erscheinungsbild könnte in Ihrem Unternehmen für neuen Aufschwung sorgen.'
  },
  {
    label: 'Was kann KI für Ihr Unternehmen tun?',
    content: 'Durch den Einsatz von KI lassen sich Routineaufgaben effizienter gestalten und Abläufe in der Webentwicklung und im Design verkürzen. Das führt zu mehr Effizienz und kann sich positiv auf Ihr Budget auswirken. Meine Rolle ist es, als erfahrener Generalist, diese intelligenten Helfer gezielt einzusetzen, sie mit kreativer Expertise zu kombinieren und Ihr Projekt ganzheitlich und zielgerichtet zu steuern.'
  },
  {
    label: 'Wie gehe Ich bei einem Projekt vor?',
    content: 'In meinem Designprozess nutze ich, was funktioniert – ob Lean UX oder agile Produktentwicklung. Wichtig ist: Wir starten mit einem tiefgehenden Verständnis für die Nutzer. Daraus entwickeln wir gemeinsam klare Prioritäten und Ideen, die sich testen und umsetzen lassen. Design Thinking Methoden & Workshops können helfen – sind aber selten Ersatz für sachliche Problemlösungen und echten Innovationsgeist!'
  },
  {
    label: 'Was kostet eine Webseite bei mir?',
    content: 'Meine Preismodelle sind transparent. Der Basissatz beträgt 33€ pro Stunde (zzgl. MwSt.). Für standardisierte Projekte wie eine Landing Page (Design & Entwicklung) biete ich einen Festpreis von 999€ (zzgl. MwSt.) an.'
  },
])

const colorMode = useColorMode()

const getImage = (name: string) => {
  const suffix = colorMode.value === 'dark' ? 'dark' : 'light'
  return `/images/${name}-${suffix}.jpg`
}

</script>