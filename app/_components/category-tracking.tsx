'use client'

import { useEffect } from 'react'
import { trackCategoryView } from '@/lib/analytics'

interface CategoryTrackingProps {
  categoryName: string
}

export function CategoryTracking({ categoryName }: CategoryTrackingProps) {
  useEffect(() => {
    // Track category view when component mounts
    trackCategoryView(categoryName)
  }, [categoryName])

  return null // This component doesn't render anything
} 