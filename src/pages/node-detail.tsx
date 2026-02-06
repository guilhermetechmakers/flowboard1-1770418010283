import { useParams, Link } from 'react-router-dom'
import { Sparkles, Tag, User, Calendar, Link as LinkIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'

export function NodeDetailPage() {
  const { boardId, nodeId } = useParams<{ boardId: string; nodeId: string }>()

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in p-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to={boardId ? `/dashboard/board/${boardId}` : '/dashboard'} className="hover:text-foreground">
          Board
        </Link>
        <span>/</span>
        <span>Node {nodeId ?? '—'}</span>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-start justify-between gap-4">
          <div className="space-y-1 min-w-0 flex-1">
            <Label htmlFor="title" className="text-xs text-muted-foreground">Title</Label>
            <Input
              id="title"
              defaultValue="Untitled node"
              className="text-lg font-semibold border-0 px-0 focus-visible:ring-0"
            />
          </div>
          <Badge variant="secondary">text</Badge>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="content" className="text-xs text-muted-foreground">Content</Label>
            <textarea
              id="content"
              className="mt-1 flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Add content..."
            />
          </div>

          <Card className="bg-muted/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                AI assistant
              </CardTitle>
              <p className="text-xs text-muted-foreground">
                Summarize, expand, suggest links, or generate next steps.
              </p>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">Summarize</Button>
                <Button variant="outline" size="sm">Expand</Button>
                <Button variant="outline" size="sm">Suggest links</Button>
                <Button variant="outline" size="sm">Next steps</Button>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      <Tabs defaultValue="activity" className="w-full">
        <TabsList>
          <TabsTrigger value="activity">Activity & history</TabsTrigger>
          <TabsTrigger value="metadata">Metadata</TabsTrigger>
        </TabsList>
        <TabsContent value="activity" className="mt-4">
          <Card>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground">No activity yet.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="metadata" className="mt-4">
          <Card>
            <CardContent className="pt-4 space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Tag className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Tags:</span>
                <Badge variant="secondary">Add tag</Badge>
              </div>
              <Separator />
              <div className="flex items-center gap-2 text-sm">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Assignees:</span>
                <span className="text-foreground">—</span>
              </div>
              <Separator />
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Due date:</span>
                <Input type="date" className="w-40 h-8" />
              </div>
              <Separator />
              <div className="flex items-center gap-2 text-sm">
                <LinkIcon className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Source links:</span>
                <Button variant="outline" size="sm">Add link</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
