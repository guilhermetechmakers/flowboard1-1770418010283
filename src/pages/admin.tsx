import { Users, CreditCard, Shield, Flag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'

const mockUsers = [
  { id: '1', name: 'Jane Doe', email: 'jane@example.com', role: 'Admin', status: 'active' },
  { id: '2', name: 'John Smith', email: 'john@example.com', role: 'Editor', status: 'active' },
]

export function AdminPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-h2 font-semibold text-foreground">Admin dashboard</h1>
        <p className="mt-1 text-muted-foreground">Org controls, billing, compliance, analytics</p>
      </div>

      {/* Org overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">12</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Boards</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">8</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">AI credits used</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">1,240</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="users" className="w-full">
        <TabsList className="grid w-full max-w-2xl grid-cols-4">
          <TabsTrigger value="users" className="gap-2">
            <Users className="h-4 w-4" />
            Users
          </TabsTrigger>
          <TabsTrigger value="billing" className="gap-2">
            <CreditCard className="h-4 w-4" />
            Billing
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2">
            <Shield className="h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="flags" className="gap-2">
            <Flag className="h-4 w-4" />
            Feature flags
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="mt-6">
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>User management</CardTitle>
              <CardDescription>Invite, roles, deactivate</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="mb-4">Invite user</Button>
              <div className="rounded-md border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-medium">Name</th>
                      <th className="text-left p-3 font-medium">Email</th>
                      <th className="text-left p-3 font-medium">Role</th>
                      <th className="text-left p-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockUsers.map((u) => (
                      <tr key={u.id} className="border-t border-border">
                        <td className="p-3">{u.name}</td>
                        <td className="p-3 text-muted-foreground">{u.email}</td>
                        <td className="p-3">{u.role}</td>
                        <td className="p-3">
                          <Badge variant="success">{u.status}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="mt-6">
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>Billing & plans</CardTitle>
              <CardDescription>Invoices, upgrade</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <a href="/dashboard/checkout">Upgrade to Pro</a>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-6">
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>Security & audit logs</CardTitle>
              <CardDescription>Download audit logs for compliance</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline">Download audit log</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="flags" className="mt-6">
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>Feature flags</CardTitle>
              <CardDescription>Toggle AI features and integrations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">No feature flags configured.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
