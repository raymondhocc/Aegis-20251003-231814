import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MOCK_POLICIES } from "@/lib/mock-data";
import { Policy, PolicyStatus } from "@shared/types";
import { PlusCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
const getStatusVariant = (status: PolicyStatus) => {
  switch (status) {
    case PolicyStatus.Active: return "default";
    case PolicyStatus.Pending: return "secondary";
    case PolicyStatus.Expired: return "outline";
    case PolicyStatus.Cancelled: return "destructive";
    default: return "secondary";
  }
};
export function PoliciesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Policies</h2>
          <p className="text-muted-foreground">Manage all insurance policies.</p>
        </div>
        <Button className="transition-all duration-200 ease-in-out hover:scale-105 active:scale-95">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Policy
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Policy Overview</CardTitle>
          <CardDescription>A list of all policies in the system.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Policy #</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Class</TableHead>
                <TableHead className="text-right">Premium</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_POLICIES.map((policy: Policy) => (
                <TableRow key={policy.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{policy.policyNumber}</TableCell>
                  <TableCell>{policy.clientName}</TableCell>
                  <TableCell>{policy.insuranceClass}</TableCell>
                  <TableCell className="text-right">${policy.premium.toFixed(2)}</TableCell>
                  <TableCell>{format(new Date(policy.startDate), 'MMM d, yyyy')}</TableCell>
                  <TableCell>{format(new Date(policy.endDate), 'MMM d, yyyy')}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(policy.status)} className={cn(policy.status === PolicyStatus.Active && "bg-green-500/20 text-green-700 dark:bg-green-500/10 dark:text-green-400 border-green-500/30")}>
                      {policy.status}
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