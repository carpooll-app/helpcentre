'use client'

import { useAnalytics } from '@/hooks/use-analytics'

interface AnalyticsWrapperProps {
  children: React.ReactNode
}

export function AnalyticsWrapper({ children }: AnalyticsWrapperProps) {
  // Initialize analytics tracking
  useAnalytics()

  return <>{children}</>
} 