// Google Tag Manager Analytics Utilities

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

// Initialize dataLayer if it doesn't exist
if (typeof window !== 'undefined' && !window.dataLayer) {
  window.dataLayer = []
}

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined') {
    window.dataLayer.push({
      event: 'page_view',
      page_location: url,
      page_title: title || document.title,
    })
  }
}

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    window.dataLayer.push({
      event: eventName,
      ...parameters,
    })
  }
}

// Track search events
export const trackSearch = (searchTerm: string, resultsCount: number) => {
  trackEvent('search', {
    search_term: searchTerm,
    results_count: resultsCount,
  })
}

// Track article views
export const trackArticleView = (articleTitle: string, category: string) => {
  trackEvent('article_view', {
    article_title: articleTitle,
    category: category,
  })
}

// Track category views
export const trackCategoryView = (categoryName: string) => {
  trackEvent('category_view', {
    category_name: categoryName,
  })
}

// Track user interactions
export const trackInteraction = (interactionType: string, elementName: string) => {
  trackEvent('user_interaction', {
    interaction_type: interactionType,
    element_name: elementName,
  })
} 