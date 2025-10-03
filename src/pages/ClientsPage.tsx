import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MOCK_CLIENTS } from "@/lib/mock-data";
import { Client } from "@shared/types";
import { PlusCircle, Mail, Phone, MapPin } from "lucide-react";
import { format } from "date-fns";
export function ClientsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Clients</h2>
          <p className="text-muted-foreground">Manage all client relationships.</p>
        </div>
        <Button className="transition-all duration-200 ease-in-out hover:scale-105 active:scale-95">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Client
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MOCK_CLIENTS.map((client: Client) => (
          <Card key={client.id} className="flex flex-col transition-all duration-200 ease-in-out hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <CardTitle>{client.name}</CardTitle>
              <CardDescription>Client since {format(new Date(client.joinDate), 'MMMM yyyy')}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-foreground">{client.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-foreground">{client.phone}</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <span className="text-foreground">{client.address}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}