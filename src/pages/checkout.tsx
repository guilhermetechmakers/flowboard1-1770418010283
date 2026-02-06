import { CreditCard, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

const plans = [
  { id: 'monthly', name: 'Monthly', price: 12, period: '/month' },
  { id: 'annual', name: 'Annual', price: 120, period: '/year', save: 'Save 17%' },
]

export function CheckoutPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in p-4">
      <div>
        <h1 className="text-h2 font-semibold text-foreground">Checkout</h1>
        <p className="mt-1 text-muted-foreground">Subscription purchase and upgrade</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Plan</CardTitle>
          <CardDescription>Select monthly or annual billing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            {plans.map((p) => (
              <Card
                key={p.id}
                className={cn(
                  'flex-1 cursor-pointer transition-all border-2',
                  p.id === 'annual' ? 'border-primary' : 'border-border'
                )}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{p.name}</CardTitle>
                  <p className="text-2xl font-semibold">
                    ${p.price}
                    <span className="text-sm font-normal text-muted-foreground">{p.period}</span>
                  </p>
                  {p.save && (
                    <p className="text-xs text-primary font-medium">{p.save}</p>
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Payment
          </CardTitle>
          <CardDescription>Card, billing address, coupon</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="card">Card number</Label>
            <Input id="card" placeholder="4242 4242 4242 4242" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="exp">Expiry</Label>
              <Input id="exp" placeholder="MM/YY" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="123" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="coupon">Coupon</Label>
            <Input id="coupon" placeholder="Optional" />
          </div>
          <Button className="w-full">
            <Check className="mr-2 h-4 w-4" />
            Confirm and pay
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
