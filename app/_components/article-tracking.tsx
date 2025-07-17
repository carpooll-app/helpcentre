'use client'

import { useEffect } from 'react'
import { trackArticleView } from '@/lib/analytics'

interface ArticleTrackingProps {
  articleTitle: string
  categoryName: string
}

export function ArticleTracking({ articleTitle, categoryName }: ArticleTrackingProps) {
  useEffect(() => {
    // Track article view when component mounts
    trackArticleView(articleTitle, categoryName)
  }, [articleTitle, categoryName])

  return null // This component doesn't render anything
} 