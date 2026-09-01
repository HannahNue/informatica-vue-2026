// ---------------------------------------------------------------------------
// Day 2B exercise — write this composable yourself first,
// then on Day 2F we'll replace it with VueUse's useDark + useStorage
// ---------------------------------------------------------------------------

import { ref, watch } from 'vue'

export function useDarkMode() {
  const isDark = ref(false)

  watch(
    isDark,
    (val) => {
      document.documentElement.classList.toggle('dark', val)
      localStorage.setItem('darkMode', JSON.stringify(val))
    },
    { immediate: true }
  )

  const toggle = () => {
    isDark.value = !isDark.value
  }

  return { isDark, toggle }
}
