import { Card, Flex, Text } from '@radix-ui/themes'
import { Icon } from './icon'
import Link from 'next/link'
import { Category } from '@/lib/data/types'

export type CategoryMeta = Category

export const CategoryCard = ({ data }: { data: CategoryMeta }) => {
  return (
    <Card variant="classic" size="2" asChild>
      <Link href={`/${data._slug}`}>
        <Flex direction="column">
          <Icon name={data.icon} style={{ width: 18, height: 18 }} />
          <Text size="3" weight="bold" mt="2">
            {data._title}
          </Text>
          <Text
            size="3"
            color="gray"
            style={{
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '3',
            }}
          >
            {data.description}
          </Text>
        </Flex>
      </Link>
    </Card>
  )
}
