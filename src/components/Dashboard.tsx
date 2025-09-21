import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { 
  Wallet, 
  TrendingUp, 
  Upload, 
  FileText, 
  HandHeart, 
  Activity,
  Shield,
  AlertCircle,
  CheckCircle2
} from "lucide-react";

interface DashboardProps {
  onNavigate: (section: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const healthScore = 742;
  const walletBalance = 1247;
  const recentRecords = 8;

  const getScoreColor = (score: number) => {
    if (score >= 700) return "text-green-600";
    if (score >= 500) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBadgeColor = (score: number) => {
    if (score >= 700) return "bg-green-100 text-green-800";
    if (score >= 500) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="rounded-full bg-green-100 p-2">
              <Activity className="h-6 w-6 text-green-600" />
            </div>
            <h1 className="text-3xl text-gray-900">Health Dashboard</h1>
          </div>
          <p className="text-gray-600">Welcome back! Here's your health and credit overview.</p>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Health Wallet */}
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Wallet className="h-5 w-5" />
                Health Wallet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl mb-2 text-green-900">{walletBalance}</div>
              <p className="text-sm text-green-700">Records stored securely</p>
              <div className="flex items-center gap-2 mt-3">
                <Shield className="h-4 w-4 text-green-600" />
                <span className="text-xs text-green-700">Blockchain verified</span>
              </div>
            </CardContent>
          </Card>

          {/* HealthScore */}
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <TrendingUp className="h-5 w-5" />
                HealthScore
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-3xl mb-2 ${getScoreColor(healthScore)}`}>
                {healthScore}
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Badge className={getScoreBadgeColor(healthScore)}>
                  {healthScore >= 700 ? "Excellent" : healthScore >= 500 ? "Good" : "Fair"}
                </Badge>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-blue-700 hover:text-blue-800 hover:bg-blue-200 p-0"
                onClick={() => onNavigate('healthscore')}
              >
                View details →
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-purple-800">
                <FileText className="h-5 w-5" />
                Recent Records
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl mb-2 text-purple-900">{recentRecords}</div>
              <p className="text-sm text-purple-700">This month</p>
              <div className="flex items-center gap-2 mt-3">
                <CheckCircle2 className="h-4 w-4 text-purple-600" />
                <span className="text-xs text-purple-700">All verified</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                className="w-full justify-start h-14 bg-green-600 hover:bg-green-700 text-white"
                onClick={() => onNavigate('upload')}
              >
                <Upload className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div>Upload Medical Receipt</div>
                  <div className="text-sm opacity-90">Add new health record</div>
                </div>
              </Button>

              <Button 
                variant="outline" 
                className="w-full justify-start h-14 border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => onNavigate('aid')}
              >
                <HandHeart className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div>Request Health Aid</div>
                  <div className="text-sm opacity-70">Access financial assistance</div>
                </div>
              </Button>

              <Button 
                variant="outline" 
                className="w-full justify-start h-14"
                onClick={() => onNavigate('records')}
              >
                <FileText className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div>View Records</div>
                  <div className="text-sm opacity-70">Browse your health history</div>
                </div>
              </Button>
            </CardContent>
          </Card>

          {/* Health Score Overview */}
          <Card>
            <CardHeader>
              <CardTitle>HealthScore Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Medical Expenses Tracking</span>
                  <span className="text-sm">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Prescription Adherence</span>
                  <span className="text-sm">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Trust Score</span>
                  <span className="text-sm">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>

              <Button 
                variant="ghost" 
                className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                onClick={() => onNavigate('healthscore')}
              >
                View Full Analysis →
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* AI Insights */}
        <Card className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Activity className="h-5 w-5" />
              AI Health Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-green-100 p-2 mt-1">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="mb-1 text-green-800">Great Progress!</h4>
                  <p className="text-sm text-gray-600">
                    Your consistent prescription refills have improved your HealthScore by 12 points this month.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-yellow-100 p-2 mt-1">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                </div>
                <div>
                  <h4 className="mb-1 text-yellow-800">Recommendation</h4>
                  <p className="text-sm text-gray-600">
                    Upload your recent lab results to unlock higher credit limits and better aid offers.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}