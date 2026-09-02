<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'

// ---------------------------------------------------------------------------
// Day 2E exercise — fetch your real GitHub repos and display them
// ---------------------------------------------------------------------------

// TODO Day 2E: import and use your useGithub composable
// import { useGithub } from '@/composables/useGithub'
import { computed } from 'vue' // computed damit es aktualisiert wird
import { useFetch, useStorage } from '@vueuse/core'
import type { Repo } from '@/types'
// const githubUsername = 'antfu'
// const { repos, loading, error } = useGithub(githubUsername)
// URL als computed() schreiben, damit sie auf Änderungen von username reagiert
const username = useStorage('github-username', 'antfu')
const url = computed(
  () => `https://api.github.com/users/${username.value}/repos?sort=updated&per_page=12`
)

// HIER nutzen Sie genau die Felder von useFetch und benennen sie passend um:
const { data: repos, isFetching: loading, error } = useFetch(url, { refetch: true }).json<Repo[]>()
// TODO Day 2G: replace with useStorage composable
//
// TODO Day 2F: replace your useGithub composable with @vueuse/core: useFetch composable
//              see https://vueuse.org/core/useFetch/#usefetch

// TODO Day 2G: import useStorage composable from '@vueuse/core' and store 'username' in local storage
//              see https://vueuse.org/core/useStorage/#usestorage

//const username = useStorage('github-username', 'antfu')
// Dynamische API-URL, reagiert automatisch auf Änderungen von `username`
//const url = computed(
//  () => `https://api.github.com/users/${username.value}/repos?sort=updated&per_page=12`
//)

// ... useFetch with 'refetch: true'

// Mock Repo for Day 2A
// TODO Day2E: remove
//const mockRepo = {
//  id: 1,
//  name: 'demo-project',
//  description: 'A small demo repo',
//  html_url: 'https://github.com/vuejs-ai/skills',
//  language: 'TypeScript',
//  stargazers_count: 42,
//  topics: ['vue', 'typescript']
//}
</script>

<template>
  <section>
    <h2>Projects</h2>
    <!-- TODO Day 2G -->
    <p>Geb deinen Usernamen ein:</p>
    <div style="margin-bottom: 1.5rem; display: flex; gap: 0.5rem; max-width: 360px">
      <input v-model="username" placeholder="GitHub username" />
    </div>

    <!-- TODO Day 2A: render a single ProjectCard for the 'mockRepo', remove at Day 2E -->

    <!-- Ladeanzeige -->
    <p v-if="loading">Lädt Projekte von GitHub...</p>

    <!-- Fehleranzeige -->
    <p v-if="error">{{ error }}</p>

    <!-- Die echten GitHub-Projekte als Karten anzeigen -->
    <div class="projects-grid">
      <ProjectCard v-for="repo in repos" :key="repo.id" :repo="repo" />

      <!--ProjectCard :repo="mockRepo" /> -->
      <!-- TODO Day 2E: render a ProjectCard for each repo -->
    </div>
  </section>
</template>
