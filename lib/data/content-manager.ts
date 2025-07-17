import { Category, Article } from './types'
import { sampleCategories } from './sample-data'

// Simple content manager for data access
export class ContentManager {
  private categories: Category[] = sampleCategories

  // Get all categories
  getAllCategories(): Category[] {
    return this.categories
  }

  // Get category by slug
  getCategoryBySlug(slug: string): Category | undefined {
    return this.categories.find(cat => cat._slug === slug)
  }

  // Get subcategory by slugs
  getSubcategoryBySlug(categorySlug: string, subcategorySlug: string) {
    const category = this.getCategoryBySlug(categorySlug)
    if (!category?.subcategories?.items) return undefined
    
    return category.subcategories.items.find(sub => sub._slug === subcategorySlug)
  }

  // Get article by slugs
  getArticleBySlug(categorySlug: string, articleSlug: string, subcategorySlug?: string): Article | undefined {
    if (subcategorySlug) {
      const subcategory = this.getSubcategoryBySlug(categorySlug, subcategorySlug)
      if (!subcategory?.articles?.items) return undefined
      
      return subcategory.articles.items.find(article => article._slug === articleSlug)
    } else {
      const category = this.getCategoryBySlug(categorySlug)
      if (!category?.articles?.items) return undefined
      
      return category.articles.items.find(article => article._slug === articleSlug)
    }
  }

  // Get all articles
  getAllArticles(): Article[] {
    const articles: Article[] = []
    
    this.categories.forEach(category => {
      // Add category-level articles
      if (category.articles?.items) {
        articles.push(...category.articles.items)
      }
      
      // Add subcategory articles
      if (category.subcategories?.items) {
        category.subcategories.items.forEach(subcategory => {
          if (subcategory.articles?.items) {
            articles.push(...subcategory.articles.items)
          }
        })
      }
    })
    
    return articles
  }
}

// Create a singleton instance
export const contentManager = new ContentManager()

// Export helper functions for backward compatibility
export const getAllArticles = (): Article[] => contentManager.getAllArticles()
export const getCategoryBySlug = (slug: string): Category | undefined => contentManager.getCategoryBySlug(slug)
export const getSubcategoryBySlug = (categorySlug: string, subcategorySlug: string) => contentManager.getSubcategoryBySlug(categorySlug, subcategorySlug)
export const getArticleBySlug = (categorySlug: string, articleSlug: string, subcategorySlug?: string): Article | undefined => contentManager.getArticleBySlug(categorySlug, articleSlug, subcategorySlug)

// Helper functions for content creation
export const createArticle = (
  id: string,
  slug: string,
  title: string,
  excerpt: string,
  content: string
): Article => ({
  _id: id,
  _slug: slug,
  _slugPath: `${slug}`,
  _title: title,
  excerpt,
  ogImage: {
    url: '/logo.png'
  },
  _sys: {
    lastModifiedAt: new Date().toISOString()
  },
  body: {
    json: {
      content,
      toc: {},
      blocks: []
    }
  }
})

export const createCategory = (
  id: string,
  slug: string,
  title: string,
  description: string,
  icon: string,
  articles: Article[] = []
): Category => ({
  _id: id,
  _slug: slug,
  _title: title,
  description,
  icon,
  ogImage: {
    url: '/logo.png'
  },
  articles: {
    items: articles
  }
}) 