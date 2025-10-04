import { PageLayout } from "@/components/layout/PageLayout";
import { Card } from "@/components/ui/card";

const Profile = () => {
  return (
    <PageLayout title="Profile">
      <div className="container max-w-2xl mx-auto p-4 space-y-6">
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
          <p className="text-muted-foreground">
            Manage your personal information and preferences.
          </p>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Profile;
