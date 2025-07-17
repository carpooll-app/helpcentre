import { Container, Heading, Text, Button, Flex, Box } from '@radix-ui/themes'
import { HomeIcon, ArrowLeftIcon } from '@radix-ui/react-icons'
import NextLink from 'next/link'
import { sampleCategories } from '@/lib/data/sample-data'

export default function NotFound() {
  // Get some popular categories for suggestions
  const popularCategories = sampleCategories.slice(0, 3)

  return (
    <Container size="4" maxWidth="800px" style={{ minHeight: '60vh' }}>
      <Flex direction="column" align="center" justify="center" style={{ minHeight: '60vh' }} gap="6">
        <Box style={{ textAlign: 'center' }}>
          <Heading size="8" mb="4">Page Not Found</Heading>
          <Text size="4" color="gray" mb="6">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
          </Text>
        </Box>

        <Flex gap="3" direction={{ initial: 'column', sm: 'row' }}>
          <Button asChild size="3">
            <NextLink href="/">
              <HomeIcon />
              Go Home
            </NextLink>
          </Button>
          <Button asChild variant="outline" size="3">
            <NextLink href="javascript:history.back()">
              <ArrowLeftIcon />
              Go Back
            </NextLink>
          </Button>
        </Flex>

        <Box style={{ textAlign: 'center' }} mt="8">
          <Text size="3" weight="bold" mb="4">Popular Help Topics</Text>
          <Flex gap="3" direction={{ initial: 'column', sm: 'row' }} justify="center">
            {popularCategories.map((category) => (
              <Button key={category._slug} asChild variant="ghost" size="2">
                <NextLink href={`/${category._slug}`}>
                  {category._title}
                </NextLink>
              </Button>
            ))}
          </Flex>
        </Box>

        <Box style={{ textAlign: 'center' }} mt="6">
          <Text size="2" color="gray">
            Still need help? Contact our support team at{' '}
            <NextLink href="mailto:support@carpooll.com" style={{ color: 'var(--blue-9)', textDecoration: 'none' }}>
              support@carpooll.com
            </NextLink>
          </Text>
        </Box>
      </Flex>
    </Container>
  )
} 