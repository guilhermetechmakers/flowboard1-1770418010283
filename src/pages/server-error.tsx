import { Link } from 'react-router-dom'
import { RefreshCw, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function ServerErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 animate-fade-in">
      <Card className="w-full max-w-md text-center">
        <CardContent className="pt-8 pb-8">
          <p className="text-6xl font-bold text-destructive">500</p>
          <h1 className="mt-4 text-h3 font-semibold text-foreground">Something went wrong</h1>
          <p className="mt-2 text-muted-foreground">
            We&apos;re sorry. An error occurred on our side. Please try again.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button onClick={() => window.location.reload()} className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Retry
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link to="/help">
                <HelpCircle className="h-4 w-4" />
                Contact support
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
