import { PageLayout } from "@/components/layout/PageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, Apple } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <PageLayout>
      <div className="container max-w-2xl mx-auto p-4 space-y-6">
        {/* Welcome Section */}
        <div className="text-center py-8">
          <div className="flex justify-center mb-4">
            <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-2xl shadow-lg">
              <Apple className="h-10 w-10 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome to DailyProtein</h1>
          <p className="text-muted-foreground">
            Track your protein intake and reach your fitness goals
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4">
          <Link to="/calculator">
            <Card className="p-6 hover:shadow-card-hover transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Calculate Your Needs</h3>
                  <p className="text-sm text-muted-foreground">
                    Get personalized protein recommendations
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/tracking">
            <Card className="p-6 hover:shadow-card-hover transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Track Your Progress</h3>
                  <p className="text-sm text-muted-foreground">
                    Log your daily protein intake
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* Daily Progress Placeholder */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Today's Progress</h3>
          <div className="text-center py-8 text-muted-foreground">
            <p>Start tracking to see your progress here</p>
            <Button asChild className="mt-4">
              <Link to="/calculator">Get Started</Link>
            </Button>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Index;
