import {
  Box,
  Container,
  Grid,
  Heading,
  Flex,
  Link,
  Text,
  ScrollArea,
} from '@radix-ui/themes'
import { CategoryCard, CategoryMeta } from './_components/category-card'
import { ArticleLink, ArticleMeta } from './_components/article-link'
import { RichText } from '@/lib/markdown/markdown-renderer'
import { DialogTriggerDesktop as Search } from './_components/search'
import { sampleIndexPage, sampleCategories } from '@/lib/data/sample-data'

export default function HomePage() {
  // Use local data instead of BaseHub
  const data = {
          index: {
      ...sampleIndexPage,
            popularArticlesSection: {
        title: 'Popular Articles',
        articles: sampleIndexPage.popularArticlesSection.articles
            },
            categoriesSection: {
        title: 'Browse by Category',
              categories: {
          items: sampleCategories
        }
      }
    }
  }

  // Helper function to find category for an article
  const findCategoryForArticle = (articleId: string) => {
    for (const category of sampleCategories) {
      // Check direct articles in category
      if (category.articles?.items?.some(item => item._id === articleId)) {
        return category
      }
      // Check articles in subcategories
      if (category.subcategories?.items) {
        for (const subcategory of category.subcategories.items) {
          if (subcategory.articles?.items?.some(item => item._id === articleId)) {
            return category
          }
        }
      }
    }
    return null
  }

        return (
          <>
            <Flex
              direction="column"
              align="center"
              maxWidth="540px"
              mx="auto"
              gap="4"
              pt="6"
              px="5"
              mt={{ initial: 'var(--header-margin)', md: '0' }}
            >
              <Heading align="center" size="8" wrap="pretty">
                {data.index.greeting}
              </Heading>
              <Search style={{ width: '100%' }} />
              {data.index.subtitle?.json && (
                <Text as="span" color="gray" size="2">
            <RichText content={data.index.subtitle.json.content} />
                </Text>
              )}
            </Flex>

            <Container
              size="4"
              maxWidth="1024px"
              py="9"
              position="relative"
              overflow="clip"
              px={{ initial: '5', md: '7' }}
            >
              <Box
                style={{
                  zIndex: -1,
                  position: 'absolute',
                  top: 0,
                  left: -400,
                  background:
                    'radial-gradient(farthest-side, var(--accent-3), transparent)',
                  width: '700px',
                  height: '700px',
                }}
              />
              <Box
                style={{
                  zIndex: -1,
                  position: 'absolute',
                  top: 200,
                  left: -500,
                  background:
                    'radial-gradient(farthest-side, var(--purple-3), transparent)',
                  width: '700px',
                  height: '700px',
                }}
              />

              <Grid gap="9">
                <Box>
                  <Heading size="4" mb="4">
                    {data.index.popularArticlesSection.title}
                  </Heading>
                    <Grid
                      gap="4"
              columns={{ initial: '1', md: '2' }}
                    >
                      {data.index.popularArticlesSection.articles.map(
                        (article) => {
                  const category = findCategoryForArticle(article._id)
                          if (!category) return null
                          return (
                            <ArticleLink
                              data={article}
                              key={article._id}
                      categorySlug={category._slug}
                            />
                          )
                        }
                      )}
                    </Grid>
                </Box>

                <Box>
                  <Heading size="4" mb="4">
                    {data.index.categoriesSection.title}
                  </Heading>
                  <Grid gap="4" columns={{ initial: '1', sm: '2', md: '3' }}>
                    {data.index.categoriesSection.categories.items.map(
                      (category) => {
                        return (
                          <CategoryCard data={category} key={category._id} />
                        )
                      }
                    )}
                  </Grid>
                </Box>
              </Grid>
            </Container>
          </>
  )
}
