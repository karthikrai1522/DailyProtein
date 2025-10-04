import { PageLayout } from "@/components/layout/PageLayout";
import { Card } from "@/components/ui/card";

const Calculator = () => {
  return (
    <PageLayout title="Protein Calculator">
      <div className="container max-w-2xl mx-auto p-4 space-y-6">
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Daily Protein</h2>
          <p className="text-muted-foreground">
            Enter your information to get a personalized protein recommendation.
          </p>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Calculator;
