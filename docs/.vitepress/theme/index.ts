import type { Theme } from 'vitepress'
import ColorfulTheme from 'vitepress-colorful-themes'
import GlowingLogo from './components/GlowingLogo.vue'
import './custom.css'

export default {
  extends: ColorfulTheme,
  enhanceApp({ app }) {
    app.component('GlowingLogo', GlowingLogo)
  },
} satisfies Theme