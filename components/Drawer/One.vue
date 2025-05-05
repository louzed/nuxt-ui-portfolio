<template>
  <UDrawer v-model:open="open" should-scale-background>
    <UButton label="Lebenslauf" icon="i-academicons-cv-square" variant="outline" size="lg" @click="open = true" />

    <template #header>
      <div class="flex flex-grow max-w-4xl mx-auto justify-between items-center">
        <p class="text-muted text-lg pt-1">Lebenslauf</p>
        <UButton color="neutral" variant="ghost" icon="i-lucide-x" size="lg" @click="open = false" />
      </div>
    </template>

    <template #body>
      <div class="flex w-full">
        <div class="lg:flex max-w-4xl w-full mx-auto">
          <div class="flex flex-col gap-8 lg:w-1/2 pt-8 lg:pb-4">
            <CvItem
              v-for="(item, index) in leftColumnItems"
              :key="'left-' + index"
              :date-range="item.dateRange"
              :institution="item.institution"
              :title="item.title"
              :description="item.description"
            />
          </div>
          <div class="flex flex-col gap-8 lg:w-1/2 pt-8 lg:pb-4">
             <CvItem
              v-for="(item, index) in rightColumnItems"
              :key="'right-' + index"
              :date-range="item.dateRange"
              :institution="item.institution"
              :title="item.title"
              :description="item.description"
            />
          </div>
        </div>
      </div>
    </template>
  </UDrawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// Make sure to import your CvItem component
import CvItem from '/components/Drawer/CvItem.vue'

const open = ref(false)
const cvItems = [
  // Handelsassistent
  {
    dateRange: '2007-2012',
    institution: 'KiK GmbH',
    title: 'Handelsassistent',
    description: 'Ausbildung + Weiterbildung',
    column: 'left' // Spaltenzuordnung beibehalten oder anpassen nach Bedarf
  },
  // Teamleitung
  {
    dateRange: '2011-2014',
    institution: 'KiK GmbH',
    title: 'Teamleitung',
    description: 'Leitung einer Filiale mit 5-7 Mitarbeitern',
    column: 'left'
  },
  // Abitur
  {
    dateRange: '2014-2017',
    institution: 'Bayernkolleg Schweinfurt',
    title: 'Abitur',
    description: 'Zweiter Bildungsweg, 2,4',
    column: 'left'
  },
  // Mensch-Computer-Systeme
  {
    dateRange: '2017-2019',
    institution: 'Universität Würzburg',
    title: 'Mensch-Computer-Systeme',
    description: 'Erfolgreich abgebrochen',
    column: 'right'
  },
  // Weiterbildung UX Design
  {
    dateRange: '2021-2022',
    institution: 'XDI',
    title: 'Weiterbildung UX Design',
    description: '3-monatiger Fernkurs mit Mentor',
    column: 'right'
  },
  // UX & UI Designer
  {
    dateRange: 'seit 2022', // Behält das Format für die Anzeige bei
    institution: 'Freiberuflich',
    title: 'UX & UI Designer',
    description: 'Auf dem Weg zum Usability-Helden',
    column: 'right'
  }
];

// Separate items into columns
const leftColumnItems = cvItems.filter(item => item.column === 'left');
const rightColumnItems = cvItems.filter(item => item.column === 'right');

</script>