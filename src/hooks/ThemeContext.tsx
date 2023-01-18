import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
} from 'react'
import { DefaultTheme } from 'styled-components'

import Light from '../styles/themes/light'
import Dark from '../styles/themes/dark'

type CartProviderProps = {
  children: ReactNode
}

type ContextType = {
  theme: DefaultTheme
  toggleTheme: () => void
}

const ThemeContext = createContext({} as ContextType)

export const ThemeContextProvider = ({ children }: CartProviderProps) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>(() => {
    const themeSaved = localStorage.getItem('@theme')

    if (themeSaved) {
      return JSON.parse(themeSaved)
    } else {
      return 'light'
    }
  })

  const toggleTheme = () =>
    setThemeName(theme => (theme === 'light' ? 'dark' : 'light'))

  const theme = useMemo(() => {
    return themeName === 'light' ? Light : Dark
  }, [themeName])

  useEffect(() => {
    localStorage.setItem('@theme', JSON.stringify(themeName))
  }, [themeName])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error()
  }

  return context
}
