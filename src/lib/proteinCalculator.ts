export type ActivityLevel = "sedentary" | "light" | "moderate" | "active" | "very_active";
export type FitnessGoal = "lose_weight" | "maintain" | "build_muscle" | "athletic_performance";

export interface UserMetrics {
  weight: number; // in kg
  height: number; // in cm
  age: number;
  gender: "male" | "female";
  activityLevel: ActivityLevel;
  fitnessGoal: FitnessGoal;
}

// Activity multipliers (grams per kg body weight)
const activityMultipliers: Record<ActivityLevel, { min: number; max: number }> = {
  sedentary: { min: 0.8, max: 1.0 },
  light: { min: 1.0, max: 1.2 },
  moderate: { min: 1.2, max: 1.6 },
  active: { min: 1.6, max: 2.0 },
  very_active: { min: 2.0, max: 2.4 },
};

// Goal adjustments
const goalAdjustments: Record<FitnessGoal, number> = {
  lose_weight: 0.1, // +0.1g/kg for muscle preservation
  maintain: 0,
  build_muscle: 0.2, // +0.2g/kg for muscle synthesis
  athletic_performance: 0.15,
};

export interface ProteinResult {
  minProtein: number; // grams
  maxProtein: number; // grams
  recommendedProtein: number; // grams (midpoint)
  proteinPerMeal: number; // assuming 4 meals
}

export function calculateProtein(metrics: UserMetrics): ProteinResult {
  const { weight, activityLevel, fitnessGoal } = metrics;

  const baseMultiplier = activityMultipliers[activityLevel];
  const goalAdjustment = goalAdjustments[fitnessGoal];

  const minProtein = Math.round(weight * (baseMultiplier.min + goalAdjustment));
  const maxProtein = Math.round(weight * (baseMultiplier.max + goalAdjustment));
  const recommendedProtein = Math.round((minProtein + maxProtein) / 2);
  const proteinPerMeal = Math.round(recommendedProtein / 4);

  return {
    minProtein,
    maxProtein,
    recommendedProtein,
    proteinPerMeal,
  };
}

export function getActivityLevelLabel(level: ActivityLevel): string {
  const labels: Record<ActivityLevel, string> = {
    sedentary: "Sedentary (little/no exercise)",
    light: "Light (1-2 days/week)",
    moderate: "Moderate (3-5 days/week)",
    active: "Active (6-7 days/week)",
    very_active: "Very Active (2x/day or physical job)",
  };
  return labels[level];
}

export function getGoalLabel(goal: FitnessGoal): string {
  const labels: Record<FitnessGoal, string> = {
    lose_weight: "Lose Weight",
    maintain: "Maintain Weight",
    build_muscle: "Build Muscle",
    athletic_performance: "Athletic Performance",
  };
  return labels[goal];
}

// Convert pounds to kg
export function lbsToKg(lbs: number): number {
  return lbs * 0.453592;
}

// Convert kg to pounds
export function kgToLbs(kg: number): number {
  return kg / 0.453592;
}

// Convert feet/inches to cm
export function ftInToCm(feet: number, inches: number): number {
  return (feet * 12 + inches) * 2.54;
}

// Convert cm to feet/inches
export function cmToFtIn(cm: number): { feet: number; inches: number } {
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return { feet, inches };
}