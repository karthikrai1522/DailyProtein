import { PageLayout } from "@/components/layout/PageLayout";
import { Card } from "@/components/ui/card";

const Foods = () => {
  return (
    <PageLayout title="Food Database">
      <div className="container max-w-2xl mx-auto p-4 space-y-6">
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">High-Protein Foods</h2>
          <p className="text-muted-foreground">
            Browse our database of protein-rich foods.
          </p>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Foods;
