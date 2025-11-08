import { useEffect, useState } from 'react'

export default function useTheme() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    const saved = localStorage.theme === 'dark'
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = saved || (!('theme' in localStorage) && prefers)
    setDark(initial)
    if (initial) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    if (next) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }
  return { dark, toggle }
}