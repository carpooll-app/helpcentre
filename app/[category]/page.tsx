import { Container, Grid, Heading, Text, Box, Separator } from '@radix-ui/themes'
import { CategoryMeta } from '../_components/category-card'
import { ArticleLink } from '../_components/article-link'
import { notFound } from 'next/navigation'
import { ArticlesList } from '../_components/articles-list'
import { Breadcrumb } from '../_components/breadcrumb'
import type { Metadata } from 'next/types'
import { PageView } from '../_components/analytics/page-view'
import { CategoryTracking } from '../_components/category-tracking'
import { sampleCategories } from '@/lib/data/sample-data'

export const generateStaticParams = async () => {
  // Use local data instead of BaseHub
  return sampleCategories.map((category) => ({
    params: { category: category._slug },
  }))
}

export const generateMetadata = async ({
  params: _params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> => {
  const params = await _params
  const category = sampleCategories.find(cat => cat._slug === params.category)
  
  if (!category) return {}
  
  const title = {
    absolute: `${category._title} | Help Center`,
  }
  const description = !category.description
    ? undefined
    : category.description.length > 150
      ? category.description.slice(0, 147) + '...'
      : category.description

  const images = [
    {
      url: category.ogImage.url,
      width: 1200,
      height: 630,
    },
  ]

  return {
    title,
    description,
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/favicon.ico',
    },
    openGraph: {
      title,
      description,
      siteName: 'Help Center',
      locale: 'en-US',
      type: 'website',
      url: `/${params.category}`,
      images,
    },
  }
}

export default async function CategoryPage({
  params: _params,
}: {
  params: Promise<{ category: string }>
}) {
  const params = await _params
  const category = sampleCategories.find(cat => cat._slug === params.category)
  
  if (!category) notFound()

  return (
    <>
      <PageView ingestKey="category-view" />
      <CategoryTracking categoryName={category._title} />
      <Container
        pb="9"
        mt={{ initial: 'var(--header-margin)', md: '0' }}
        pt={{ initial: '6', sm: '0' }}
        px={{ initial: '5', md: '7' }}
        style={{ flexGrow: '1' }}
        size="4"
        maxWidth="1024px"
        asChild
      >
        <main>
          <Breadcrumb category={category} />
          
          {/* Category Header with H1 and Description */}
          <Box mb="6">
            <Heading as="h1" size="8" mb="3">
              {category._title}
            </Heading>
            {category.description && (
              <Text as="p" size="3" color="gray" style={{ lineHeight: '1.6' }}>
                {category.description}
              </Text>
            )}
          </Box>
          
          {/* Subcategories Section */}
          <Box>
            <Grid gap="4">
              {category.subcategories.items.map((subcategory) => (
                <Box
                  key={subcategory._id}
                  style={{
                    border: '1px solid var(--gray-6)',
                    borderRadius: '8px',
                    padding: '24px',
                    backgroundColor: 'var(--color-surface)'
                  }}
                >
                  <Heading as="h2" size="5" mb="3">
                    {subcategory._title}
                  </Heading>
                  
                  <Separator size="4" mb="4" />
                  
                  <Grid gap="3">
                    {subcategory.articles.items.map((article) => (
                      <Box key={article._id}>
                        <ArticleLink
                          data={article}
                          categorySlug={category._slug}
                        />
                      </Box>
                    ))}
                  </Grid>
                </Box>
              ))}
            </Grid>
          </Box>
        </main>
      </Container>
    </>
  )
}
