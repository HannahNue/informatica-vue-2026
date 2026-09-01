<script setup lang="ts">
// ---------------------------------------------------------------------------
// Day 2C exercise: wire up the dark mode toggle using your useDarkMode composable
// ---------------------------------------------------------------------------

// TODO Day 2C: import useDarkMode from '@/composables/useDarkMode'
import { useDarkMode } from '@/composables/useDarkMode'
import { useRouter, useRoute } from 'vue-router'

const { isDark, toggle } = useDarkMode()
// Für die Navigation und um die aktuelle Seite zu kennen
const router = useRouter()
const route = useRoute()
//
//
// Bonus Day 2F: replace the manual useDarkMode() with 'import { useDark, useToggle } from '@vueuse/core'
</script>

<template>
  <header class="navbar">
    <nav class="navbar__links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>

    <!-- TODO Day 2C/F: replace this button with a working dark mode toggle -->
    <button class="toggle" aria-label="Toggle dark mode" @click="toggle">
      {{ isDark ? '☀' : '☾' }}
    </button>
  </header>

  <main class="container">
    <RouterView />
  </main>

  <footer class="site-footer">
    <div class="footer__spacer"></div>
    <div class="footer__actions">
      <!-- Zurück zur vorherigen Seite -->
      <button type="button" class="footer__button" @click="router.back()">Back</button>
      <!-- Zur Startseite, falls man nicht schon dort ist -->
      <button type="button" class="footer__button" @click="route.path !== '/' && router.push('/')">
        Home
      </button>
    </div>
  </footer>
</template>
