<template>
  <div class="border-b-1 border-muted">
    <Logos />
  </div>

  <div class="border-b-1 border-muted">
    <UContainer class="lg:flex lg:border-r lg:border-l border-muted py-12 lg:py-0">
      <NuxtLink to="/hochschulstart" class="block lg:border-r-1 border-muted lg:w-1/2 lg:py-12">
        <img src="/images/hss00.png" alt="Hochschulstart" view-transition-name="project-image-hochschulstart"
          class="min-w-full bg-muted aspect-3/2 object-cover" />
      </NuxtLink>
      <div class="flex flex-col lg:w-1/2 px-4 lg:px-8 py-8 justify-center">
        <div class="flex flex-col items-start gap-3">
          <div class="flex gap-2 mb-2">
            <UBadge size="md" color="neutral" variant="soft">UI Design</UBadge>
            <UBadge size="md" color="neutral" variant="soft">Auftrag</UBadge>
            <UBadge size="md" color="neutral" variant="soft">Figma</UBadge>
          </div>
          <h5>Barrierefrei an Hochschulen bewerben</h5>
          <p class="text-muted max-w-lg mb-4">
            Portal für Hochschulbewerbungen mit Numerus Clausus.
          </p>
          <div class="flex gap-2">
            <UButton to="/hochschulstart" trailing-icon="i-mdi-arrow-right-thin" label="Hochschulstart"
              variant="outline" color="primary" size="lg" />
          </div>
        </div>
      </div>
    </UContainer>
  </div>

  <div class="border-b-1 border-muted">
    <UContainer class="lg:flex lg:border-r lg:border-l border-muted py-12 lg:py-0">
      <NuxtLink to="/carnabo" class="block lg:border-r-1 border-muted lg:w-1/2 lg:py-12">
        <img src="/images/car00.png" alt="Carnabo" view-transition-name="project-image-carnabo"
          class="min-w-full bg-muted aspect-3/2 object-cover" />
      </NuxtLink>
      <div class="flex flex-col lg:w-1/2 px-4 lg:px-8 py-8 justify-center">
        <div class="flex flex-col items-start gap-3">
          <div class="flex gap-2 mb-2">
            <UBadge size="md" color="neutral" variant="soft">UX/UI Design</UBadge>
            <UBadge size="md" color="neutral" variant="soft">Auftrag</UBadge>
            <UBadge size="md" color="neutral" variant="soft">Figma</UBadge>
          </div>
          <h5>
            Auto-Abos finden und vergleichen
          </h5>
          <p class="text-muted mb-4 max-w-lg">
            Überarbeitung der Fahrzeugsuche eines Webportals, welches sich auf Auto-Abonnemonts spezialisiert hat.
          </p>
          <div class="flex gap-2">
            <UButton to="/carnabo" trailing-icon="i-mdi-arrow-right-thin" label="Carnabo" variant="outline"
              color="primary" size="lg" />
          </div>
        </div>
      </div>
    </UContainer>
  </div>

  <div class="border-b-1 border-muted">
    <UContainer class="lg:flex lg:border-r lg:border-l border-muted py-12 lg:py-0">
      <NuxtLink to="/otopia" class="block lg:border-r-1 border-muted lg:w-1/2 lg:py-12">
        <img src="/images/oto00.png" alt="Otopia" view-transition-name="project-image-otopia"
          class="min-w-full bg-muted aspect-3/2 object-cover" />
      </NuxtLink>
      <div class="flex flex-col lg:w-1/2 px-4 lg:px-8 py-8 justify-center">
        <div class="flex flex-col items-start gap-3">
          <div class="flex gap-2 mb-2">
            <UBadge size="md" color="neutral" variant="soft">UX/UI Design</UBadge>
            <UBadge size="md" color="neutral" variant="soft">Prototyp</UBadge>
            <UBadge size="md" color="neutral" variant="soft">Figma</UBadge>
          </div>
          <h5>
            Open Source fördern und verbinden
          </h5>
          <p class="text-muted mb-4 max-w-lg">
            Ideen- und Kollaborationsnetzwerk für Open-Source Projekte, Entwickler und Enthusiasten
          </p>
          <div class="flex gap-2">
            <UButton to="/otopia" trailing-icon="i-mdi-arrow-right-thin" label="Otopia" variant="outline"
              color="primary" size="lg" />
          </div>
        </div>
      </div>
    </UContainer>
  </div>

  <div class="border-b-1 border-muted">
    <UContainer class="lg:flex lg:border-r lg:border-l border-muted py-12">

      <UCarousel v-slot="{ item }" loop arrows dots :autoplay="{ delay: 2400 }" :items="items"
        :ui="{ item: 'lg:basis-1/2 ps-0 lg:translate-x-1/2' }" class="flex">
        <img :src="item" width="100%" height="234" class="aspect-3/2 bg-accented object-cover translate-x-2">
      </UCarousel>

    </UContainer>
  </div>
</template>

<script setup lang="ts">
const items = [
  '/images/slide01.png',
  '/images/slide02.png',
  '/images/slide03.png',
  '/images/slide04.png',
  '/images/slide05.png',
  '/images/slide06.png',
  '/images/slide07.png',
  '/images/slide08.png',
  '/images/slide09.png',
  '/images/slide10.png',
  '/images/slide11.png',
  '/images/slide12.png',
];
</script>


<style scoped></style>