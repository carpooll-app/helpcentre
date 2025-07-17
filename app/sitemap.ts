import { MetadataRoute } from 'next'
import { sampleCategories } from '@/lib/data/sample-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://help.carpooll.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ]

  // Category pages
  const categoryPages = sampleCategories.map((category) => ({
    url: `${baseUrl}/${category._slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Article pages
  const articlePages = sampleCategories.flatMap((category) =>
    category.articles.items.map((article) => ({
      url: `${baseUrl}/${category._slug}/${article._slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  return [...staticPages, ...categoryPages, ...articlePages]
} 