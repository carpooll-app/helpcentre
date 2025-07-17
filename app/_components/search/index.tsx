'use client'
import * as React from 'react'
import { Cross1Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import {
  Box,
  Dialog,
  Flex,
  IconButton,
  Kbd,
  ScrollArea,
  Separator,
  Text,
  TextField,
  VisuallyHidden,
} from '@radix-ui/themes'
import NextLink from 'next/link'
import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'
import { CSSProperties } from 'react'
import s from './search.module.scss'
import { LocalSearch, SearchHit } from '@/lib/search/local-search'
import { getAllArticles } from '@/lib/data/sample-data'
import { trackSearch } from '@/lib/analytics'

// Search context
const SearchContext = React.createContext<{
  query: string
  setQuery: (query: string) => void
  results: SearchHit[]
  recentSearches: SearchHit[]
  isLoading: boolean
} | null>(null)

const SearchHitContext = React.createContext<SearchHit | null>(null)

const SearchBox = {
  Root: ({ children, onHitSelect }: { children: React.ReactNode; onHitSelect: () => void }) => {
    const [query, setQueryState] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)
    const [results, setResults] = React.useState<SearchHit[]>([])
    const articles = getAllArticles()
    const search = React.useMemo(() => new LocalSearch(articles), [articles])
    
    // Memoize the search function to prevent re-renders
    const performSearch = React.useCallback(async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults([])
        setIsLoading(false)
        return
      }
      
      setIsLoading(true)
      try {
        const searchResults = search.search(searchQuery)
        setResults(searchResults.hits)
        
        // Track search event
        trackSearch(searchQuery, searchResults.hits.length)
      } catch (error) {
        console.error('Search error:', error)
        setResults([])
      } finally {
        setIsLoading(false)
      }
    }, [search])

    // Create a setQuery function that also triggers search
    const setQuery = React.useCallback((newQuery: string) => {
      setQueryState(newQuery)
      performSearch(newQuery)
    }, [performSearch])

    const recentSearches = React.useMemo(() => {
      return search.getRecentSearches()
    }, [search])

    return (
      <SearchContext.Provider value={{ 
        query, 
        setQuery, 
        results, 
        recentSearches: recentSearches.hits,
        isLoading 
      }}>
        <SearchHitContext.Provider value={null}>
          {children}
        </SearchHitContext.Provider>
      </SearchContext.Provider>
    )
  },
  useContext: () => {
    const context = React.useContext(SearchContext)
    if (!context) throw new Error('SearchBox.useContext must be used within SearchBox.Root')
    return context
  },
  Input: ({ asChild, ...props }: any) => {
    const { query, setQuery } = SearchBox.useContext()
    return (
      <TextField.Root 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        mx="2" 
        mt="2" 
        size="3"
        {...props}
      >
        <TextField.Slot>
          <MagnifyingGlassIcon color="currentColor" />
        </TextField.Slot>
        <TextField.Slot>
          <Kbd style={{ marginBlock: 'auto' }}>Esc</Kbd>
        </TextField.Slot>
      </TextField.Root>
    )
  },
  HitList: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  HitItem: ({ hit, href, asChild, children }: { hit: SearchHit; href: string; asChild?: boolean; children: React.ReactNode }) => {
    return (
      <SearchHitContext.Provider value={hit}>
        <Box className={s['search-dialog-content__result']}>
          <NextLink href={href} className={s['search-dialog-content__result-link']}>
            {children}
          </NextLink>
        </Box>
      </SearchHitContext.Provider>
    )
  },
  HitSnippet: ({ fieldPath, components }: { fieldPath: string; components: any }) => {
    const Container = components.container || 'div'
    const Mark = components.mark || 'span'
    const { query } = SearchBox.useContext()
    
    // Get the current hit from context
    const currentHit = React.useContext(SearchHitContext)
    
    if (!currentHit) {
      return null
    }
    
    let content = ''
    if (fieldPath === '_title') {
      content = currentHit.document._title
    } else if (fieldPath === 'body.json.content') {
      // Use the snippet from the search result or fall back to content
      const snippet = (currentHit.document as any).snippet
      content = snippet || currentHit.document.body?.json?.content || ''
    } else if (fieldPath === 'excerpt') {
      content = currentHit.document.excerpt || ''
    }
    
    // Highlight the search query in the content
    const highlightText = (text: string, query: string) => {
      if (!query.trim()) return text
      
      const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      const regex = new RegExp(`(${escapedQuery})`, 'gi')
      const parts = text.split(regex)
      
      return parts.map((part, index) => {
        // Check if this part matches the query (case insensitive)
        if (part.toLowerCase() === query.toLowerCase()) {
          return <Mark key={index}>{part}</Mark>
        }
        return part
      })
    }

  return (
      <Container>
        {highlightText(content, query)}
      </Container>
    )
  },
  Empty: ({ asChild, children }: { asChild?: boolean; children: React.ReactNode }) => {
    const { query, results } = SearchBox.useContext()
    if (query && results.length === 0) {
      return <>{children}</>
    }
    return null
  },
  Placeholder: ({ asChild, children }: { asChild?: boolean; children: React.ReactNode }) => {
    const { query, recentSearches } = SearchBox.useContext()
    if (!query && recentSearches.length === 0) {
      return <>{children}</>
    }
    return null
  }
}

const DialogContent = () => {
  const { query, results, recentSearches, isLoading } = SearchBox.useContext()

  return (
    <Dialog.Content maxWidth="550px" className={s['search-dialog__content']}>
      <VisuallyHidden>
        <Dialog.Title>Search Help Center</Dialog.Title>
      </VisuallyHidden>
      <Flex direction="column" height="100%">
        <SearchBox.Input />
        <Separator size="4" mt="2" />
        <ScrollArea scrollbars="vertical" asChild>
          <Box
            className={s['search-dialog__results']}
            flexGrow="1"
            flexShrink="1"
            flexBasis="0%"
            px="2"
          >
            {isLoading && (
              <Flex align="center" justify="center" px="2" py="4">
                <Text size="2" color="gray">
                  Searching...
                </Text>
              </Flex>
            )}
            
            <SearchBox.Empty asChild>
              <Flex align="center" px="2" py="1">
                <Text
                  size="2"
                  color="gray"
                  className={s['search-dialog__empty-state']}
                >
                  No results for{' '}
                  <Text as="span" weight="bold">
                    &ldquo;{query}&rdquo;
                  </Text>
                </Text>
              </Flex>
            </SearchBox.Empty>
            <SearchBox.Placeholder asChild>
              {recentSearches.length ? (
                <HitList hits={recentSearches} isRecent />
              ) : (
                <Flex align="center" px="2" py="1">
                  <Text
                    size="2"
                    color="gray"
                    className={s['search-dialog__empty-state']}
                  >
                    No recent searches.
                  </Text>
                </Flex>
              )}
            </SearchBox.Placeholder>

            {!isLoading && <HitList hits={results} />}
          </Box>
        </ScrollArea>
      </Flex>
    </Dialog.Content>
  )
}

const HitList = ({ hits, isRecent }: { hits: SearchHit[]; isRecent?: boolean }) => {
  return (
    <SearchBox.HitList>
      {isRecent && (
        <Text weight="medium" color="gray" size="1" ml="3" mb="1" as="p">
          Recent searches
        </Text>
      )}
      {hits.map((hit) => {
        let pathname = `/${hit.document.categorySlug}/${hit.document._slug}`

        return (
          <SearchBox.HitItem
            key={hit._key}
            hit={hit}
                href={pathname}
            asChild
              >
                <SearchBox.HitSnippet
                  fieldPath="_title"
                  components={{
                container: ({ children }: any) => (
                      <Text size="2" weight="medium" as="p">
                        {children}
                      </Text>
                    ),
                mark: ({ children }: any) => (
                  <Text as="span" style={{ backgroundColor: 'var(--accent-3)', color: 'var(--accent-11)' }}>
                    {children}
                  </Text>
                ),
                ...(isRecent ? { mark: ({ children }: any) => children } : {}),
                  }}
                />
                <SearchBox.HitSnippet
              fieldPath="body.json.content"
                  components={{
                container: ({ children }: any) => (
                  <Text size="1" mt="1" color="gray" as="p" style={{ lineHeight: '1.4' }}>
                    {children}
                  </Text>
                ),
                mark: ({ children }: any) => (
                  <Text as="span" style={{ backgroundColor: 'var(--accent-3)', color: 'var(--accent-11)' }}>
                        {children}
                      </Text>
                    ),
                ...(isRecent ? { mark: ({ children }: any) => children } : {}),
                  }}
                />
            </SearchBox.HitItem>
        )
      })}
    </SearchBox.HitList>
  )
}

export const SearchProvider = ({
  _searchKey,
  children,
}: {
  _searchKey: string | null
  children: React.ReactNode
}) => {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'k' && event.metaKey) {
        event.preventDefault()
        setOpen((p) => !p)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <SearchBox.Root
        onHitSelect={() => {
          setOpen(false)
        }}
        key={open ? 'open' : 'closed'}
      >
        {children}
        <DialogContent />
      </SearchBox.Root>
    </Dialog.Root>
  )
}

export const DialogTriggerMobile = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
    <Dialog.Trigger>
        <IconButton variant="ghost" color="gray" size="2">
          <MagnifyingGlassIcon height={16} width={16} />
      </IconButton>
    </Dialog.Trigger>
      <DialogContent />
    </Dialog.Root>
  )
}

export const DialogTriggerDesktop = ({
  hideOnHomepage = false,
  className,
  ...props
}: {
  style?: CSSProperties
  hideOnHomepage?: boolean
  className?: string
}) => {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  if (hideOnHomepage && pathname === '/') {
    return null
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Box
          className={clsx(s.search, className)}
        style={{
            cursor: 'pointer',
            userSelect: 'none',
            ...props.style,
          }}
          {...props}
        >
          <Flex
            align="center"
            gap="2"
            px="3"
            py="2"
            style={{
              border: '1px solid var(--gray-6)',
              borderRadius: 'var(--radius-3)',
              backgroundColor: 'var(--color-surface)',
          }}
        >
            <MagnifyingGlassIcon color="gray" height={16} width={16} />
            <Text size="2" color="gray">
              Search
            </Text>
            <Kbd style={{ marginLeft: 'auto' }}>⌘K</Kbd>
            </Flex>
        </Box>
    </Dialog.Trigger>
      <DialogContent />
    </Dialog.Root>
  )
}
