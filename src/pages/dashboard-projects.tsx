import { Link } from 'react-router-dom'
import { FolderKanban } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

const mockProjects = [
  { id: '1', name: 'Product roadmap Q1', lastActivity: '2 hours ago', collaborators: 3 },
  { id: '2', name: 'Research synthesis', lastActivity: 'Yesterday', collaborators: 2 },
  { id: '3', name: 'Design system map', lastActivity: '3 days ago', collaborators: 5 },
]

export function DashboardProjectsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-h2 font-semibold text-foreground">Projects</h1>
          <p className="mt-1 text-muted-foreground">All your boards and projects</p>
        </div>
        <Button asChild>
          <Link to="/dashboard/board/new">
            New project
          </Link>
        </Button>
      </div>
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search projects..." className="pl-9" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockProjects.map((p) => (
          <Link key={p.id} to={`/dashboard/board/${p.id}`}>
            <Card className="overflow-hidden transition-all duration-200 hover:shadow-card-hover hover:scale-[1.01] cursor-pointer h-full">
              <div className="aspect-video bg-muted/50 flex items-center justify-center">
                <FolderKanban className="h-12 w-12 text-muted-foreground" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base line-clamp-1">{p.name}</CardTitle>
                <CardDescription className="text-xs">
                  {p.lastActivity} · {p.collaborators} collaborators
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
