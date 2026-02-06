import { Link } from 'react-router-dom'
import { HelpCircle, BookOpen, Video, Mail, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  { q: 'How do I create my first board?', a: 'From the dashboard, click "New Board" or use a template from the Templates page.' },
  { q: 'How does the AI agent work?', a: 'The AI agent has access to your board context and can summarize nodes, suggest next steps, and generate content. You can toggle AI in project settings.' },
  { q: 'Can I export my board?', a: 'Yes. Use Import & Export to download as PNG, PDF, CSV, or JSON.' },
]

export function AboutPage() {
  return (
    <div className="space-y-8 animate-fade-in max-w-3xl mx-auto px-4">
      <div>
        <h1 className="text-h2 font-semibold text-foreground">About & help</h1>
        <p className="mt-1 text-muted-foreground">Documentation and support</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            FAQ
          </CardTitle>
          <CardDescription>Frequently asked questions</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Getting started
            </CardTitle>
            <CardDescription>Guides and docs</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" asChild className="w-full justify-start gap-2">
              <Link to="#">
                View docs
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-5 w-5" />
              Video tutorials
            </CardTitle>
            <CardDescription>Watch walkthroughs</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" asChild className="w-full justify-start gap-2">
              <Link to="#">Watch tutorials</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Contact support
          </CardTitle>
          <CardDescription>Send us a message or check status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Input id="message" placeholder="Describe your issue..." />
          </div>
          <Button>Send message</Button>
          <p className="text-sm text-muted-foreground">
            <Link to="#" className="text-primary hover:underline">Status page</Link>
            {' · '}
            <Link to="#" className="text-primary hover:underline">Docs</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
