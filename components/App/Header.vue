<template>
  <header class="sticky top-0 z-40 bg-default border-muted border-b shadow-none">
    <UContainer class="grid grid-cols-[1fr_auto_1fr] h-16 items-center !px-8">
      <nav class="nav flex items-center justify-start">
        <ul class="flex gap-2">
          <li v-for="link in navLinks" :key="link.id">
            <ClientOnly>
              <SectionLink
                :name="link.name"
                :section-id="link.id"
                :is-active="activeSectionId === link.id"
              />
            </ClientOnly>
          </li>
          <li>
            <button 
              class="flex items-center font-medium h-8 px-3 rounded-md transition-colors"
              v-for="locale in locales" @click="setLocale(locale.code)">
              {{ locale.name }}
            </button>
          </li>
          <!-- <li>
            <ClientOnly>
              <NuxtLink 
                to="/#hero"
                :class="['flex items-center font-medium hover:bg-muted hover:text-primary-500 h-8 px-3 rounded-md', { 'text-primary-400 bg-muted': activeSectionId === 'hero' }]">
                Startseite
              </NuxtLink>
            </ClientOnly>
          </li>
          <li>
            <ClientOnly>
              <NuxtLink 
                to="/#projects"
                :class="['flex items-center font-medium hover:bg-muted hover:text-primary-500 h-8 px-3 rounded-md', { 'text-primary-400 bg-muted': activeSectionId === 'projects' }]">
                Projekte
              </NuxtLink>
            </ClientOnly>
          </li>
          <li>
            <ClientOnly>
              <NuxtLink 
                to="/#about"
                :class="['flex items-center font-medium hover:bg-muted hover:text-primary-500 h-8 px-3 rounded-md', { 'text-primary-400 bg-muted': activeSectionId === 'about' }]">
                Über mich
              </NuxtLink>
            </ClientOnly>
          </li> -->
        </ul>
      </nav>

      <div class="flex items-center justify-center w-10">
        <NuxtLink to="/" aria-label="Startseite">
          <svg class="h-10 w-10 fill-primary-500" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M27.8189 3.0587C29.7972 5.03699 30.6037 7.7433 30.2385 10.3152C32.8104 9.95001 35.5167 10.7565 37.495 12.7348C40.835 16.0748 40.835 21.49 37.495 24.83L21.7713 40.5537L0 18.7824L15.7237 3.0587C19.0637 -0.281286 24.4789 -0.281286 27.8189 3.0587ZM26.4029 6.89372C27.3141 8.80117 26.9797 11.1549 25.3998 12.7348L20.5613 17.5733L15.7237 22.411C15.0557 23.079 15.0557 24.162 15.7237 24.83C16.3917 25.498 17.4747 25.498 18.1427 24.83L22.9804 19.9924L27.8189 15.1539C29.3988 13.574 31.7525 13.2396 33.66 14.1508C34.172 14.3954 34.6519 14.7298 35.076 15.1539C37.08 17.1579 37.08 20.407 35.076 22.411L30.2375 27.2495L22.9808 34.5061C22.9808 34.5061 21.7713 35.7156 20.5618 34.5061C19.3523 33.2966 20.5618 32.0871 20.5618 32.0871L26.7303 25.9185L32.6569 19.9919C33.3249 19.3239 33.3249 18.2409 32.6569 17.5729C31.9889 16.9049 30.9059 16.9049 30.2379 17.5729L24.3113 23.4995L20.5618 27.249C18.9819 28.8289 16.6281 29.1633 14.7207 28.2521C14.2086 28.0075 13.7288 27.6731 13.3047 27.249C12.8806 26.8249 12.5462 26.3451 12.3016 25.833C11.3904 23.9256 11.7248 21.5718 13.3047 19.9919L17.0542 16.2424L22.9808 10.3158C23.6488 9.6478 23.6488 8.56477 22.9808 7.89677C22.3128 7.22877 21.2298 7.22877 20.5618 7.89677L14.6352 13.8234L8.46661 19.9919C8.46661 19.9919 7.2571 21.2014 6.04758 19.9919C4.83807 18.7824 6.04758 17.5729 6.04758 17.5729L13.3042 10.3162L18.1427 5.47774C20.1467 3.47374 23.3959 3.47374 25.3998 5.47774C25.8239 5.90184 26.1583 6.3817 26.4029 6.89372Z"
              fill="var(--logo-bg)" />
            <path
              d="M25.3998 5.47774C23.3959 3.47374 20.1467 3.47374 18.1427 5.47774L13.3042 10.3162L6.04758 17.5729C6.04758 17.5729 4.83807 18.7824 6.04758 19.9919C7.2571 21.2014 8.46661 19.9919 8.46661 19.9919L14.6352 13.8234L20.5618 7.89677C21.2298 7.22877 22.3128 7.22877 22.9808 7.89677C23.6488 8.56477 23.6488 9.6478 22.9808 10.3158L17.0542 16.2424L13.3047 19.9919C11.7248 21.5718 11.3904 23.9256 12.3016 25.833C12.5462 26.3451 12.8806 26.8249 13.3047 27.249C13.7288 27.6731 14.2086 28.0075 14.7207 28.2521C16.6281 29.1633 18.9819 28.8289 20.5618 27.249L24.3113 23.4995L30.2379 17.5729C30.9059 16.9049 31.9889 16.9049 32.6569 17.5729C33.3249 18.2409 33.3249 19.3239 32.6569 19.9919L26.7303 25.9185L20.5618 32.0871C20.5618 32.0871 19.3523 33.2966 20.5618 34.5061C21.7713 35.7156 22.9808 34.5061 22.9808 34.5061L30.2375 27.2495L35.076 22.411C37.08 20.407 37.08 17.1579 35.076 15.1539C34.6519 14.7298 34.172 14.3954 33.66 14.1508C31.7525 13.2396 29.3988 13.574 27.8189 15.1539L22.9804 19.9924L18.1427 24.83C17.4747 25.498 16.3917 25.498 15.7237 24.83C15.0557 24.162 15.0557 23.079 15.7237 22.411L20.5613 17.5733L25.3998 12.7348C26.9797 11.1549 27.3141 8.80117 26.4029 6.89372C26.1583 6.3817 25.8239 5.90184 25.3998 5.47774Z"
              fill="var(--logo-fill)" />
          </svg>
        </NuxtLink>
      </div>

      <div class="flex items-center justify-end gap-2">
        <AppModus />
        <UButton to="https://zeeg.me/biereth" target="_blank" trailing-icon="i-mdi-external-link" variant="solid"
          color="primary" size="md">
          Termin buchen
        </UButton>
      </div>
    </UContainer>
  </header>
</template>


<script setup lang="ts">
import SectionLink from './SectionLink.vue';
import { useState } from '#imports';

const activeSectionId = useState<string>('activeSection');

const { locales, setLocale } = useI18n();

const navLinks = [
  { name: 'Startseite', id: 'hero' },
  { name: 'Projekte', id: 'projects' },
  { name: 'Über mich', id: 'about' }
];
</script>