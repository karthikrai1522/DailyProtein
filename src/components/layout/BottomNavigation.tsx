import { Home, Calculator, Target, Utensils, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Calculator, label: "Calculate", path: "/calculator" },
  { icon: Target, label: "Track", path: "/tracking" },
  { icon: Utensils, label: "Foods", path: "/foods" },
  { icon: User, label: "Profile", path: "/profile" },
];

export const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg safe-area-inset-bottom">
      <div className="flex justify-around items-center h-16 max-w-screen-xl mx-auto px-2">
        {navItems.map(({ icon: Icon, label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center flex-1 h-full px-2 transition-colors",
                "hover:bg-muted/50 rounded-lg",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground"
              )
            }
          >
            {({ isActive }) => (
              <>
                <Icon className={cn("h-6 w-6 mb-1", isActive && "stroke-[2.5px]")} />
                <span className={cn("text-xs font-medium", isActive && "font-semibold")}>
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
