<template>
    <div class="border-b border-muted">
      <UContainer class="flex flex-col py-24 !px-4">
        <div v-intersection-observer.once="handleIntersection" class="isolate flex mb-4 mx-auto">
          <UIcon v-if="icon && isVisible" :name="icon" class="size-20" />
        </div>
        <h2 class="max-w-5xl mx-auto text-center">{{ message }}</h2>
      </UContainer>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    icon: {
      type: String,
      default: 'i-line-md-chat-round-alert',
    },
    message: {
      type: String,
      required: true,
    },
  });
  
  import { vIntersectionObserver } from '@vueuse/components';
  import { ref } from 'vue';
  
  const isVisible = ref(false);
  
  function handleIntersection(entries: IntersectionObserverEntry[]): void {
    if (entries[0]?.isIntersecting) {
      isVisible.value = true;
    }
  }
  </script>