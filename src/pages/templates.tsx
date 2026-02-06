import { Link } from 'react-router-dom'
import { LayoutTemplate, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const mockTemplates = [
  { id: '1', name: 'Product roadmap', description: 'Quarterly goals and milestones', category: 'Product' },
  { id: '2', name: 'Research synthesis', description: 'Literature and findings map', category: 'Research' },
  { id: '3', name: 'Sprint planning', description: 'Tasks and dependencies', category: 'Engineering' },
]

export function TemplatesPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-h2 font-semibold text-foreground">Templates & examples</h1>
        <p className="mt-1 text-muted-foreground">Starter boards and onboarding examples</p>
      </div>
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search templates..." className="pl-9" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTemplates.map((t) => (
          <Card
            key={t.id}
            className="overflow-hidden transition-all duration-200 hover:shadow-card-hover hover:scale-[1.01]"
          >
            <div className="aspect-video bg-muted/50 flex items-center justify-center">
              <LayoutTemplate className="h-12 w-12 text-muted-foreground" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{t.name}</CardTitle>
              <CardDescription>{t.description}</CardDescription>
              <p className="text-xs text-muted-foreground">{t.category}</p>
            </CardHeader>
            <CardContent className="pt-0">
              <Button asChild variant="secondary" size="sm" className="w-full">
                <Link to={`/dashboard/board/new?template=${t.id}`}>Apply template</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
