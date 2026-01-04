import { Clock, Flame, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mealSuggestions = {
  breakfast: [
    { name: "Greek Yogurt Parfait", protein: 25, time: 5, difficulty: "Easy" },
    { name: "Egg White Omelette", protein: 28, time: 15, difficulty: "Easy" },
    { name: "Protein Pancakes", protein: 32, time: 20, difficulty: "Medium" },
  ],
  lunch: [
    { name: "Grilled Chicken Salad", protein: 42, time: 15, difficulty: "Easy" },
    { name: "Turkey Wrap", protein: 35, time: 10, difficulty: "Easy" },
    { name: "Tuna Bowl", protein: 38, time: 15, difficulty: "Medium" },
  ],
  dinner: [
    { name: "Salmon with Quinoa", protein: 45, time: 30, difficulty: "Medium" },
    { name: "Lean Beef Stir-fry", protein: 48, time: 25, difficulty: "Medium" },
    { name: "Grilled Chicken Breast", protein: 52, time: 20, difficulty: "Easy" },
  ],
  snacks: [
    { name: "Protein Shake", protein: 25, time: 2, difficulty: "Easy" },
    { name: "Cottage Cheese", protein: 14, time: 1, difficulty: "Easy" },
    { name: "Hard-boiled Eggs", protein: 12, time: 10, difficulty: "Easy" },
  ],
};

function MealCard({ meal }: { meal: typeof mealSuggestions.breakfast[0] }) {
  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardContent className="pt-4 pb-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="font-medium text-sm">{meal.name}</h3>
            <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Flame className="h-3 w-3 text-accent" />
                {meal.protein}g protein
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {meal.time} min
              </span>
            </div>
            <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-muted">
              {meal.difficulty}
            </span>
          </div>
          <Button variant="ghost" size="icon" className="shrink-0 h-8 w-8">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Meals() {
  return (
    <PageContainer>
      <PageHeader title="Meal Ideas" subtitle="High-protein recipes for every meal" />

      <div className="px-4">
        <Tabs defaultValue="breakfast" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-4">
            <TabsTrigger value="breakfast" className="text-xs">Breakfast</TabsTrigger>
            <TabsTrigger value="lunch" className="text-xs">Lunch</TabsTrigger>
            <TabsTrigger value="dinner" className="text-xs">Dinner</TabsTrigger>
            <TabsTrigger value="snacks" className="text-xs">Snacks</TabsTrigger>
          </TabsList>

          {Object.entries(mealSuggestions).map(([category, meals]) => (
            <TabsContent key={category} value={category} className="space-y-3 mt-0">
              {meals.map((meal) => (
                <MealCard key={meal.name} meal={meal} />
              ))}
            </TabsContent>
          ))}
        </Tabs>

        {/* High-Protein Foods Section */}
        <Card className="mt-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Top Protein Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { name: "Chicken Breast", protein: "31g", per: "100g" },
                { name: "Greek Yogurt", protein: "17g", per: "170g" },
                { name: "Salmon", protein: "25g", per: "100g" },
                { name: "Eggs", protein: "6g", per: "1 large" },
                { name: "Cottage Cheese", protein: "14g", per: "100g" },
              ].map((food) => (
                <div
                  key={food.name}
                  className="flex items-center justify-between py-2 border-b last:border-0"
                >
                  <span className="text-sm">{food.name}</span>
                  <span className="text-sm font-mono text-primary">
                    {food.protein} <span className="text-xs text-muted-foreground">/ {food.per}</span>
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}