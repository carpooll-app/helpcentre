import { Container, Grid, Heading, Text, Box, Flex, Avatar, Separator, Card, Table } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '../../../_components/breadcrumb'
import type { Metadata } from 'next/types'
import { PageView } from '../../../_components/analytics/page-view'
import { ArticleTracking } from '../../../_components/article-tracking'
import { TOC } from '../../../_components/toc'
import { Feedback } from '../../../_components/feedback'
import { sampleCategories, getCategoryBySlug, getSubcategoryBySlug } from '@/lib/data/sample-data'
import { MarkdownRenderer } from '@/lib/markdown/markdown-renderer'
import { ArticleLink } from '../../../_components/article-link'
import { Link } from '@radix-ui/themes'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export const generateStaticParams = async () => {
  const params: Array<{ category: string; subcategory: string; article: string }> = []
  
  sampleCategories.forEach(category => {
    category.subcategories.items.forEach(subcategory => {
      subcategory.articles.items.forEach(article => {
        params.push({
          category: category._slug,
          subcategory: subcategory._slug,
          article: article._slug
        })
      })
    })
  })
  
  return params
}

export const generateMetadata = async ({
  params: _params,
}: {
  params: Promise<{ category: string; subcategory: string; article: string }>
}): Promise<Metadata> => {
  const params = await _params
  const category = getCategoryBySlug(params.category)
  const subcategory = getSubcategoryBySlug(params.category, params.subcategory)
  const article = subcategory?.articles.items.find(art => art._slug === params.article)
  
  if (!category || !subcategory || !article) return {}
  
  const title = {
    absolute: `${article._title} | ${subcategory._title} | ${category._title} | Help Center`,
  }
  const description = !article.excerpt
    ? undefined
    : article.excerpt.length > 150
      ? article.excerpt.slice(0, 147) + '...'
      : article.excerpt

  const images = [
    {
      url: article.ogImage.url,
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
      type: 'article',
      url: `/${params.category}/${params.subcategory}/${params.article}`,
      images,
    },
  }
}

export default async function SubcategoryArticlePage({
  params: _params,
}: {
  params: Promise<{ category: string; subcategory: string; article: string }>
}) {
  const params = await _params
  const category = getCategoryBySlug(params.category)
  const subcategory = getSubcategoryBySlug(params.category, params.subcategory)
  const article = subcategory?.articles.items.find(art => art._slug === params.article)
  
  if (!category || !subcategory || !article) notFound()

  // Dummy related articles data
  const dummyRelatedArticles = [
    {
      id: '1',
      title: 'How to set up your account profile?',
      category: 'Getting Started',
      lastUpdated: '2024-01-15',
      href: '/getting-started/account-setup/profile-setup'
    },
    {
      id: '2',
      title: 'Understanding payment methods and billing',
      category: 'Features',
      lastUpdated: '2024-01-10',
      href: '/features/payment-billing/payment-methods'
    },
    {
      id: '3',
      title: 'Safety features and emergency contacts',
      category: 'Rideshare',
      lastUpdated: '2024-01-08',
      href: '/rideshare/safety/emergency-features'
    },
    {
      id: '4',
      title: 'Driver verification and background checks',
      category: 'Rideshare',
      lastUpdated: '2024-01-05',
      href: '/rideshare/safety/driver-verification'
    }
  ]

  return (
    <>
      <PageView ingestKey="article-view" />
      <ArticleTracking articleTitle={article._title} categoryName={category._title} />
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
          <Breadcrumb category={category} article={article} />
          
          {/* Article Header */}
          <Box mt="10">
            <Heading size="8" mb="3">
              {article._title}
            </Heading>
            {article.excerpt && (
              <Text color="gray" size="4" mb="3">
                {article.excerpt}
              </Text>
            )}
            
            {/* Author Info */}
            <Grid columns="auto 1fr" rows="auto auto" gap="2" mt="5" mb="3">
              <Avatar
                size="3"
                src="/images/team-avatar.jpg"
                fallback="RB"
                radius="full"
                style={{ gridRow: '1 / 3' }}
              />
              <Text size="2" weight="medium">
                Rutvik Babaria
              </Text>
              <Text size="2" color="gray">
                Last updated {new Date('2024-01-15').toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </Text>
            </Grid>
          </Box>

          {/* Main Content and TOC in a single grid */}
          <Box
            className="article-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 260px',
              gap: '64px',
              alignItems: 'start',
            }}
            mt="10"
          >
            {/* Content */}
            <Box>
              {article.body?.json.content && (
                <Box>
                  <MarkdownRenderer content={article.body.json.content} />
                </Box>
              )}

              {/* Feedback */}
              <Box mt="8" pt="6">
                <Feedback ingestKey="article-feedback" schema={{}} />
              </Box>
            </Box>

            {/* TOC - Sticky Sidebar */}
            {article.body?.json.content && (
              <Box
                className="toc-sidebar"
                style={{
                  position: 'sticky',
                  top: '120px',
                  width: '260px',
                  alignSelf: 'start',
                  height: 'fit-content',
                  zIndex: 10,
                  display: 'block',
                }}
              >
                <TOC content={article.body.json.content} />
              </Box>
            )}
          </Box>

          {/* Related Articles Section */}
          <Box mt="8" pt="6">
            <Heading size="5" mb="4" style={{ color: 'var(--gray-12)' }}>
              Related Articles
            </Heading>
            
            <Grid gap="4" columns={{ initial: '1', md: '2' }}>
              {dummyRelatedArticles.map((relatedArticle) => (
                <Card key={relatedArticle.id} variant="classic" asChild>
                  <Link href={relatedArticle.href}>
                    <Flex justify="between" align="center">
                      <Text size="2" weight="medium" style={{ color: 'black' }}>
                        {relatedArticle.title}
                      </Text>
                      <ArrowRightIcon />
                    </Flex>
                  </Link>
                </Card>
              ))}
            </Grid>
          </Box>
        </main>
      </Container>
    </>
  )
} 