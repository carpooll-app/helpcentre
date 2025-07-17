'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageView } from '@/lib/analytics'

export function useAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page view when pathname changes
    trackPageView(window.location.href, document.title)
  }, [pathname])

  return {
    trackEvent: (eventName: string, parameters?: Record<string, any>) => {
      if (typeof window !== 'undefined') {
        window.dataLayer.push({
          event: eventName,
          ...parameters,
        })
      }
    },
  }
} 