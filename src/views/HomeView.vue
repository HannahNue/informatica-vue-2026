<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'

// ---------------------------------------------------------------------------
// Day 1 Part A — reactivity and templates
// ---------------------------------------------------------------------------

// TODO Day 1A: a) replace with your own name and bio
const name = 'Hannah Nünnke'
const bio =
  'Ich studiere Medieninformatik an der Hochschule und stehe gerade kurz vor meinem Auslandssemester in Belgien.'

// TODO Day 1A: b) replace with your own skills
const skills = ref(['Adobe Creative Cloud', 'Figma', 'Canva', 'HTML', 'CSS', 'JavaScript'])

const newSkill = ref('')

function addSkill() {
  // TODO Day 1A: f) push newSkill.value into skills, then clear the input
  console.log('addSkill:', newSkill.value)

  const trimmedSkill = newSkill.value.trim()

  // Nur hinzufügen, wenn der Text nicht leer ist UND noch nicht in der Liste existiert
  if (trimmedSkill !== '' && !skills.value.includes(trimmedSkill)) {
    skills.value.push(trimmedSkill)
    newSkill.value = ''
  }
}

// ---------------------------------------------------------------------------
// Day 1 Part B — computed, watch, onMounted
// ---------------------------------------------------------------------------

// TODO Day 1B: add a computed property `skillCount` that returns the number
// of skills — hint: skills.value.length
const skillCount = computed(() => skills.value.length)

// TODO Day 1B: use onMounted to load saved skills from localStorage
// (key: 'portfolio-skills') — hint: JSON.parse() to convert back to an array
onMounted(() => {
  // Liest den gespeicherten String unter dem Key 'portfolio-skills' aus dem Browser-Speicher
  const savedSkills = localStorage.getItem('portfolio-skills')

  // Prüft, ob überhaupt Daten im localStorage gefunden wurden
  if (savedSkills) {
    // Wandelt den JSON-Text-String wieder in ein JavaScript-Array um und weist es skills.value zu
    skills.value = JSON.parse(savedSkills)
  }
})

// TODO Day 1B: use watch to save skills to localStorage whenever the list changes
// hint: JSON.stringify() to convert the array to a string, { deep: true } option
watch(
  // Zu beobachtende reaktive Variable
  skills,

  // Wird ausgeführt, sobald sich 'skills' ändert
  (val) => {
    // Wandelt das JavaScript-Array 'val' in einen JSON-String um und speichert ihn im localStorage
    localStorage.setItem('portfolio-skills', JSON.stringify(val))
  },

  // Überwacht auch Verschachtelungen/Inhaltsänderungen im Array (z. B. push oder splice)
  { deep: true }
)

// ---------------------------------------------------------------------------
// Bonus
// ---------------------------------------------------------------------------

function removeSkill(index: number) {
  // TODO Bonus: remove the skill at the given index from the skills array,
  // Positionen die gelöscht werden sollen, in diesem Fall eine
  // Gibt z. B. aus: "removeSkill: Vue (Index 0)"
  console.log('removeSkill:', skills.value[index], `(Index ${index})`)
  skills.value.splice(index, 1)
}
</script>

<template>
  <section class="hero">
    <!-- TODO Day 1A: c) render name and bio -->
    <h1>{{ name }}</h1>
    <p class="bio">{{ bio }}</p>

    <!-- TODO Day 1B: replace the hardcoded "Skills" heading with
         "Skills ({{ skillCount }})" once you've added the computed -->
    <h3>Skills ({{ skillCount }})</h3>
    <ul class="skills">
      <!-- TODO Day 1A: d) Render the skills list using "li" + `v-for`
           Bonus: text-input should also add skill on <ENTER> -->
      <!-- Bonus: <button @click="removeSkill(skills.indexOf(skill))">×</button> -->
      <li v-for="(skill, index) in skills" :key="skill" @click="removeSkill(index)">
        {{ skill }}
      </li>
    </ul>

    <!-- TODO Day 1A: e) wire up v-model and the addSkill button
         Bonus: text-input should also add skill on <ENTER> -->
    <div class="add-skill">
      <input v-model="newSkill" @keyup.enter="addSkill" placeholder="Add a skill…" />
      <!-- ":disabled" schaltet den Button aus, wenn "newSkill" leer ist-->
      <button :disabled="!newSkill.trim()" @click="addSkill">Add</button>
    </div>
    <!-- TODO Day 1A: just for debugging: Remove when implementation is ready -->
    <div class="placeholder">{{ newSkill }}</div>
  </section>
</template>
