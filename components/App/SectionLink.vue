<script setup lang="ts">
defineProps<{
  name: string;
  sectionId: string;
  isActive: boolean;
}>();

function scrollIntoSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
  <button
    :class="[
      'flex items-center font-medium h-8 px-3 rounded-md transition-colors',
      isActive
        ? 'bg-muted text-primary-400'
        : 'hover:bg-muted hover:text-primary-500 cursor-pointer',
    ]"
    @click="scrollIntoSection(sectionId)"
  >
    {{ name }}
  </button>
</template>