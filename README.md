# Vue Portfolio Course

Your personal portfolio site — built over 3 days, live from minute one.

**Supported by** [<img src="assets/cornelsen.svg" width="100" height="25" alt="Cornelsen Verlag" style="vertical-align: middle;">](https://www.cornelsen.de/) **— sponsoring instructor time**

> **Note:** This repo will grow to contain all course exercises. For now, it
> only covers what you need to install and set up **before day 1**. Come back
> here once exercises are added — nothing to do yet beyond this checklist.

---

## Before you arrive — setup checklist

Please complete all of these **before the course starts**. None of it is
hard, but doing it in advance means we don't lose the first 20 minutes of
day 1 to installers and account signups.

### 1. GitHub account

You'll fork a repo and push to [GitHub Pages](https://pages.github.com/) during the course, so you need
a free account.

- Sign up (if you don't have one already): https://github.com/join

### 2. Free AI chat account

Create a free account with one AI assistant before the course. This is useful for asking questions, debugging code,
and brainstorming ideas while you work. You will use it during the course to support your learning and problem-solving.

Pick one of these:

- [ChatGPT](https://chat.openai.com/)
- [Claude](https://claude.ai/)
- [Mistral](https://mistral.ai/)

If you already use one of them, you do not need to sign up for all three. For coding help, ChatGPT and Claude are
generally the most familiar to beginners; Mistral is a great European alternative if you prefer it.

### 3. Git

- Install: https://git-scm.com/downloads
- Verify it worked:
  ```bash
  git --version
  ```

### 4. Node.js

- Install the current LTS version: https://nodejs.org
- Verify it worked:
  ```bash
  node --version
  npm --version
  ```

### 5. Editor: Visual Studio Code

[Visual Studio Code](https://code.visualstudio.com/) is strongly recommended
for this course. The Vue ecosystem has first-class VS Code support, and the
extensions below make a real difference.

#### VS Code extensions

Install these before day 1:

| Extension                                                                                               | ID                       | Why                                                                                       |
| ------------------------------------------------------------------------------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------- |
| [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)                         | `Vue.volar`              | Syntax highlighting, TypeScript support, and IntelliSense inside `.vue` files. Essential. |
| [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) | `esbenp.prettier-vscode` | Auto-formats on save using the project's `.prettierrc` config.                            |

You can install both at once by pasting this into your terminal:

```bash
code --install-extension Vue.volar
code --install-extension esbenp.prettier-vscode
```

#### Enable format on save

Add this to your VS Code `settings.json` (`Cmd+Shift+P` → "Open User Settings
JSON"):

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

This means you never have to run `npm run format` manually — every save is
auto-formatted.

### 6. Browser extension: Vue Devtools

Install [Vue Devtools](https://devtools.vuejs.org/) for Chrome or Firefox. It
lets you inspect component state, reactive refs, and the router from the
browser. You'll use it constantly during the exercises.

### 7. Fork and run the course repo locally

Do this now, not on day 1 — it means any install problems get caught while
there's time to fix them, instead of eating into the first exercise.

1. Fork this repo: click **Fork** in the top-right corner of this page. This
   creates your own copy at:
   `https://github.com/YOUR_USERNAME/informatica-vue-2026`
   (Replace `YOUR_USERNAME` with your actual GitHub username)
2. Clone your fork and install dependencies:
   ```bash
   git clone https://github.com/YOUR_USERNAME/informatica-vue-2026.git
   cd informatica-vue-2026
   npm install
   npm run dev
   ```
3. Confirm you see `npm works! ✅` printed in your terminal.

That's just a sanity check for now — the repo doesn't contain the real Vue
project yet. Once exercises are added here, this step will be replaced with
the real `npm run dev` that opens a page in your browser.

---

## Checklist summary

Before day 1, make sure you can check off all of these:

- [ ] GitHub account created
- [ ] Free AI chat account created (ChatGPT, Claude, or Mistral)
- [ ] `git --version` works in your terminal
- [ ] `node --version` and `npm --version` work in your terminal
- [ ] VS Code installed
- [ ] `Vue.volar` and `esbenp.prettier-vscode` extensions installed
- [ ] Format-on-save configured
- [ ] Vue Devtools installed in your browser
- [ ] Repo forked, cloned, and `npm run dev` prints `npm works! ✅`

If anything on this list doesn't work, reach out before the course rather
than troubleshooting it live on day 1 — we'd rather fix it in advance.

---

## What's next

Course exercises (Day 1, Day 2, Day 3) will be added to this README as the
project comes together. Nothing further to do here for now.