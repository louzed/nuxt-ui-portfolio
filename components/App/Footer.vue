<template>
  <footer class="w-full py-4 bg-default lg:py-0">
    <UContainer
      class="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 min-h-16 !px-8">

      <nav class="flex text-sm gap-4 text-muted justify-center items-center">
        <NuxtLink to="/disclaimer" class="hover:text-primary-500 transition">Impressum</NuxtLink>
        <NuxtLink to="/privacy" class="hover:text-primary-500 transition">Datenschutz</NuxtLink>
      </nav>

      <div class="text-xs lg:text-sm text-center lg:text-right text-muted">
        © {{ new Date().getFullYear() }} Markus Biereth
      </div>
    </UContainer>
  </footer>
</template>