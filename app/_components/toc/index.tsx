'use client'
import { Box, Heading, Link, Text } from '@radix-ui/themes'
import { useEffect, useState } from 'react'
import { extractHeadings } from '@/lib/markdown/markdown-renderer'
import s from './toc.module.scss'

interface TOCItem {
  id: string
  text: string
  level: number
  element: HTMLElement
}

interface TOCProps {
  content: string
}

export const TOC = ({ content }: TOCProps) => {
  const [tocItems, setTocItems] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  // Extract headings from markdown content using shared utility
  // This ensures consistent ID generation between TOC and MarkdownRenderer
  useEffect(() => {
    const headings = extractHeadings(content)
    console.log('TOC: All headings extracted:', headings)
    setTocItems(headings.map(h => ({ ...h, element: null as any })))
  }, [content])

  // Set up intersection observer for active heading tracking
  // Uses rootMargin to trigger active state before heading reaches top
  useEffect(() => {
    if (tocItems.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -35% 0px' }
    )

    // Find heading elements in the DOM
    tocItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [tocItems])

  // Scroll to heading when TOC item is clicked
  // Includes fallback logic for partial ID matches
  const scrollToHeading = (id: string) => {
    console.log('TOC: Attempting to scroll to ID:', id)
    const element = document.getElementById(id)
    if (element) {
      console.log('TOC: Found element, scrolling to:', element.textContent)
      console.log('TOC: Element position:', {
        offsetTop: element.offsetTop,
        getBoundingClientRect: element.getBoundingClientRect(),
        scrollTop: window.pageYOffset
      })
      
      // Use scrollIntoView with better options
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      })
      
      // Alternative: manual scroll calculation
      // const headerHeight = 80 // Approximate header height
      // const elementTop = element.offsetTop
      // const scrollPosition = elementTop - headerHeight - 20 // 20px buffer
      // 
      // window.scrollTo({
      //   top: scrollPosition,
      //   behavior: 'smooth'
      // })
    } else {
      console.log('TOC: Element not found for ID:', id)
      // Try to find any element with a similar ID
      const allElements = document.querySelectorAll('[id*="heading"]')
      console.log('TOC: All heading elements found:', Array.from(allElements).map(el => ({ id: el.id, text: el.textContent })))
      
      // Try to find by partial match
      const partialMatch = Array.from(allElements).find(el => {
        const idParts = id.split('-')
        const lastPart = idParts[idParts.length - 1]
        return lastPart && el.id.includes(lastPart)
      })
      if (partialMatch) {
        console.log('TOC: Found partial match:', partialMatch.id)
        partialMatch.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  if (tocItems.length === 0) return null

  return (
    <div className={s.container}>
      <div className={s.tocCard}>
        <Heading size="3" weight="medium" mb="2" className={s.title}>
          On this page
        </Heading>
        <ol className={s.list}>
          {tocItems.map((item) => (
            <li key={item.id} className={s.listItem}>
              <Link
                className={`${s.link} ${activeId === item.id ? s.active : ''}`}
                onClick={() => scrollToHeading(item.id)}
              >
                {item.text}
              </Link>
              {item.level === 2 && (
                <ol className={s.nestedList}>
                  {/* Nested items would go here if needed */}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
