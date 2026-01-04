import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/layout/PageHeader";

export default function Tracking() {
  const dailyGoal = 120; // Will come from user profile later
  const currentIntake = 0;
  const progress = dailyGoal > 0 ? Math.round((currentIntake / dailyGoal) * 100) : 0;

  return (
    <PageContainer>
      <PageHeader title="Tracking" subtitle="Log your daily protein intake" />

      <div className="px-4 space-y-4">
        {/* Progress Ring */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-center">
              <div className="relative h-32 w-32">
                <svg className="h-32 w-32 -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-muted"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - progress / 100)}`}
                    strokeLinecap="round"
                    className="text-primary transition-all duration-500"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold font-mono">{currentIntake}g</span>
                  <span className="text-xs text-muted-foreground">of {dailyGoal}g</span>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              {progress === 0
                ? "Start logging your meals to track progress"
                : `${progress}% of daily goal reached`}
            </p>
          </CardContent>
        </Card>

        {/* Search & Add */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search foods..." className="pl-9" />
          </div>
          <Button size="icon" className="shrink-0">
            <Plus className="h-5 w-5" />
          </Button>
        </div>

        {/* Today's Meals */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Today's Meals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                <Plus className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium">No meals logged yet</p>
              <p className="text-xs text-muted-foreground mt-1">
                Tap the + button to add your first meal
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Add Favorites */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Quick Add</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "Chicken Breast", protein: 31 },
                { name: "Greek Yogurt", protein: 17 },
                { name: "Eggs (2)", protein: 12 },
                { name: "Protein Shake", protein: 25 },
              ].map((food) => (
                <Button
                  key={food.name}
                  variant="outline"
                  className="h-auto py-3 flex-col items-start"
                >
                  <span className="text-sm font-medium">{food.name}</span>
                  <span className="text-xs text-muted-foreground font-mono">
                    {food.protein}g protein
                  </span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}