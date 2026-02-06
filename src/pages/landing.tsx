import { Link } from 'react-router-dom'
import {
  Sparkles,
  LayoutGrid,
  Users,
  Plug,
  ArrowRight,
  Check,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const features = [
  {
    title: 'AI Agent',
    description: 'Context-aware AI that summarizes, proposes next steps, and generates content for your boards.',
    icon: Sparkles,
  },
  {
    title: 'Visual Board',
    description: 'Infinite canvas with nodes and edges to map ideas, research, and workflows.',
    icon: LayoutGrid,
  },
  {
    title: 'Collaboration',
    description: 'Real-time presence, comments, and assignments so teams stay in sync.',
    icon: Users,
  },
  {
    title: 'Integrations',
    description: 'Connect Google Drive, Notion, Slack, and GitHub for a unified workflow.',
    icon: Plug,
  },
]

const tiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'For individuals and small teams',
    features: ['Up to 2 collaborators', '3 boards', 'Basic AI suggestions', 'Export PNG'],
    cta: 'Get Started',
    href: '/signup',
    primary: false,
  },
  {
    name: 'Pro',
    price: '$12',
    period: '/user/mo',
    description: 'For growing teams',
    features: ['Unlimited collaborators', 'Unlimited boards', 'Full AI agent', 'Export PDF/JSON', 'Priority support'],
    cta: 'Start free trial',
    href: '/signup',
    primary: true,
  },
]

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-card to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
            <h1 className="text-hero font-semibold tracking-tight text-foreground md:text-6xl">
              AI-assisted collaborative{' '}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                visual boards
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Organize ideas, research, and workflows as connected flowchart nodes. Your project gets a context-aware AI agent that summarizes, proposes next steps, and generates content.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-base shadow-card hover:shadow-card-hover hover:scale-[1.02]">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="h-12 px-8 text-base">
                <Link to="/demo">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Bento-style grid */}
      <section className="border-b border-border py-24 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 font-semibold text-center text-foreground mb-4">
            Everything you need to map and ship
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            FlowBoard brings AI, visual mapping, and collaboration into one place.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <Card
                key={f.title}
                className={cn(
                  'overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:scale-[1.01]',
                  i === 0 && 'md:col-span-2'
                )}
              >
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <f.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{f.title}</CardTitle>
                    <CardDescription className="mt-1.5 text-base">
                      {f.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live demo teaser */}
      <section className="border-b border-border py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 font-semibold text-center text-foreground mb-4">
            See it in action
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Explore a read-only sample board to get a feel for the canvas.
          </p>
          <div className="max-w-4xl mx-auto rounded-lg border border-border bg-card shadow-card overflow-hidden aspect-video flex items-center justify-center">
            <div className="text-center p-8">
              <LayoutGrid className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Sample board viewer placeholder</p>
              <Button asChild variant="outline" className="mt-4">
                <Link to="/demo">Open demo board</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="border-b border-border py-24 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 font-semibold text-center text-foreground mb-4">
            Simple pricing
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            Start free, upgrade when your team grows.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className={cn(
                  'flex flex-col transition-all duration-300 hover:shadow-card-hover',
                  tier.primary && 'border-primary shadow-card'
                )}
              >
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <p className="mt-2 text-3xl font-semibold">
                    {tier.price}
                    {tier.period && (
                      <span className="text-base font-normal text-muted-foreground">{tier.period}</span>
                    )}
                  </p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardContent className="pt-0">
                  <Button
                    asChild
                    variant={tier.primary ? 'default' : 'secondary'}
                    className="w-full"
                  >
                    <Link to={tier.href}>
                      {tier.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 font-semibold text-center text-foreground mb-12">
            Trusted by teams
          </h2>
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <span className="text-lg font-medium">Company logos carousel placeholder</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link to="/" className="font-semibold text-primary">
              FlowBoard
            </Link>
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
              <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link to="/docs" className="hover:text-foreground transition-colors">Docs</Link>
              <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            </nav>
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} FlowBoard. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
