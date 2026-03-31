import { computed } from 'vue'

type ThemeMode = 'light' | 'dark'

export function useTheme() {
  const theme = useState<ThemeMode>('theme-mode', () => 'light')

  const isDark = computed(() => theme.value === 'dark')

  const applyTheme = (mode: ThemeMode) => {
    theme.value = mode
    if (process.client) {
      document.documentElement.classList.toggle('dark', mode === 'dark')
      localStorage.setItem('theme', mode)
    }
  }

  const initTheme = () => {
    if (!process.client) return
    const stored = localStorage.getItem('theme') as ThemeMode | null
    if (stored === 'dark' || stored === 'light') {
      applyTheme(stored)
      return
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    applyTheme(prefersDark ? 'dark' : 'light')
  }

  const toggleTheme = () => {
    applyTheme(isDark.value ? 'light' : 'dark')
  }

  return { theme, isDark, initTheme, toggleTheme }
}
