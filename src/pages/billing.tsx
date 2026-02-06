import { Download, CreditCard, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const mockTransactions = [
  { id: '1', date: '2025-02-01', amount: '$12.00', status: 'paid', invoice: '#' },
  { id: '2', date: '2025-01-01', amount: '$12.00', status: 'paid', invoice: '#' },
]

export function BillingPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-h2 font-semibold text-foreground">Billing & transactions</h1>
        <p className="mt-1 text-muted-foreground">Invoices and AI credit tracking</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            AI credits
          </CardTitle>
          <CardDescription>Usage breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-semibold">1,240 / 5,000</p>
          <p className="text-sm text-muted-foreground mt-1">Credits used this month</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Transactions
              </CardTitle>
              <CardDescription>Date, amount, status, invoice link</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Download CSV
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 font-medium">Date</th>
                  <th className="text-left p-3 font-medium">Amount</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium">Invoice</th>
                </tr>
              </thead>
              <tbody>
                {mockTransactions.map((t) => (
                  <tr key={t.id} className="border-t border-border">
                    <td className="p-3">{t.date}</td>
                    <td className="p-3">{t.amount}</td>
                    <td className="p-3">
                      <Badge variant="success">{t.status}</Badge>
                    </td>
                    <td className="p-3">
                      <Button variant="link" size="sm" className="h-auto p-0">View</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
