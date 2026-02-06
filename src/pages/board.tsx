import { useParams, Link } from 'react-router-dom'
import {
  MousePointer2,
  Hand,
  Link2,
  Square,
  Layout,
  Undo2,
  Redo2,
  ZoomIn,
  ZoomOut,
  Grid3X3,
  Minimize2,
  MessageSquare,
  Share2,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { NodeType } from '@/types'

const nodeTypes: { type: NodeType; label: string }[] = [
  { type: 'text', label: 'Text' },
  { type: 'research_link', label: 'Research link' },
  { type: 'file', label: 'File' },
  { type: 'image', label: 'Image' },
  { type: 'task', label: 'Task' },
  { type: 'table', label: 'Table' },
  { type: 'code', label: 'Code' },
  { type: 'note', label: 'Note' },
]

export function BoardPage() {
  const { boardId } = useParams<{ boardId: string }>()

  return (
    <div className="h-[calc(100vh-3.5rem)] flex flex-col bg-background">
      {/* Toolbar */}
      <header className="flex items-center gap-2 border-b border-border bg-card px-2 py-2 shrink-0">
        <div className="flex items-center gap-1 border-r border-border pr-2">
          <Button variant="ghost" size="icon" className="h-9 w-9" title="Select">
            <MousePointer2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9" title="Pan">
            <Hand className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9" title="Connect">
            <Link2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9" title="Create node">
            <Square className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-1 border-r border-border pr-2">
          <Button variant="ghost" size="icon" className="h-9 w-9" title="Auto-layout">
            <Layout className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9" title="Undo">
            <Undo2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9" title="Redo">
            <Redo2 className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-1 ml-auto">
          <Button variant="ghost" size="icon" className="h-9 w-9" title="Zoom out">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-xs text-muted-foreground w-12 text-center">100%</span>
          <Button variant="ghost" size="icon" className="h-9 w-9" title="Zoom in">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9" title="Grid">
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9" title="Minimap">
            <Minimize2 className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <div className="flex-1 flex min-h-0">
        {/* Canvas area */}
        <main className="flex-1 relative overflow-hidden bg-muted/20">
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="rounded-lg border-2 border-dashed border-border bg-card p-12 text-center max-w-md">
              <p className="text-muted-foreground mb-4">
                Infinite canvas for nodes and edges. Board ID: {boardId ?? 'new'}
              </p>
              <Button asChild variant="outline">
                <Link to="/dashboard">Back to dashboard</Link>
              </Button>
            </div>
          </div>
        </main>

        {/* Node types palette */}
        <aside className="w-48 border-l border-border bg-card p-2 shrink-0 hidden lg:block">
          <p className="text-xs font-medium text-muted-foreground mb-2 px-2">Node types</p>
          <ul className="space-y-1">
            {nodeTypes.map((n) => (
              <li key={n.type}>
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                  {n.label}
                </Button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Inspector / Node detail + AI panel */}
        <aside className="w-80 border-l border-border bg-card flex flex-col shrink-0 hidden xl:flex">
          <Tabs defaultValue="inspector" className="flex-1 flex flex-col min-h-0">
            <TabsList className="w-full justify-start rounded-none border-b border-border h-10 px-2 bg-transparent">
              <TabsTrigger value="inspector" className="text-xs">Inspector</TabsTrigger>
              <TabsTrigger value="ai" className="text-xs gap-1">
                <Sparkles className="h-3 w-3" />
                AI Agent
              </TabsTrigger>
            </TabsList>
            <TabsContent value="inspector" className="flex-1 overflow-auto p-4 mt-0">
              <p className="text-sm text-muted-foreground">Select a node to edit.</p>
            </TabsContent>
            <TabsContent value="ai" className="flex-1 overflow-auto p-4 mt-0">
              <p className="text-sm text-muted-foreground mb-4">Suggestions and action cards will appear here.</p>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">AI summary</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Summarize, expand, suggest links, or generate next steps.
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </aside>
      </div>

      {/* Bottom bar: collaboration + timeline */}
      <footer className="flex items-center justify-between border-t border-border bg-card px-4 py-2 shrink-0">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarFallback className="text-xs">U</AvatarFallback>
          </Avatar>
          <Button variant="ghost" size="sm" className="h-8 gap-1">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <Button variant="ghost" size="sm" className="h-8 gap-1">
            <MessageSquare className="h-4 w-4" />
            Comments
          </Button>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          Version history · Branch controls
        </div>
      </footer>
    </div>
  )
}
