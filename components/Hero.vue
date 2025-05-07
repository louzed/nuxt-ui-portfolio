<template>
  <section id="hero">
    <div class="border-b border-muted">
      <UContainer class="min-h-[calc(100vh-128px)] lg:flex lg:border-r-1 lg:border-l-1 border-muted">
        <div class="flex lg:w-1/2 justify-start items-center px-4 lg:px-8 py-20 border-r-1 border-muted">
          <div class="flex flex-col items-start gap-2">
            <ClientOnly>
              <img :src="getImage('avatar')" alt="Markus Biereth" class="w-28 h-28 mb-4 rounded-full" />
            </ClientOnly>
            <div class="flex mb-2">
              <UBadge icon="i-svg-spinners-pulse-multiple" size="md" color="success" variant="outline" class="rounded-full">
                Available for work
              </UBadge>
            </div>
            <h1>Markus Biereth</h1>
            <p class="text-xl text-muted max-w-lg">
              UX/UI Designer & Webentwickler in Mainfranken
            </p>
            <div class="flex flex-row gap-2 mt-6">
              <UButton to="https://wa.me/491785785578?text=Hallo%20Markus,%20" target="blank" label="WhatsApp" size="lg" icon="i-mdi-whatsapp" color="success" />
              <UButton to="https://zeeg.me/biereth" label="Termin buchen" size="lg" trailing-icon="i-mdi-external-link" />
            </div>
          </div>
        </div>
        <div class="flex lg:w-1/2 items-center">
          <ClientOnly>
            <img :src="getPng('hero')" alt="Beschreibung des Bildes"
              class="min-w-full aspect-3/2 object-cover object-top-left" />
          </ClientOnly>
        </div>
      </UContainer>
    </div>
  </section>
</template>

<script setup>
const colorMode = useColorMode()

const getImage = (name) => {
  const suffix = colorMode.value === 'dark' ? 'dark' : 'light'
  return `/images/${name}-${suffix}.jpg`
}
const getPng = (name) => {
  const suffix = colorMode.value === 'dark' ? 'dark' : 'light'
  return `/images/${name}-${suffix}.png`
}
</script>