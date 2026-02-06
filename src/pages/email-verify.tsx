import * as React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, X, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

export function EmailVerifyPage() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const [status, setStatus] = React.useState<'loading' | 'success' | 'failure'>('loading')
  const [resending, setResending] = React.useState(false)

  React.useEffect(() => {
    if (!token) {
      setStatus('failure')
      return
    }
    const t = setTimeout(() => {
      setStatus('success')
    }, 1200)
    return () => clearTimeout(t)
  }, [token])

  const handleResend = async () => {
    setResending(true)
    try {
      await new Promise((r) => setTimeout(r, 800))
      toast.success('Verification email sent. Check your inbox.')
    } catch {
      toast.error('Failed to resend. Try again later.')
    } finally {
      setResending(false)
    }
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md animate-fade-in">
          <CardContent className="pt-8 pb-8 flex flex-col items-center gap-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="text-muted-foreground">Verifying your email...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (status === 'failure') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md animate-fade-in">
          <CardHeader className="text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
              <X className="h-6 w-6 text-destructive" />
            </div>
            <CardTitle>Verification failed</CardTitle>
            <CardDescription>
              The verification link is invalid or has expired. You can request a new one below.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={handleResend} className="w-full" disabled={resending}>
              {resending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Resend verification email'
              )}
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link to="/dashboard">Continue to dashboard</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md animate-fade-in">
        <CardHeader className="text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Check className="h-6 w-6 text-primary" />
          </div>
          <CardTitle>Email verified</CardTitle>
          <CardDescription>
            Your account is now verified. You can continue to the dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full">
            <Link to="/dashboard">Continue to dashboard</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
