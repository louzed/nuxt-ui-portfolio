<template>
    <div class="border-b border-muted">
      <UContainer class="lg:border-r lg:border-l border-muted !px-8 py-12">
        <UAccordion v-model="active" :items="items" />
      </UContainer>
    </div>
</template>

<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'
import { ref } from 'vue';

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

</script>