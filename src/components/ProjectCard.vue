<script setup lang="ts">
// ---------------------------------------------------------------------------
// Day 2A exercise — build this component from scratch
// ---------------------------------------------------------------------------

import type { Repo } from '@/types'

defineProps<{
  repo: Repo
}>()
</script>

<template>
  <div class="project-card">
    <h3>
      <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">
        {{ repo.name }}
      </a>
    </h3>

    <p v-if="repo.description" class="description">
      {{ repo.description }}
    </p>

    <div class="meta">
      <span v-if="repo.language">{{ repo.language }}</span>
      <span>⭐ {{ repo.stargazers_count }}</span>
    </div>

    <div v-if="repo.topics.length" class="topics">
      <span v-for="topic in repo.topics" :key="topic" class="topic">
        {{ topic }}
      </span>
    </div>
  </div>
</template>
