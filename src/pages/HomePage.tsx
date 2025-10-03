import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MOCK_CLAIMS, MOCK_POLICIES } from "@/lib/mock-data";
import { Claim, Policy, PolicyStatus } from "@shared/types";
import { DollarSign, FileText, ShieldHalf, Users } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
export function HomePage() {
  const totalPremium = MOCK_POLICIES.reduce((sum, p) => sum + p.premium, 0);
  const activePolicies = MOCK_POLICIES.filter(p => p.status === PolicyStatus.Active).length;
  const openClaims = MOCK_CLAIMS.filter(c => c.status === "Open").length;
  const chartData = [
    { name: 'Motor', policies: MOCK_POLICIES.filter(p => p.insuranceClass === 'Motor').length },
    { name: 'Fire', policies: MOCK_POLICIES.filter(p => p.insuranceClass === 'Fire').length },
    { name: 'Marine', policies: MOCK_POLICIES.filter(p => p.insuranceClass === 'Marine Cargo').length },
    { name: 'EC', policies: MOCK_POLICIES.filter(p => p.insuranceClass === 'Employee Compensation').length },
    { name: 'Travel', policies: MOCK_POLICIES.filter(p => p.insuranceClass === 'Travel').length },
    { name: 'Medical', policies: MOCK_POLICIES.filter(p => p.insuranceClass === 'Medical').length },
  ];
  const recentPolicies = [...MOCK_POLICIES].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()).slice(0, 5);
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Premium" value={`$${(totalPremium / 1000).toFixed(1)}k`} icon={DollarSign} description="Total premium collected" />
        <StatCard title="Active Policies" value={activePolicies.toString()} icon={FileText} description="Currently active policies" />
        <StatCard title="Open Claims" value={openClaims.toString()} icon={ShieldHalf} description="Claims needing attention" />
        <StatCard title="Total Clients" value="5" icon={Users} description="Managed client accounts" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Policies by Class</CardTitle>
            <CardDescription>Distribution of active insurance policies.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Bar dataKey="policies" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Policies</CardTitle>
            <CardDescription>The most recently issued policies.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead className="text-right">Premium</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentPolicies.map((policy: Policy) => (
                  <TableRow key={policy.id}>
                    <TableCell>
                      <div className="font-medium">{policy.clientName}</div>
                      <div className="text-sm text-muted-foreground">{format(new Date(policy.startDate), 'MMM d, yyyy')}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{policy.insuranceClass}</Badge>
                    </TableCell>
                    <TableCell className="text-right">${policy.premium.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}