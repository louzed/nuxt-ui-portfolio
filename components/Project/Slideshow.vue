<template>
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