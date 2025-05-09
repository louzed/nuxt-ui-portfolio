<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components';
import { ref } from 'vue';
import type { Service } from './types/Service';

const isVisible = ref(false);

function handleIntersection(entries: IntersectionObserverEntry[]): void {
  if (entries[0]?.isIntersecting) {
    isVisible.value = true;
  }
}

defineProps<{ services: Service[] }>()
</script>
<template>
  <div
    v-for="(service, index) in services"
    :key="index"
    class="flex flex-col lg:w-1/2 px-4 lg:px-8 py-16"
    :class="{ 'lg:border-r border-b lg:border-b-0 border-muted': index === 0 }"
  >
    <div class="isolate flex flex-col items-start gap-2">
      <div
        v-intersection-observer.once="handleIntersection"
        class="isolate flex size-16 mb-2 rounded-md bg-muted overflow-hidden"
      >
        <UIcon v-if="isVisible" :name="service.icon" class="size-12 mx-auto my-auto" />
      </div>
      <h4>{{ $t(service.title) }}</h4>
      <p class="text-lg text-muted max-w-lg mb-4">{{ $t(service.description) }}</p>
      <div class="flex flex-wrap gap-2">
        <UBadge
          v-for="skill in service.skills"
          :key="skill"
          size="md"
          color="neutral"
          variant="soft"
        >
          {{ skill }}
        </UBadge>
      </div>
    </div>
  </div>
</template>