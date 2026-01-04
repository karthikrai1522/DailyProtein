import { ChevronRight, History, Moon, Settings, Target, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <PageContainer>
      <PageHeader title="Profile" subtitle="Manage your settings and goals" />

      <div className="px-4 space-y-4">
        {/* User Info */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="font-semibold">Guest User</h2>
                <p className="text-sm text-muted-foreground">
                  Sign in to save your progress
                </p>
              </div>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Current Goals */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
              Current Goals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <span className="text-sm">Daily Protein Target</span>
              <span className="font-mono font-medium">Not set</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm">Activity Level</span>
              <span className="text-sm text-muted-foreground">Not set</span>
            </div>
            <Link to="/calculator">
              <Button variant="outline" className="w-full mt-2">
                Update Goals
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Quick Settings */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <Moon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Dark Mode</span>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between py-3 border-t">
              <div className="flex items-center gap-3">
                <span className="text-sm">Unit System</span>
              </div>
              <span className="text-sm text-muted-foreground">Metric</span>
            </div>
            <div className="flex items-center justify-between py-3 border-t">
              <div className="flex items-center gap-3">
                <span className="text-sm">Notifications</span>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* History */}
        <Card className="cursor-pointer hover:border-primary/50 transition-colors">
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <History className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Tracking History</p>
                  <p className="text-xs text-muted-foreground">View your past logs</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        {/* App Info */}
        <div className="text-center py-4">
          <p className="text-xs text-muted-foreground">DailyProtein v1.0</p>
          <p className="text-xs text-muted-foreground mt-1">
            Track your protein, reach your goals
          </p>
        </div>
      </div>
    </PageContainer>
  );
}