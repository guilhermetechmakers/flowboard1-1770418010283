import { Link } from 'react-router-dom'
import { Search, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 animate-fade-in">
      <Card className="w-full max-w-md text-center">
        <CardContent className="pt-8 pb-8">
          <p className="text-6xl font-bold text-muted-foreground">404</p>
          <h1 className="mt-4 text-h3 font-semibold text-foreground">Page not found</h1>
          <p className="mt-2 text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="gap-2">
              <Link to="/">
                <Home className="h-4 w-4" />
                Go home
              </Link>
            </Button>
            <div className="relative max-w-xs mx-auto sm:mx-0 sm:max-w-none">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-9" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
