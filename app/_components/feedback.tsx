'use client'
import {
  Button,
  Card,
  Flex,
  Grid,
  IconButton,
  Popover,
  Text,
  TextArea,
} from '@radix-ui/themes'
import * as React from 'react'
import { CheckCircledIcon } from '@radix-ui/react-icons'
import { usePathname } from 'next/navigation'
import { ThumbsUp, ThumbsDown } from 'lucide-react'

export const Feedback = ({
  ingestKey,
  schema,
}: {
  ingestKey: string
  schema: any
}) => {
  const pathname = usePathname()

  const [intent, setIntent] = React.useState<'Positive' | 'Negative' | null>(null)
  const [submitting, setSubmitting] = React.useState(false)
  const [shouldThank, setShouldThank] = React.useState(false)
  const formRef = React.useRef<HTMLFormElement>(null)

  React.useEffect(() => {
    if (!shouldThank) return
    const timeout = window.setTimeout(() => {
      formRef.current?.reset()
      setSubmitting(false)
    }, 300)

    return () => window.clearTimeout(timeout)
  }, [shouldThank])

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
    const form = formRef.current
    if (!intent || !form || submitting) return
    const formData = new FormData(form)
    
    // Simple local feedback handling
    const feedbackData = {
      intent,
      message: formData.get('message'),
      path: pathname,
      timestamp: new Date().toISOString()
    }

    console.log('Feedback submitted:', feedbackData)
    
    // You can send this to your own API endpoint
    // Example:
    // await fetch('/api/feedback', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(feedbackData)
    // })

    setSubmitting(true)
    setShouldThank(true)
  }

  return (
    <Card variant="classic" size="3">
      <Grid columns={{ initial: '1', xs: '1fr auto' }} gap="2" align="center">
        <Text style={{ flexGrow: 1 }}>Did this answer your question?</Text>
        <Flex gap="2" mr="4" position="relative" style={{ zIndex: 10 }}>
          <IconButton
            variant="ghost"
            mx="0 !important"
            color="gray"
            type="button"
            onClick={() => setIntent('Negative')}
            aria-label="Bad article"
          >
            <ThumbsDown
              height={14}
              width={14}
              fill={intent === 'Negative' ? 'var(--accent-12)' : 'none'}
            />
          </IconButton>
          <IconButton
            variant="ghost"
            mx="0 !important"
            type="button"
            color="gray"
            onClick={() => setIntent('Positive')}
            aria-label="Good article."
          >
            <ThumbsUp
              height={14}
              width={14}
              fill={intent === 'Positive' ? 'var(--accent-12)' : 'none'}
            />
          </IconButton>

          <Popover.Root
            open={!!intent}
            onOpenChange={(v) => {
              if (!v) {
                setIntent(null)
                setShouldThank(false)
              }
            }}
          >
            <Popover.Trigger
              style={{
                position: 'absolute',
                right: 0,
                top: '100%',
              }}
            >
              <div />
            </Popover.Trigger>

            <Popover.Content align="end" size="1" asChild>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                style={{ position: 'relative' }}
              >
                <Flex
                  direction="column"
                  gap="2"
                  style={{
                    opacity: shouldThank ? 0 : 1,
                    pointerEvents: shouldThank ? 'none' : 'auto',
                    transition: 'opacity 0.3s ease-in-out',
                  }}
                  aria-hidden={shouldThank}
                >
                  <TextArea
                    name="message"
                    size="1"
                    placeholder="Feedback"
                    required
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && e.metaKey) {
                        e.preventDefault()
                        handleSubmit()
                      }
                    }}
                  />
                  <Flex justify="end" gap="2">
                    <Button type="button" size="1" variant="soft">
                      Cancel
                    </Button>
                    <Button type="submit" size="1" disabled={submitting}>
                      {submitting ? 'Submitting...' : 'Submit'}
                    </Button>
                  </Flex>
                </Flex>
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  gap="1"
                  width="100%"
                  height="100%"
                  style={{
                    opacity: shouldThank ? 1 : 0,
                    pointerEvents: shouldThank ? 'auto' : 'none',
                    transform: shouldThank ? 'scale(1)' : 'scale(0.9)',
                    transition:
                      'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                    transitionDelay: shouldThank ? '0.15s' : '0s',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                  aria-hidden={!shouldThank}
                >
                  <Text color="green" style={{ display: 'flex' }}>
                    <CheckCircledIcon width={24} height={24} />
                  </Text>
                  <Text align="center" wrap="pretty" size="2">
                    Feedback sent,
                    <br />
                    thank you!
                  </Text>
                </Flex>
              </form>
            </Popover.Content>
          </Popover.Root>
        </Flex>
      </Grid>
    </Card>
  )
}
