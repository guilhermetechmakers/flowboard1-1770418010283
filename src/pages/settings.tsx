import { User, Building2, Sparkles, Plug, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAuth } from '@/contexts/auth-context'

export function SettingsPage() {
  const { user } = useAuth()

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-h2 font-semibold text-foreground">Settings</h1>
        <p className="mt-1 text-muted-foreground">User and organization settings</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full max-w-2xl grid-cols-2 lg:grid-cols-5">
          <TabsTrigger value="profile" className="gap-2">
            <User className="h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="organization" className="gap-2">
            <Building2 className="h-4 w-4" />
            Organization
          </TabsTrigger>
          <TabsTrigger value="ai" className="gap-2">
            <Sparkles className="h-4 w-4" />
            AI
          </TabsTrigger>
          <TabsTrigger value="integrations" className="gap-2">
            <Plug className="h-4 w-4" />
            Integrations
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6">
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Name, avatar, email, password, 2FA</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={user?.avatarUrl} alt={user?.name} />
                  <AvatarFallback className="text-lg">{user?.name?.slice(0, 2).toUpperCase() ?? 'U'}</AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm">Change avatar</Button>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue={user?.name ?? ''} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue={user?.email ?? ''} disabled className="opacity-70" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">New password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <Button>Save changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="organization" className="mt-6">
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>Organization</CardTitle>
              <CardDescription>Members, roles, SSO, billing</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Organization settings placeholder.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai" className="mt-6">
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>AI settings</CardTitle>
              <CardDescription>Model selection, credit usage, privacy toggles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Use AI suggestions</Label>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label>Privacy: do not send content to AI</Label>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="mt-6">
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>Google Drive, Notion, Slack, GitHub</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">No integrations connected.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Email, in-app, webhooks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Email notifications</Label>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label>In-app notifications</Label>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
