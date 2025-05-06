<template>
  <UApp>
    <div data-vaul-drawer-wrapper>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>

<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'
  import { nextTick, watch } from 'vue'

  const route = useRoute()

  // Delay helper (replace with your actual transition time)
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  watch(
    () => [route.fullPath, route.hash],
    async ([to, hash], [from]) => {
      await nextTick()

      const fromPath = from?.split('#')[0] || ''
      const toPath = to?.split('#')[0] || ''
      const isSamePage = fromPath === toPath
      const isHashLink = !!hash

      if (isSamePage && isHashLink) {
        // Smooth scroll on same page
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // Delay scroll if navigating from another page
        await delay(350)
        if (hash) {
          const el = document.querySelector(hash)
          if (el) {
            el.scrollIntoView({ behavior: 'auto' })
          } else {
            window.scrollTo({ top: 0 })
          }
        } else {
          window.scrollTo({ top: 0 })
        }
      }
    }
  )
</script>

<style>
.page-leave-active,
.page-enter-active {
  transition: all 0.33s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.6rem);
  translate: 0 40px;
}
</style>

