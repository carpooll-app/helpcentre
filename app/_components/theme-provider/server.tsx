import { Theme } from '@radix-ui/themes'
import { ThemeProvider as NextThemesThemeProvider } from 'next-themes'

import '@radix-ui/themes/styles.css'

export const ThemeProvider = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <NextThemesThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="carpooll-theme"
    >
      <Theme
        id="theme-provider"
        accentColor="lime"
        grayColor="gray"
        radius="large"
        scaling="100%"
        appearance="inherit"
        panelBackground="solid"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          '--accent-9': '#9fe870',
          '--accent-10': '#8be55c',
          '--accent-11': '#6bbf3a',
          '--accent-12': '#4a8c1f',
        } as React.CSSProperties}
      >
        {children}
      </Theme>
    </NextThemesThemeProvider>
  )
}
