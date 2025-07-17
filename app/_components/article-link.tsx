import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Card, Flex, Text } from '@radix-ui/themes'
import Link from 'next/link'
import { Article } from '@/lib/data/types'

export type ArticleMeta = Pick<Article, '_id' | '_slug' | '_title' | 'excerpt' | '_slugPath'>

export const ArticleLink = ({
  data,
  categorySlug,
}: {
  data: ArticleMeta
  categorySlug: string
}) => {
  // Parse _slugPath to get the correct route
  // Format: "category subcategory article" or "category article"
  let href = `/${categorySlug}/${data._slug}`
  
  if (data._slugPath) {
    const pathParts = data._slugPath.split(' ')
    if (pathParts.length === 3) {
      // category subcategory article
      href = `/${pathParts[0]}/${pathParts[1]}/${pathParts[2]}`
    } else if (pathParts.length === 2) {
      // category article
      href = `/${pathParts[0]}/${pathParts[1]}`
    }
  }
  
  return (
    <Card variant="classic" asChild>
      <Link href={href}>
        <Flex justify="between" align="center">
          <Text size="2" weight="medium">
            {data._title}
          </Text>
          <ArrowRightIcon />
        </Flex>
      </Link>
    </Card>
  )
}
