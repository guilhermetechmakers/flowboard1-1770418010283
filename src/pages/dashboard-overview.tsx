import { Link } from 'react-router-dom'
import {
  FolderKanban,
  Plus,
  Upload,
  LayoutTemplate,
  TrendingUp,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const mockProjects = [
  { id: '1', name: 'Product roadmap Q1', lastActivity: '2 hours ago', collaborators: 3 },
  { id: '2', name: 'Research synthesis', lastActivity: 'Yesterday', collaborators: 2 },
  { id: '3', name: 'Design system map', lastActivity: '3 days ago', collaborators: 5 },
]

const mockActivity = [
  { id: '1', type: 'comment', message: 'Sarah commented on "User flows"', time: '10m ago' },
  { id: '2', type: 'ai', message: 'AI suggested 3 new nodes for research', time: '1h ago' },
  { id: '3', type: 'edit', message: 'You updated "Feature priorities"', time: '2h ago' },
]

const quickActions = [
  { label: 'New Board', icon: Plus, href: '/dashboard/board/new', primary: true },
  { label: 'Import', icon: Upload, href: '/dashboard/import-export' },
  { label: 'Templates', icon: LayoutTemplate, href: '/dashboard/templates' },
]

export function DashboardOverviewPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-h2 font-semibold text-foreground">Overview</h1>
        <p className="mt-1 text-muted-foreground">Your projects and recent activity</p>
      </div>

      {/* Quick actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick actions</CardTitle>
          <CardDescription>Create a board, import data, or start from a template</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          {quickActions.map((a) => (
            <Button
              key={a.label}
              asChild
              variant={a.primary ? 'default' : 'secondary'}
              size="sm"
              className="gap-2"
            >
              <Link to={a.href}>
                <a.icon className="h-4 w-4" />
                {a.label}
              </Link>
            </Button>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Project grid */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-h3 font-semibold text-foreground">Projects</h2>
            <Button asChild size="sm">
              <Link to="/dashboard/projects">
                View all
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

        {/* Activity feed */}
        <div className="space-y-4">
          <h2 className="text-h3 font-semibold text-foreground">Recent activity</h2>
          <Card>
            <CardContent className="pt-4">
              <ul className="space-y-4">
                {mockActivity.map((a) => (
                  <li key={a.id} className="flex gap-3 text-sm">
                    <span className="shrink-0 mt-0.5">
                      {a.type === 'comment' && (
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      )}
                      {a.type === 'ai' && (
                        <Sparkles className="h-4 w-4 text-primary" />
                      )}
                      {a.type === 'edit' && (
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      )}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-foreground truncate">{a.message}</p>
                      <p className="text-xs text-muted-foreground">{a.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export function DashboardOverviewSkeleton() {
  return (
    <div className="space-y-8">
      <div>
        <Skeleton className="h-8 w-48" />
        <Skeleton className="mt-2 h-4 w-64" />
      </div>
      <Card>
        <CardHeader>
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-4 w-64" />
        </CardHeader>
        <CardContent className="flex gap-3">
          <Skeleton className="h-9 w-24" />
          <Skeleton className="h-9 w-20" />
          <Skeleton className="h-9 w-24" />
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <Skeleton className="h-6 w-24" />
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="aspect-video rounded-lg" />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <Skeleton className="h-6 w-32" />
          <Card>
            <CardContent className="pt-4 space-y-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
