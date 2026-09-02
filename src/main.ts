import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './assets/main.css'
import NotFoundView from './views/NotFoundView.vue'

// ---------------------------------------------------------------------------
// Router — routes are pre-configured (Day 2D exercise)
// ---------------------------------------------------------------------------
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ContactView from './views/ContactView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/projects', component: ProjectsView },
    { path: '/contact', component: ContactView },
    { path: '/:pathMatch(.*)*', component: NotFoundView }
    //  Day 2D: add 404 catch-all route
  ]
})

// ---------------------------------------------------------------------------
// App
// ---------------------------------------------------------------------------
createApp(App).use(router).mount('#app')
