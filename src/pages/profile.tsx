import { User, Plug, Bell, Trash2, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { useAuth } from '@/contexts/auth-context'
import { Separator } from '@/components/ui/separator'

export function ProfilePage() {
  const { user } = useAuth()

  return (
    <div className="space-y-6 animate-fade-in max-w-2xl">
      <div>
        <h1 className="text-h2 font-semibold text-foreground">Profile</h1>
        <p className="mt-1 text-muted-foreground">Account management and connected apps</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Profile summary
          </CardTitle>
          <CardDescription>Your account details</CardDescription>
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
          <Button>Save changes</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plug className="h-5 w-5" />
            Connected apps
          </CardTitle>
          <CardDescription>Manage linked accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">No connected apps.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Preferences
          </CardTitle>
          <CardDescription>Theme, notifications</CardDescription>
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

      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <Trash2 className="h-5 w-5" />
            Danger zone
          </CardTitle>
          <CardDescription>Account deletion, export data</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Export my data
          </Button>
          <Separator />
          <Button variant="destructive" size="sm">Delete account</Button>
        </CardContent>
      </Card>
    </div>
  )
}
