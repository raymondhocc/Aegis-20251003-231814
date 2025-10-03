import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MOCK_CLAIMS } from "@/lib/mock-data";
import { Claim, ClaimStatus } from "@shared/types";
import { PlusCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
const getStatusVariant = (status: ClaimStatus) => {
  switch (status) {
    case ClaimStatus.Open: return "secondary";
    case ClaimStatus.Approved: return "default";
    case ClaimStatus.Rejected: return "destructive";
    case ClaimStatus.Closed: return "outline";
    default: return "secondary";
  }
};
export function ClaimsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Claims</h2>
          <p className="text-muted-foreground">Manage all insurance claims.</p>
        </div>
        <Button className="transition-all duration-200 ease-in-out hover:scale-105 active:scale-95">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Claim
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Claims Overview</CardTitle>
          <CardDescription>A list of all claims in the system.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Claim #</TableHead>
                <TableHead>Policy #</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Claim Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_CLAIMS.map((claim: Claim) => (
                <TableRow key={claim.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{claim.claimNumber}</TableCell>
                  <TableCell>{claim.policyNumber}</TableCell>
                  <TableCell>{claim.clientName}</TableCell>
                  <TableCell>{format(new Date(claim.claimDate), 'MMM d, yyyy')}</TableCell>
                  <TableCell className="text-right">${claim.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(claim.status)} className={cn(claim.status === ClaimStatus.Approved && "bg-green-500/20 text-green-700 dark:bg-green-500/10 dark:text-green-400 border-green-500/30")}>
                      {claim.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}