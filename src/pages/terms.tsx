import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-fade-in p-4">
      <div>
        <h1 className="text-h2 font-semibold text-foreground">Terms of Service</h1>
        <p className="mt-1 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Agreement</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
          <p>
            By using FlowBoard you agree to these terms. If you are using the service on behalf of an organization, you represent that you have authority to bind that organization.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Acceptable use</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
          <p>
            You may not use the service for illegal purposes, to harm others, or to violate others&apos; rights. We may suspend or terminate accounts that violate these terms.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Liability</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
          <p>
            The service is provided &quot;as is.&quot; Our liability is limited to the amount you paid in the twelve months preceding a claim. We are not liable for indirect or consequential damages.
          </p>
        </CardContent>
      </Card>

      <p className="text-sm text-muted-foreground">
        <Link to="/" className="text-primary hover:underline">Back to home</Link>
      </p>
    </div>
  )
}
