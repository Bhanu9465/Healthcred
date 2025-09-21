import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { 
  TrendingUp, 
  Activity, 
  Heart, 
  CheckCircle2, 
  AlertCircle,
  Brain,
  Target,
  Calendar,
  Award,
  Lightbulb
} from "lucide-react";

interface HealthScoreProps {
  onNavigate: (section: string) => void;
}

export function HealthScore({ onNavigate }: HealthScoreProps) {
  const healthScore = 742;
  const previousScore = 698;
  const scoreChange = healthScore - previousScore;

  // Component breakdown scores
  const medicalExpenses = 85;
  const adherence = 92;
  const trustScore = 78;
  const consistency = 88;

  const getScoreColor = (score: number) => {
    if (score >= 700) return "text-green-600";
    if (score >= 500) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreGradient = (score: number) => {
    if (score >= 700) return "from-green-400 to-green-600";
    if (score >= 500) return "from-yellow-400 to-yellow-600";
    return "from-red-400 to-red-600";
  };

  const getScoreBg = (score: number) => {
    if (score >= 700) return "bg-green-50 border-green-200";
    if (score >= 500) return "bg-yellow-50 border-yellow-200";
    return "bg-red-50 border-red-200";
  };

  const renderScoreGauge = () => {
    const percentage = (healthScore / 850) * 100;
    const strokeDasharray = 2 * Math.PI * 90;
    const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;

    return (
      <div className="relative w-48 h-48 mx-auto">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
          {/* Background circle */}
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke="#e5e7eb"
            strokeWidth="12"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke="url(#gradient)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
        </svg>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className={`text-4xl ${getScoreColor(healthScore)}`}>
            {healthScore}
          </div>
          <div className="text-sm text-gray-500 mt-1">HealthScore</div>
          <div className="flex items-center gap-1 mt-2">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="text-sm text-green-600">+{scoreChange}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="rounded-full bg-blue-100 p-2">
              <Activity className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-3xl text-gray-900">HealthScore Analysis</h1>
          </div>
          <p className="text-gray-600">
            Your AI-powered health credit score based on medical expenses, adherence, and trust factors.
          </p>
        </div>

        {/* Main Score Display */}
        <Card className={`mb-8 ${getScoreBg(healthScore)}`}>
          <CardContent className="py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                {renderScoreGauge()}
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-green-600" />
                    <Badge className="bg-green-100 text-green-800">Excellent Rating</Badge>
                  </div>
                  <h2 className="text-2xl text-gray-900 mb-2">Outstanding HealthScore!</h2>
                  <p className="text-gray-600">
                    Your score of {healthScore} puts you in the top 15% of users. 
                    This excellent rating qualifies you for premium aid offers and lower interest rates.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border">
                  <h3 className="mb-3 text-gray-900">Score History</h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Previous month:</span>
                    <span className="text-gray-900">{previousScore}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Current score:</span>
                    <span className={getScoreColor(healthScore)}>{healthScore}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm border-t pt-2 mt-2">
                    <span className="text-gray-600">Improvement:</span>
                    <span className="text-green-600 flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      +{scoreChange} points
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Score Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Score Components</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm flex items-center gap-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    Medical Expenses Tracking
                  </span>
                  <span className="text-sm">{medicalExpenses}%</span>
                </div>
                <Progress value={medicalExpenses} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">
                  Consistent documentation of medical expenses
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-500" />
                    Prescription Adherence
                  </span>
                  <span className="text-sm">{adherence}%</span>
                </div>
                <Progress value={adherence} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">
                  Following prescribed medication schedules
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    Trust Score
                  </span>
                  <span className="text-sm">{trustScore}%</span>
                </div>
                <Progress value={trustScore} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">
                  Document authenticity and verification history
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm flex items-center gap-2">
                    <Target className="h-4 w-4 text-purple-500" />
                    Consistency Score
                  </span>
                  <span className="text-sm">{consistency}%</span>
                </div>
                <Progress value={consistency} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">
                  Regular health record submissions and updates
                </p>
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-blue-600" />
                AI Assistant Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="text-green-800 mb-1">Excellent Progress!</h4>
                    <p className="text-sm text-green-700">
                      Your consistent prescription refills have increased your adherence score by 8% this month.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="text-blue-800 mb-1">Boost Your Score</h4>
                    <p className="text-sm text-blue-700">
                      Upload your recent lab results to improve your trust score and unlock better aid offers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="text-yellow-800 mb-1">Optimization Tip</h4>
                    <p className="text-sm text-yellow-700">
                      Adding preventive care records could improve your overall health profile by 5-10 points.
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => onNavigate('upload')}
              >
                Upload More Records
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Score Benefits */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardHeader>
            <CardTitle>What Your Score Unlocks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="rounded-full bg-green-100 p-3 w-16 h-16 mx-auto mb-3">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-green-800 mb-2">Premium Aid Access</h4>
                <p className="text-sm text-gray-600">
                  Qualify for NGO health aid programs with faster approval times
                </p>
              </div>

              <div className="text-center">
                <div className="rounded-full bg-blue-100 p-3 w-16 h-16 mx-auto mb-3">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-blue-800 mb-2">Lower Interest Rates</h4>
                <p className="text-sm text-gray-600">
                  Access micro-loans at reduced rates up to 3% lower than standard
                </p>
              </div>

              <div className="text-center">
                <div className="rounded-full bg-purple-100 p-3 w-16 h-16 mx-auto mb-3">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-purple-800 mb-2">Insurance Benefits</h4>
                <p className="text-sm text-gray-600">
                  Preferred rates and coverage options from partner insurance providers
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button 
                className="bg-green-600 hover:bg-green-700 mr-4"
                onClick={() => onNavigate('aid')}
              >
                Browse Available Offers
              </Button>
              <Button 
                variant="outline"
                onClick={() => onNavigate('dashboard')}
              >
                Back to Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}