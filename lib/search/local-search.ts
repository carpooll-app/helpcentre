import Fuse from 'fuse.js'
import { Article } from '../data/types'

export interface SearchHit {
  _key: string
  document: Article & { categorySlug?: string }
  highlights: Array<{
    fieldPath: string
    value: string
  }>
  _getField: (path: string) => any
}

export interface SearchResult {
  hits: SearchHit[]
  query: string
}

export class LocalSearch {
  private fuse: Fuse<Article & { categorySlug?: string }>
  private articles: (Article & { categorySlug?: string })[]

  constructor(articles: (Article & { categorySlug?: string })[]) {
    this.articles = articles
    this.fuse = new Fuse(articles, {
      keys: [
        {
          name: '_title',
          weight: 0.4
        },
        {
          name: 'excerpt',
          weight: 0.3
        },
        {
          name: 'body.json.content',
          weight: 0.3
        }
      ],
      threshold: 0.4,
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 2,
      findAllMatches: true,
      useExtendedSearch: true
    })
  }

  search(query: string): SearchResult {
    if (!query.trim()) {
      return { hits: [], query }
    }

    const results = this.fuse.search(query)
    
    const hits: SearchHit[] = results.map((result, index) => {
      const highlights = result.matches?.map(match => ({
        fieldPath: match.key || '',
        value: match.value || ''
      })) || []

      // Create a custom snippet from the content
      const content = result.item.body?.json?.content || ''
      const snippet = this.createSnippet(content, query)

      return {
        _key: `hit-${index}`,
        document: {
          ...result.item,
          // Add a custom snippet field for better display
          snippet: snippet
        },
        highlights,
        _getField: (path: string) => {
          if (path === 'body.json.content') {
            return snippet
          }
          const keys = path.split('.')
          let value: any = result.item
          for (const key of keys) {
            value = value?.[key]
          }
          return value
        }
      }
    })

    return {
      hits,
      query
    }
  }

  private createSnippet(content: string, query: string): string {
    if (!content) return ''
    
    // Remove markdown formatting for snippet
    const plainText = content
      .replace(/#{1,6}\s+/g, '') // Remove headers
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
      .replace(/\*(.*?)\*/g, '$1') // Remove italic
      .replace(/`(.*?)`/g, '$1') // Remove code
      .replace(/\n+/g, ' ') // Replace newlines with spaces
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim()

    const queryLower = query.toLowerCase()
    const textLower = plainText.toLowerCase()
    
    // Find the first occurrence of the query
    const index = textLower.indexOf(queryLower)
    
    if (index === -1) {
      // If query not found, return first 150 characters
      return plainText.length > 150 ? plainText.substring(0, 150) + '...' : plainText
    }
    
    // Create a snippet around the match
    const start = Math.max(0, index - 50)
    const end = Math.min(plainText.length, index + query.length + 100)
    
    let snippet = plainText.substring(start, end)
    
    // Add ellipsis if needed
    if (start > 0) snippet = '...' + snippet
    if (end < plainText.length) snippet = snippet + '...'
    
    return snippet
  }

  getRecentSearches(): SearchResult {
    // For now, return empty. You can implement localStorage-based recent searches
    return { hits: [], query: '' }
  }
} 