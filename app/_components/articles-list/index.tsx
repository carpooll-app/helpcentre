import { Button, Card, Flex } from '@radix-ui/themes'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import NextLink from 'next/link'
import { Article } from '@/lib/data/types'
import s from './articles-list.module.scss'

type Props =
  | {
      articles: Pick<Article, '_id' | '_title' | '_slugPath'>[]
    }
  | {
      articles: Pick<Article, '_id' | '_title' | '_slug'>[]
      categorySlug: string
    }

export const ArticlesList = (props: Props) => {
  return (
    <Card
      variant="classic"
      size="2"
      mt={{ initial: '6', sm: '0' }}
      className={s.card}
    >
      <Flex direction="column" gap="2">
        {props.articles.map((item) => {
          return (
            <Button
              color="gray"
              key={item._id}
              asChild
              variant="ghost"
              style={{ padding: '12px 16px' }}
            >
              <NextLink
                href={
                  '_slug' in item
                    ? // @ts-expect-error categorySlug is defined at this point
                      `/${props.categorySlug}/${item._slug}`
                    : `/${item._slugPath.split(' ').join('/')}`
                }
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                {item._title}
                <ArrowRightIcon />
              </NextLink>
            </Button>
          )
        })}
      </Flex>
    </Card>
  )
}
