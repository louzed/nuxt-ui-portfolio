<template>
  <div>
  <div class="border-b border-muted">
    <UContainer class="min-h-[calc(100vh-128px)] lg:flex lg:border-r-1 lg:border-l-1 border-muted">
      <div class="flex lg:w-1/2 justify-start items-center px-8 py-20 border-r-1 border-muted">
        <div class="flex flex-col items-start gap-3">
          <div class="flex gap-2 lg:mb-0 mb-2">
            <UBadge size="md" color="neutral" variant="soft">UI Design</UBadge>
            <UBadge size="md" color="neutral" variant="soft">Prototyp</UBadge>
            <UBadge size="md" color="neutral" variant="soft">Figma</UBadge>
          </div>
          <h1>Otopia</h1>
          <p class="lg:text-xl text-muted max-w-lg">
            Ideen- und Kollaborationsnetzwerk für Open-Source Projekte, Entwickler und Enthusiasten auf Basis von <NuxtLink to="https://carbondesignsystem.com/" class="text-(--ui-color-primary-500) underline">Ocelot Social</NuxtLink>
          </p>
        </div>
      </div>
      <div class="flex lg:w-1/2 items-center">
        <ClientOnly>
          <img src="/images/oto00.png" alt="Beschreibung des Bildes"
            class="min-w-full aspect-3/2 object-cover object-top-left" />
        </ClientOnly>
      </div>
    </UContainer>
  </div>

  <div class="border-b border-muted">
    <UContainer class="flex flex-col py-24 !px-4 items-center justify-center">
      <UIcon name="i-line-md-chat-round-alert" class="size-20 mb-6" />
      <h2 class="max-w-5xl text-center">
        Meinem Open Source Projekt fehlt es an Unterstützung
      </h2>
    </UContainer>
  </div>

  <div class="border-b-1 border-muted">
    <UContainer class="lg:flex lg:border-r lg:border-l border-muted">
      <div class="lg:border-r-1 order-2 lg:order-1 border-muted lg:w-1/2 lg:py-12">
        <img src="/images/oto01.png" alt="Hochschulstart" class="min-w-full bg-muted aspect-3/2 object-cover" />
      </div>
      <div class="flex flex-col lg:w-1/2 justify-center order-1 lg:order-2 px-8 pt-16 pb-10 lg:pt-16 lg:pb-16">
        <div class="flex flex-col items-center lg:items-start gap-3">
          <h4>Feed · Startseite</h4>
          <p class="hidden text-muted max-w-lg mb-4">
            Beschreibung
          </p>
        </div>
      </div>
    </UContainer>
  </div>

  <div class="border-b-1 border-muted">
    <UContainer class="lg:flex lg:border-r lg:border-l border-muted">
      <div class="flex flex-col lg:w-1/2 justify-center lg:border-r-1 border-muted px-8 pt-16 pb-10 lg:pt-16 lg:pb-16">
        <div class="flex flex-col items-center lg:items-end gap-3">
          <h4 class="text-center">Projektübersicht</h4>
          <p class="hidden text-muted lg:text-right max-w-lg mb-4">
            Beschreibung
          </p>
        </div>
      </div>
      <div class="lg:w-1/2 lg:py-12">
        <img src="/images/oto02.png" alt="Hochschulstart" class="min-w-full bg-muted aspect-3/2 object-cover" />
      </div>
    </UContainer>
  </div>

  <div class="border-b-1 border-muted">
    <UContainer class="lg:flex lg:border-r lg:border-l border-muted">
      <div class="lg:border-r-1 order-2 lg:order-1 border-muted lg:w-1/2 lg:py-12">
        <img src="/images/oto03.png" alt="Hochschulstart" class="min-w-full bg-muted aspect-3/2 object-cover" />
      </div>
      <div class="flex flex-col lg:w-1/2 justify-center order-1 lg:order-2 px-8 pt-16 pb-10 lg:pt-16 lg:pb-16">
        <div class="flex flex-col items-center lg:items-start gap-3">
          <h4>Profil</h4>
          <p class="hidden text-muted max-w-lg mb-4">
            Beschreibung
          </p>
        </div>
      </div>
    </UContainer>
  </div>

  <div class="border-b-1 border-muted">
    <UContainer class="lg:flex lg:border-r lg:border-l border-muted">
      <div class="flex flex-col lg:w-1/2 justify-center lg:border-r-1 border-muted px-8 pt-16 pb-10 lg:pt-16 lg:pb-16">
        <div class="flex flex-col items-center lg:items-end gap-3">
          <h4 class="text-center">Styleguide</h4>
          <p class="hidden text-muted lg:text-right max-w-lg mb-4">
            Beschreibung
          </p>
        </div>
      </div>
      <div class="lg:w-1/2 lg:py-12">
        <img src="/images/oto04.png" alt="Hochschulstart" class="min-w-full bg-muted aspect-3/2 object-cover" />
      </div>
    </UContainer>
  </div>

  <div class="border-b-1 border-muted">
    <UContainer class="lg:flex lg:border-r lg:border-l border-muted">
      <div class="lg:border-r-1 order-2 lg:order-1 border-muted lg:w-1/2 lg:py-12">
        <img src="/images/oto05.png" alt="Hochschulstart" class="min-w-full bg-muted aspect-3/2 object-cover" />
      </div>
      <div class="flex flex-col lg:w-1/2 justify-center order-1 lg:order-2 px-8 pt-16 pb-10 lg:pt-16 lg:pb-16">
        <div class="flex flex-col items-center lg:items-start gap-3">
          <h4>Styleguide</h4>
          <p class="hidden text-muted max-w-lg mb-4">
            Beschreibung
          </p>
        </div>
      </div>
    </UContainer>
  </div>
  </div>
</template>