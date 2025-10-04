import { ReactNode } from "react";
import { Header } from "./Header";
import { BottomNavigation } from "./BottomNavigation";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
}

export const PageLayout = ({ children, title }: PageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title={title} />
      <main className="flex-1 pb-20 overflow-y-auto">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};
