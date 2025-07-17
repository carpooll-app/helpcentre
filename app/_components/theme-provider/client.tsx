'use client'

import { useThemeContext } from '@radix-ui/themes'
import * as React from 'react'
import { useTheme } from 'next-themes'
import { useHasRendered } from '@/hooks/use-has-rendered'

// Simple theme interface for local use with proper Radix UI types
interface LocalTheme {
  accentColor: "ruby" | "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky"
  appearance: "inherit" | "light" | "dark"
  grayScale: "auto" | "gray" | "mauve" | "slate" | "sage" | "olive" | "sand"
  panelBackground: "solid" | "translucent"
  radius: "none" | "small" | "medium" | "large" | "full"
  scaling: "90%" | "95%" | "100%" | "105%" | "110%"
}

export const LiveThemeSwitcher = ({ theme }: { theme: LocalTheme }) => {
  const {
    onAccentColorChange,
    onRadiusChange,
    onGrayColorChange,
    onScalingChange,
    onAppearanceChange,
    onPanelBackgroundChange,
  } = useThemeContext()
  const { setTheme, theme: activeTheme, resolvedTheme } = useTheme()
  const hasRendered = useHasRendered()

  React.useEffect(() => {
    // Only apply theme changes after hydration is complete
    if (!hasRendered) return

    onAccentColorChange(theme.accentColor || 'lime')
    onRadiusChange(theme.radius)
    onGrayColorChange(theme.grayScale)
    onScalingChange(theme.scaling)
    onPanelBackgroundChange(theme.panelBackground)

    // Handle appearance change more carefully
    const currentAppearance = resolvedTheme || 'light'
    if (theme.appearance !== 'inherit' && theme.appearance !== currentAppearance) {
      onAppearanceChange(theme.appearance)
      setTheme(theme.appearance)
    }
  }, [
    theme.accentColor,
    theme.radius,
    theme.grayScale,
    theme.appearance,
    theme.scaling,
    theme.panelBackground,
    onAccentColorChange,
    onGrayColorChange,
    onAppearanceChange,
    onRadiusChange,
    onScalingChange,
    onPanelBackgroundChange,
    setTheme,
    hasRendered,
    resolvedTheme,
  ])

  return null
}
