<template>
  <transition name="fade">
    <div v-if="visible" class="w-full bg-primary-500 text-white px-4 py-3 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <component :is="icon" class="w-5 h-5 text-white" v-if="icon" />
        <p class="text-sm font-medium">Welcome to my new portfolio!</p>
      </div>
      <div class="flex items-center gap-2">
        <button
          v-for="(action, index) in actions"
          :key="index"
          @click="action.onClick"
          class="text-sm font-semibold underline underline-offset-2 hover:text-white/80"
        >
          {{ action.label }}
        </button>
        <button @click="close" aria-label="Close banner" class="ml-2 text-white/70 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  message: { type: String, required: true },
  icon: { type: [Object, String], default: null },
  actions: {
    type: Array,
    default: () => []
  }
})

const visible = ref(true)
const close = () => (visible.value = false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
