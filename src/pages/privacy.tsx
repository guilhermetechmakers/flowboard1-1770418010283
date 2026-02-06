import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-fade-in p-4">
      <div>
        <h1 className="text-h2 font-semibold text-foreground">Privacy Policy</h1>
        <p className="mt-1 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Data collection</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
          <p>
            We collect information you provide when signing up (name, email, organization), usage data to improve the product, and content you create on boards when you use AI features (with your consent).
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Retention</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
          <p>
            Account data is retained until you delete your account. Board content is retained according to your plan. We may retain anonymized analytics data.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your rights</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
          <p>
            You can access, correct, export, or delete your data from Settings. For requests or questions, contact our data protection officer.
          </p>
        </CardContent>
      </Card>

      <p className="text-sm text-muted-foreground">
        <Link to="/" className="text-primary hover:underline">Back to home</Link>
      </p>
    </div>
  )
}
