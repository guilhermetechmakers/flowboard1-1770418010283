import * as React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'
import { Loader2, Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const requestSchema = z.object({
  email: z.string().email('Invalid email'),
})

const resetSchema = z
  .object({
    password: z
      .string()
  .min(8, 'At least 8 characters')
  .regex(/[A-Z]/, 'At least one uppercase letter')
  .regex(/[a-z]/, 'At least one lowercase letter')
  .regex(/[0-9]/, 'At least one number'),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Passwords do not match',
    path: ['confirm'],
  })

type RequestForm = z.infer<typeof requestSchema>
type ResetForm = z.infer<typeof resetSchema>

export function PasswordResetPage() {
  const [step, setStep] = React.useState<'request' | 'reset' | 'success'>('request')
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const requestForm = useForm<RequestForm>({
    resolver: zodResolver(requestSchema),
  })

  const resetForm = useForm<ResetForm>({
    resolver: zodResolver(resetSchema),
  })

  const onRequestSubmit = async (data: RequestForm) => {
    setIsSubmitting(true)
    try {
      await new Promise((r) => setTimeout(r, 800))
      toast.success('If an account exists, we sent a reset link to ' + data.email)
      setStep('reset')
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const onResetSubmit = async (_data: ResetForm) => {
    setIsSubmitting(true)
    try {
      await new Promise((r) => setTimeout(r, 600))
      toast.success('Password updated. You can sign in now.')
      setStep('success')
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (step === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md animate-fade-in">
          <CardHeader className="text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Password reset</CardTitle>
            <CardDescription>Your password has been updated. You can now sign in.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link to="/login">Continue to sign in</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (step === 'request') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md animate-fade-in">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">Reset password</CardTitle>
            <CardDescription>
              Enter your email and we&apos;ll send you a link to reset your password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={requestForm.handleSubmit(onRequestSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={cn(
                    requestForm.formState.errors.email && 'border-destructive focus-visible:ring-destructive'
                  )}
                  {...requestForm.register('email')}
                />
                {requestForm.formState.errors.email && (
                  <p className="text-sm text-destructive">
                    {requestForm.formState.errors.email.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send reset link'
                )}
              </Button>
            </form>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              <Link to="/login" className="text-primary hover:underline">Back to sign in</Link>
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md animate-fade-in">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">Set new password</CardTitle>
          <CardDescription>Enter your new password below</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={resetForm.handleSubmit(onResetSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">New password</Label>
              <Input
                id="password"
                type="password"
                autoComplete="new-password"
                className={cn(
                  resetForm.formState.errors.password && 'border-destructive focus-visible:ring-destructive'
                )}
                {...resetForm.register('password')}
              />
              {resetForm.formState.errors.password && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <X className="h-4 w-4 shrink-0" />
                  {resetForm.formState.errors.password.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm">Confirm password</Label>
              <Input
                id="confirm"
                type="password"
                autoComplete="new-password"
                className={cn(
                  resetForm.formState.errors.confirm && 'border-destructive focus-visible:ring-destructive'
                )}
                {...resetForm.register('confirm')}
              />
              {resetForm.formState.errors.confirm && (
                <p className="text-sm text-destructive">{resetForm.formState.errors.confirm.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                'Update password'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
