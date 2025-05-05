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
import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'
import { useRouter } from 'vue-router'

const router = useRouter()

// deaktiviert das automatische Scrollen beim Seitenwechsel
router.options.scrollBehavior = () => false
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>

