export interface User {
  id: string
  email: string
  name: string
  avatarUrl?: string
  organizationId?: string
}

export interface Project {
  id: string
  name: string
  thumbnailUrl?: string
  lastActivityAt: string
  collaborators: { id: string; name: string; avatarUrl?: string }[]
}

export interface Board {
  id: string
  projectId: string
  name: string
  nodes: BoardNode[]
  edges: BoardEdge[]
}

export interface BoardNode {
  id: string
  type: NodeType
  title: string
  content?: string
  x: number
  y: number
  width?: number
  height?: number
  metadata?: Record<string, unknown>
}

export interface BoardEdge {
  id: string
  sourceId: string
  targetId: string
}

export type NodeType =
  | 'text'
  | 'research_link'
  | 'file'
  | 'image'
  | 'task'
  | 'table'
  | 'code'
  | 'note'

export interface ActivityItem {
  id: string
  type: 'comment' | 'ai_suggestion' | 'edit'
  message: string
  author?: string
  createdAt: string
}
