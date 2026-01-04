import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  calculateProtein,
  getActivityLevelLabel,
  getGoalLabel,
  lbsToKg,
  type ActivityLevel,
  type FitnessGoal,
  type ProteinResult,
  type UserMetrics,
} from "@/lib/proteinCalculator";
import { Check, Info } from "lucide-react";

type UnitSystem = "metric" | "imperial";

export default function Calculator() {
  const [unitSystem, setUnitSystem] = useState<UnitSystem>("metric");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>("moderate");
  const [fitnessGoal, setFitnessGoal] = useState<FitnessGoal>("maintain");
  const [result, setResult] = useState<ProteinResult | null>(null);

  const handleCalculate = () => {
    if (!weight || !age) return;

    const weightNum = parseFloat(weight);
    const weightKg = unitSystem === "imperial" ? lbsToKg(weightNum) : weightNum;

    const metrics: UserMetrics = {
      weight: weightKg,
      height: 170, // Not used in current formula but kept for future
      age: parseInt(age),
      gender,
      activityLevel,
      fitnessGoal,
    };

    const proteinResult = calculateProtein(metrics);
    setResult(proteinResult);
  };

  const isFormValid = weight && age;

  return (
    <PageContainer>
      <PageHeader
        title="Protein Calculator"
        subtitle="Get your personalized recommendation"
      />

      <div className="px-4 space-y-4">
        {/* Unit Toggle */}
        <Card>
          <CardContent className="pt-4">
            <div className="flex gap-2">
              <Button
                variant={unitSystem === "metric" ? "default" : "outline"}
                size="sm"
                className="flex-1"
                onClick={() => setUnitSystem("metric")}
              >
                Metric (kg)
              </Button>
              <Button
                variant={unitSystem === "imperial" ? "default" : "outline"}
                size="sm"
                className="flex-1"
                onClick={() => setUnitSystem("imperial")}
              >
                Imperial (lbs)
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Personal Info */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="weight">
                  Weight ({unitSystem === "metric" ? "kg" : "lbs"})
                </Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder={unitSystem === "metric" ? "70" : "154"}
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="font-mono"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="25"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="font-mono"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Gender</Label>
              <RadioGroup
                value={gender}
                onValueChange={(v) => setGender(v as "male" | "female")}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male" className="font-normal cursor-pointer">
                    Male
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female" className="font-normal cursor-pointer">
                    Female
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        {/* Activity & Goals */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Activity & Goals</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Activity Level</Label>
              <Select value={activityLevel} onValueChange={(v) => setActivityLevel(v as ActivityLevel)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(["sedentary", "light", "moderate", "active", "very_active"] as ActivityLevel[]).map(
                    (level) => (
                      <SelectItem key={level} value={level}>
                        {getActivityLevelLabel(level)}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Fitness Goal</Label>
              <Select value={fitnessGoal} onValueChange={(v) => setFitnessGoal(v as FitnessGoal)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(["lose_weight", "maintain", "build_muscle", "athletic_performance"] as FitnessGoal[]).map(
                    (goal) => (
                      <SelectItem key={goal} value={goal}>
                        {getGoalLabel(goal)}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Calculate Button */}
        <Button
          onClick={handleCalculate}
          disabled={!isFormValid}
          className="w-full h-12 text-base"
        >
          Calculate My Protein Needs
        </Button>

        {/* Results */}
        {result && (
          <Card className="border-primary bg-primary/5 animate-fade-in">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                Your Daily Protein Goal
              </CardTitle>
              <CardDescription>
                Based on your {unitSystem === "metric" ? weight + "kg" : weight + "lbs"} body weight
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center py-4">
                <p className="text-5xl font-bold font-mono text-primary">
                  {result.recommendedProtein}g
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Recommended daily intake
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 rounded-lg bg-background">
                  <p className="text-2xl font-bold font-mono">
                    {result.minProtein}-{result.maxProtein}g
                  </p>
                  <p className="text-xs text-muted-foreground">Target range</p>
                </div>
                <div className="p-3 rounded-lg bg-background">
                  <p className="text-2xl font-bold font-mono">
                    {result.proteinPerMeal}g
                  </p>
                  <p className="text-xs text-muted-foreground">Per meal (4 meals)</p>
                </div>
              </div>

              <div className="flex items-start gap-2 p-3 rounded-lg bg-secondary/10 text-secondary">
                <Info className="h-4 w-4 mt-0.5 shrink-0" />
                <p className="text-xs">
                  This recommendation is based on your activity level ({getActivityLevelLabel(activityLevel).split(" (")[0]}) 
                  and goal ({getGoalLabel(fitnessGoal)}).
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </PageContainer>
  );
}