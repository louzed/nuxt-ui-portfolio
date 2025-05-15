<script setup lang="ts">
import { useI18n } from '#imports'
const { locale } = useI18n()

const nextLocale = computed(() => (locale.value === 'en' ? 'de' : 'en'))

const toggleLanguage = () => {
  locale.value = nextLocale.value
}

const colorMode = useColorMode()

const nextTheme = computed(() => (colorMode.value === "dark" ? "light" : "dark"));

const switchTheme = () => {
  colorMode.preference = nextTheme.value
}

const startViewTransition = (event: MouseEvent) => {
  if (!document.startViewTransition) {
    switchTheme()
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  )

  const transition = document.startViewTransition(() => {
    switchTheme()
  })

  transition.ready.then(() => {
    const duration = 600
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ]
      },
      {
        duration: duration,
        easing: 'cubic-bezier(.76,.32,.29,.99)',
        pseudoElement: '::view-transition-new(root)'
      }
    )
  })
}
</script>
<template>
  <ClientOnly>
    <UButtonGroup>
      <UButton
        :aria-label="`Switch to ${nextTheme} mode`"
        :icon="colorMode.value === 'dark' ? 'i-line-md-sunny-filled-loop-to-moon-filled-loop-transition' : 'i-line-md-sun-rising-filled-loop'"
        :label="colorMode.value === 'dark' ? 'Dark' : 'Light'"
        color="neutral"
        variant="outline"
        size="md"
        class="rounded-md"
        @click="startViewTransition"
      />
      <UButton
        :aria-label="`Switch to ${nextLocale} language`"
        icon="i-mdi-translate"
        :label="nextLocale === 'de' ? 'Deutsch' : 'English'"
        color="neutral"
        variant="outline"
        size="md"
        class="rounded-md"
        @click="toggleLanguage"
      />
    </UButtonGroup>
  </ClientOnly>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-new(root) {
  z-index: 9999;
}
::view-transition-old(root) {
  z-index: 1;
}
</style>

