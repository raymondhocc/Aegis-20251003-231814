import { NavLink } from "react-router-dom";
import { Shield, LayoutDashboard, FileText, ShieldHalf, Users, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
const navItems = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/policies", label: "Policies", icon: FileText },
  { to: "/claims", label: "Claims", icon: ShieldHalf },
  { to: "/clients", label: "Clients", icon: Users },
];
export function Sidebar() {
  return (
    <aside className="w-16 bg-muted/40 border-r flex flex-col items-center py-4">
      <div className="p-2 rounded-lg bg-primary text-primary-foreground mb-8">
        <Shield className="h-7 w-7" />
      </div>
      <nav className="flex flex-col items-center gap-4 flex-1">
        <TooltipProvider delayDuration={0}>
          {navItems.map((item) => (
            <Tooltip key={item.to}>
              <TooltipTrigger asChild>
                <NavLink
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    cn(
                      "flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground",
                      isActive && "bg-primary/10 text-primary"
                    )
                  }
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.label}</span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side="right">{item.label}</TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </nav>
      <div className="mt-auto">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </aside>
  );
}