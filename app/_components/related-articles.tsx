import { Box, Heading, Text, Flex, Card, Link, Grid } from '@radix-ui/themes'
import NextLink from 'next/link'
import { Article } from '@/lib/data/types'

interface RelatedArticlesProps {
  articles: Article[]
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return null
  }

  return (
    <Box mt="8" pt="6" style={{ borderTop: '1px solid var(--gray-6)' }}>
      <Heading size="5" mb="4" style={{ color: 'var(--gray-12)' }}>
        Related Articles
      </Heading>
      
      <Grid gap="4" columns={{ initial: '1', md: '2' }}>
        {articles.map((article) => (
          <Card key={article._id} size="2" style={{ 
            border: '1px solid var(--gray-6)', 
            borderRadius: '8px',
            transition: 'all 0.2s ease',
            cursor: 'pointer'
          }}>
            <Link asChild>
              <NextLink href={`/${article._slugPath.split(' ')[0]}/${article._slugPath.split(' ')[1]}/${article._slug}`}>
                <Box p="3">
                  <Heading size="3" mb="2" style={{ 
                    color: 'var(--accent-11)',
                    textDecoration: 'none',
                    fontWeight: '600'
                  }}>
                    {article._title}
                  </Heading>
                  {article.excerpt && (
                    <Text size="2" color="gray" style={{ 
                      lineHeight: '1.5',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {article.excerpt}
                    </Text>
                  )}
                </Box>
              </NextLink>
            </Link>
          </Card>
        ))}
      </Grid>
    </Box>
  )
} 