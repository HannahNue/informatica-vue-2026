// ---------------------------------------------------------------------------
// Shared types — introduced on Day 2E
// ---------------------------------------------------------------------------

// TODO Day 2E: fill out the Repo interface to match the GitHub API response
// Hint: https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user
export interface Repo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
  topics: string[]
}

// TODO Day 2E (optional): add more types as you need them
