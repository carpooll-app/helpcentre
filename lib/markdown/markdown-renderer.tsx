import React from 'react'
import { Heading, Text, Link, Code, Blockquote, Separator, Box } from '@radix-ui/themes'
import NextLink from 'next/link'

interface MarkdownRendererProps {
  content: string
  components?: Record<string, React.ComponentType<any>>
}

// Shared utility function for generating consistent heading IDs
export const generateHeadingId = (text: string, index: number): string => {
  return `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
}

// Extract headings from markdown content with consistent IDs
export const extractHeadings = (content: string) => {
  const headings: Array<{ id: string; text: string; level: number }> = []
  const lines = content.split('\n')
  let headingIndex = 0
  
  lines.forEach((line) => {
    const trimmedLine = line.trim()
    if (trimmedLine.startsWith('# ')) {
      const text = trimmedLine.substring(2)
      const id = generateHeadingId(text, headingIndex)
      headings.push({ id, text, level: 1 })
      headingIndex++
    } else if (trimmedLine.startsWith('## ')) {
      const text = trimmedLine.substring(3)
      const id = generateHeadingId(text, headingIndex)
      headings.push({ id, text, level: 2 })
      headingIndex++
    } else if (trimmedLine.startsWith('### ')) {
      const text = trimmedLine.substring(4)
      const id = generateHeadingId(text, headingIndex)
      headings.push({ id, text, level: 3 })
      headingIndex++
    } else if (trimmedLine.startsWith('#### ')) {
      const text = trimmedLine.substring(5)
      const id = generateHeadingId(text, headingIndex)
      headings.push({ id, text, level: 4 })
      headingIndex++
    } else if (trimmedLine.startsWith('##### ')) {
      const text = trimmedLine.substring(6)
      const id = generateHeadingId(text, headingIndex)
      headings.push({ id, text, level: 5 })
      headingIndex++
    } else if (trimmedLine.startsWith('###### ')) {
      const text = trimmedLine.substring(7)
      const id = generateHeadingId(text, headingIndex)
      headings.push({ id, text, level: 6 })
      headingIndex++
    }
  })
  
  return headings
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ 
  content, 
  components = {} 
}) => {
  // Simple markdown parser - you can replace this with a proper markdown library
  const parseMarkdown = (text: string) => {
    // This is a basic implementation. For production, use a library like react-markdown
    const lines = text.split('\n')
    const elements: React.ReactNode[] = []
    let headingIndex = 0
    
    lines.forEach((line, index) => {
      if (line.startsWith('# ')) {
        const text = line.substring(2)
        const id = generateHeadingId(text, headingIndex)
        console.log('MarkdownRenderer: Found H1:', text, 'ID:', id)
        elements.push(
          <Heading key={index} as="h1" size="6" mt="4" mb="3" id={id}>
            {text}
          </Heading>
        )
        headingIndex++
      } else if (line.startsWith('## ')) {
        const text = line.substring(3)
        const id = generateHeadingId(text, headingIndex)
        console.log('MarkdownRenderer: Found H2:', text, 'ID:', id)
        elements.push(
          <Heading key={index} as="h2" size="5" mt="4" mb="2" id={id}>
            {text}
          </Heading>
        )
        headingIndex++
      } else if (line.startsWith('### ')) {
        const text = line.substring(4)
        const id = generateHeadingId(text, headingIndex)
        console.log('MarkdownRenderer: Found H3:', text, 'ID:', id)
        elements.push(
          <Heading key={index} as="h3" size="4" mt="3" mb="2" id={id}>
            {text}
          </Heading>
        )
        headingIndex++
      } else if (line.startsWith('#### ')) {
        const text = line.substring(5)
        const id = generateHeadingId(text, headingIndex)
        console.log('MarkdownRenderer: Found H4:', text, 'ID:', id)
        elements.push(
          <Heading key={index} as="h4" size="3" mt="3" mb="2" id={id}>
            {text}
          </Heading>
        )
        headingIndex++
      } else if (line.startsWith('##### ')) {
        const text = line.substring(6)
        const id = generateHeadingId(text, headingIndex)
        console.log('MarkdownRenderer: Found H5:', text, 'ID:', id)
        elements.push(
          <Heading key={index} as="h5" size="2" mt="2" mb="2" id={id}>
            {text}
          </Heading>
        )
        headingIndex++
      } else if (line.startsWith('###### ')) {
        const text = line.substring(7)
        const id = generateHeadingId(text, headingIndex)
        console.log('MarkdownRenderer: Found H6:', text, 'ID:', id)
        elements.push(
          <Heading key={index} as="h6" size="1" mt="2" mb="2" id={id}>
            {text}
          </Heading>
        )
        headingIndex++
      } else if (line.trim() === '') {
        elements.push(<Box key={index} mb="2" />)
      } else if (line.startsWith('- ')) {
        const text = line.substring(2)
        elements.push(
          <Box key={index} mb="2" style={{ display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ marginRight: 'var(--space-2)', color: 'var(--accent-9)' }}>•</span>
            <Text size="3">{text}</Text>
          </Box>
        )
      } else if (line.startsWith('1. ')) {
        const text = line.substring(3)
        elements.push(
          <Box key={index} mb="2" style={{ display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ marginRight: 'var(--space-2)', color: 'var(--accent-9)', minWidth: '20px' }}>
              {line.match(/^\d+\./)?.[0]}
            </span>
            <Text size="3">{text}</Text>
          </Box>
        )
      } else if (line.startsWith('**') && line.endsWith('**')) {
        const text = line.substring(2, line.length - 2)
        elements.push(
          <Text key={index} size="3" weight="bold" mb="2">
            {text}
          </Text>
        )
      } else if (line.startsWith('*') && line.endsWith('*')) {
        const text = line.substring(1, line.length - 1)
        elements.push(
          <Text key={index} size="3" style={{ fontStyle: 'italic' }} mb="2">
            {text}
          </Text>
        )
      } else if (line.startsWith('`') && line.endsWith('`')) {
        const text = line.substring(1, line.length - 1)
        elements.push(
          <Code key={index} size="2" mb="2">
            {text}
          </Code>
        )
      } else if (line.startsWith('> ')) {
        const text = line.substring(2)
        elements.push(
          <Blockquote key={index} mb="2" style={{ 
            borderLeft: '3px solid var(--accent-6)',
            paddingLeft: 'var(--space-4)',
            marginLeft: '0'
          }}>
            <Text size="3">{text}</Text>
          </Blockquote>
        )
      } else if (line.startsWith('---')) {
        elements.push(<Separator key={index} size="4" my="3" />)
      } else if (line.trim() !== '') {
        elements.push(
          <Text key={index} size="3" mb="2" style={{ lineHeight: '1.6' }}>
            {line}
          </Text>
        )
      }
    })
    
    return elements
  }

  return <Box>{parseMarkdown(content)}</Box>
}

// Rich text component that mimics BaseHub's RichText
export const RichText: React.FC<{
  content?: string
  children?: React.ReactNode
  components?: Record<string, React.ComponentType<any>>
}> = ({ content, children, components = {} }) => {
  let headingIndex = 0
  
  const defaultComponents = {
    h1: (props: any) => {
      const text = props.children || ''
      const id = generateHeadingId(text, headingIndex)
      headingIndex++
      return <Heading as="h1" size="6" mt="4" mb="3" id={id} {...props} />
    },
    h2: (props: any) => {
      const text = props.children || ''
      const id = generateHeadingId(text, headingIndex)
      headingIndex++
      return <Heading as="h2" size="5" mt="4" mb="2" id={id} {...props} />
    },
    h3: (props: any) => {
      const text = props.children || ''
      const id = generateHeadingId(text, headingIndex)
      headingIndex++
      return <Heading as="h3" size="4" mt="3" mb="2" id={id} {...props} />
    },
    h4: (props: any) => {
      const text = props.children || ''
      const id = generateHeadingId(text, headingIndex)
      headingIndex++
      return <Heading as="h4" size="3" mt="3" mb="2" id={id} {...props} />
    },
    p: (props: any) => <Text as="p" size="3" mb="2" style={{ lineHeight: '1.6' }} {...props} />,
    a: (props: any) => (
      <Link asChild>
        <NextLink {...props} />
      </Link>
    ),
    code: (props: any) => <Code {...props} />,
    blockquote: (props: any) => (
      <Blockquote {...props} style={{ 
        borderLeft: '3px solid var(--accent-6)',
        paddingLeft: 'var(--space-4)',
        marginLeft: '0'
      }} />
    ),
    ...components
  }

  if (content) {
    return <MarkdownRenderer content={content} components={defaultComponents} />
  }

  return <>{children}</>
} 