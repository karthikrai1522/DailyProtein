import { PageLayout } from "@/components/layout/PageLayout";
import { Card } from "@/components/ui/card";

const Tracking = () => {
  return (
    <PageLayout title="Track Protein">
      <div className="container max-w-2xl mx-auto p-4 space-y-6">
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Daily Progress</h2>
          <p className="text-muted-foreground">
            Track your protein intake throughout the day.
          </p>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Tracking;
