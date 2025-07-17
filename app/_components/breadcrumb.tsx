import { Flex, Link, Text } from '@radix-ui/themes'
import { SlashIcon, HomeIcon } from '@radix-ui/react-icons'
import NextLink from 'next/link'

export const Breadcrumb = ({
  category,
  article,
}: {
  category: { _slug: string; _title: string }
  article?: { _slug: string; _title: string }
}) => {
  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: 'var(--space-4)' }}>
    <Flex gap="1" mb={{ initial: '4', md: '5' }} align="center">
        <Link 
          asChild 
          color="gray" 
          size={{ initial: '2', md: '3' }}
          style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}
        >
          <NextLink href="/" aria-label="Go to home page">
            <HomeIcon height={16} width={16} />
            <span>Home</span>
          </NextLink>
      </Link>

      <Text color="gray" asChild>
          <SlashIcon height={16} width={16} />
      </Text>
      <Link
        asChild
        color="gray"
        highContrast={!article}
        size={{ initial: '2', md: '3' }}
        truncate
      >
          <NextLink href={`/${category._slug}`} aria-label={`Go to ${category._title} category`}>
            {category._title}
          </NextLink>
      </Link>

      {article && (
        <>
          <Text color="gray" asChild>
              <SlashIcon height={16} width={16} />
          </Text>
          <Link
            asChild
            color="gray"
            highContrast
            size={{ initial: '2', md: '3' }}
            truncate
          >
              <NextLink href={`/${category._slug}/${article._slug}`} aria-label={`Current page: ${article._title}`}>
              {article._title}
            </NextLink>
          </Link>
        </>
      )}
    </Flex>
    </nav>
  )
}
