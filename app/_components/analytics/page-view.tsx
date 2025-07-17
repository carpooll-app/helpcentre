'use client'
import * as React from 'react'

export const PageView = ({ ingestKey }: { ingestKey: string }) => {
  // Simple local analytics - you can replace this with your own analytics service
  React.useEffect(() => {
    // Log page view to console for now
    console.log('Page view:', window.location.pathname)
    
    // You can integrate with Google Analytics, Mixpanel, etc. here
    // Example:
    // gtag('config', 'GA_MEASUREMENT_ID', {
    //   page_path: window.location.pathname,
    // })
  }, [])

  return null
}
