// ---------------------------------------------------------------------------
// Day 2E exercise — fetch repos from the GitHub API, typed with an interface
// ---------------------------------------------------------------------------

// TODO Day 2E: import the Repo type you defined in src/types/index.ts
// import type { Repo } from '@/types'

// TODO Day 2E: implement useGithub
//
// It should:
// 1. accept a GitHub username as a parameter (string)
// 2. return reactive refs: repos (Repo[]), loading (boolean), error (string | null)
// 3. fetch from: https://api.github.com/users/{username}/repos?sort=updated&per_page=12
// 4. set loading = true before fetch, false after
// 5. catch errors and set the error ref
//
// Bonus Day 2F: replace the manual fetch with VueUse's useFetch() — how much shorter is it?

import { ref } from 'vue'
import type { Repo } from '@/types'

export function useGithub(username: string) {
  // TODO Day 2E: replace stubs with your implementation
  const repos = ref<Repo[]>([])
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  async function fetchRepos() {
    // TODO Day 2E
    loading.value = true
    error.value = null

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=12`
      )

      // Prüfen, ob die Anfrage erfolgreich war (z. B. 404 bei falschem User)
      if (!response.ok) {
        throw new Error(`Fehler beim Laden: ${response.statusText} (${response.status})`)
      }

      const data: Repo[] = await response.json()
      repos.value = data
    } catch (err: unknown) {
      error.value = (err as Error).message // Sofort beim Aufruf des Composables ausführen
    } finally {
      loading.value = false
    }
  }

  // Sofort beim Aufruf des Composables ausführen
  fetchRepos()

  return { repos, loading, error }
}
