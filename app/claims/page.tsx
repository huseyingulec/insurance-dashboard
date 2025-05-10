import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { generateClaims } from "@/lib/data"
import { ClaimsTable } from "@/components/claims-table"

export default function ClaimsPage() {
  const claims = generateClaims()

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Claims Management</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Claims</CardTitle>
          <CardDescription>View and manage all insurance claims</CardDescription>
        </CardHeader>
        <CardContent>
          <ClaimsTable claims={claims} />
        </CardContent>
      </Card>
    </div>
  )
}
