import { Link } from "react-router-dom";
import { Calculator, Target, TrendingUp, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/layout/PageHeader";

export default function Index() {
  return (
    <PageContainer>
      <PageHeader 
        title="DailyProtein" 
        subtitle="Track your protein, reach your goals"
      />

      <div className="px-4 space-y-6">
        {/* Hero Card */}
        <Card className="bg-primary text-primary-foreground border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Welcome! 👋</CardTitle>
            <CardDescription className="text-primary-foreground/80">
              Start by calculating your daily protein needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/calculator">
              <Button 
                variant="secondary" 
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Calculator className="mr-2 h-4 w-4" />
                Calculate Now
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Quick Stats Placeholder */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
              Today's Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold font-mono">0g</p>
                <p className="text-sm text-muted-foreground">of your goal</p>
              </div>
              <div className="h-16 w-16 rounded-full border-4 border-muted flex items-center justify-center">
                <span className="text-lg font-semibold text-muted-foreground">0%</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Set your protein goal to start tracking
            </p>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Link to="/tracking">
            <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer">
              <CardContent className="pt-4 pb-4 flex flex-col items-center text-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <p className="font-medium text-sm">Track Protein</p>
                <p className="text-xs text-muted-foreground">Log your meals</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/meals">
            <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer">
              <CardContent className="pt-4 pb-4 flex flex-col items-center text-center">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mb-2">
                  <Utensils className="h-5 w-5 text-accent" />
                </div>
                <p className="font-medium text-sm">Meal Ideas</p>
                <p className="text-xs text-muted-foreground">High-protein recipes</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Tips Section */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">💡 Quick Tip</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Distribute your protein intake across 4-5 meals for optimal absorption. 
              Aim for 20-40g per meal.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}