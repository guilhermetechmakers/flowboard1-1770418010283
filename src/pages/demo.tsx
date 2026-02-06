import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function DemoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md animate-fade-in">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Request a demo</CardTitle>
          <CardDescription>
            Tell us about your team and we&apos;ll get in touch to schedule a walkthrough.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="demo-name">Name</Label>
            <Input id="demo-name" placeholder="Your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="demo-email">Work email</Label>
            <Input id="demo-email" type="email" placeholder="you@company.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="demo-org">Organization</Label>
            <Input id="demo-org" placeholder="Company or team name" />
          </div>
          <Button className="w-full">Request demo</Button>
          <p className="text-center text-sm text-muted-foreground">
            <Link to="/" className="text-primary hover:underline">Back to home</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
