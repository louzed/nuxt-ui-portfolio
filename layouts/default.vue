<template>
  <ClientOnly>
    <Particles v-if="colorMode.value === 'dark'" />
  </ClientOnly>
  <AppHeader />
  <main class="overflow-x-hidden">
    <slot />
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
const colorMode = useColorMode()
</script>