import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  HandHeart, 
  TrendingUp, 
  Shield, 
  CheckCircle2, 
  Clock,
  DollarSign,
  Users,
  Building,
  Heart,
  CreditCard
} from "lucide-react";

interface AidCreditProps {
  onNavigate: (section: string) => void;
}

export function AidCredit({ onNavigate }: AidCreditProps) {
  const healthScore = 742;
  
  const microLoans = [
    {
      provider: "MediFund Micro",
      amount: "$2,500",
      interestRate: "4.5%",
      term: "12 months",
      eligibility: 650,
      status: "qualified",
      processing: "2-3 days",
      description: "Emergency medical expenses and prescription costs"
    },
    {
      provider: "HealthCredit Plus",
      amount: "$5,000",
      interestRate: "6.2%",
      term: "18 months",
      eligibility: 700,
      status: "qualified",
      processing: "1-2 days",
      description: "Surgical procedures and major medical treatments"
    },
    {
      provider: "CareAssist Loans",
      amount: "$1,000",
      interestRate: "8.9%",
      term: "6 months",
      eligibility: 500,
      status: "qualified",
      processing: "Same day",
      description: "Urgent medical needs and pharmacy bills"
    }
  ];

  const ngoAid = [
    {
      organization: "Global Health Foundation",
      coverage: "Up to $3,000",
      type: "Medical Bill Assistance",
      eligibility: 600,
      status: "qualified",
      requirements: "Income verification required",
      description: "Covers emergency medical procedures and hospital bills"
    },
    {
      organization: "MediCare Support Network",
      coverage: "Up to $1,500",
      type: "Prescription Aid",
      eligibility: 550,
      status: "qualified",
      requirements: "Chronic condition proof",
      description: "Monthly prescription medication assistance program"
    },
    {
      organization: "Community Health Alliance",
      coverage: "Up to $800",
      type: "Preventive Care",
      eligibility: 500,
      status: "qualified",
      requirements: "No additional requirements",
      description: "Wellness checkups and preventive health services"
    }
  ];

  const insurance = [
    {
      provider: "HealthGuard Premium",
      coverage: "Comprehensive",
      premium: "$89/month",
      deductible: "$500",
      eligibility: 700,
      status: "qualified",
      discount: "15% HealthScore discount",
      description: "Full medical, dental, and vision coverage"
    },
    {
      provider: "BasicCare Essential",
      coverage: "Basic Medical",
      premium: "$45/month",
      deductible: "$1,200",
      eligibility: 600,
      status: "qualified",
      discount: "10% HealthScore discount",
      description: "Essential medical coverage for common conditions"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "qualified": return "bg-green-100 text-green-800";
      case "review": return "bg-yellow-100 text-yellow-800";
      case "not-qualified": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const renderLoanCard = (loan: any, index: number) => (
    <Card key={index} className="border-blue-200 hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-blue-600" />
              {loan.provider}
            </CardTitle>
            <p className="text-sm text-gray-600 mt-1">{loan.description}</p>
          </div>
          <Badge className={getStatusColor(loan.status)}>
            {loan.status === "qualified" ? "✓ Qualified" : loan.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Loan Amount:</span>
            <div className="text-xl text-blue-900">{loan.amount}</div>
          </div>
          <div>
            <span className="text-gray-600">Interest Rate:</span>
            <div className="text-xl text-blue-900">{loan.interestRate}</div>
          </div>
          <div>
            <span className="text-gray-600">Term:</span>
            <div>{loan.term}</div>
          </div>
          <div>
            <span className="text-gray-600">Processing:</span>
            <div>{loan.processing}</div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>HealthScore Requirement: {loan.eligibility}</span>
            <span className="text-green-600">Your Score: {healthScore}</span>
          </div>
          <Progress value={(healthScore / loan.eligibility) * 100} className="h-2" />
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Apply Now
        </Button>
      </CardContent>
    </Card>
  );

  const renderAidCard = (aid: any, index: number) => (
    <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <HandHeart className="h-5 w-5 text-green-600" />
              {aid.organization}
            </CardTitle>
            <p className="text-sm text-gray-600 mt-1">{aid.description}</p>
          </div>
          <Badge className={getStatusColor(aid.status)}>
            {aid.status === "qualified" ? "✓ Qualified" : aid.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Coverage:</span>
            <div className="text-xl text-green-900">{aid.coverage}</div>
          </div>
          <div>
            <span className="text-gray-600">Type:</span>
            <div>{aid.type}</div>
          </div>
        </div>

        <div className="text-sm">
          <span className="text-gray-600">Requirements:</span>
          <div className="mt-1 text-gray-800">{aid.requirements}</div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>HealthScore Requirement: {aid.eligibility}</span>
            <span className="text-green-600">Your Score: {healthScore}</span>
          </div>
          <Progress value={(healthScore / aid.eligibility) * 100} className="h-2" />
        </div>

        <Button className="w-full bg-green-600 hover:bg-green-700">
          Apply for Aid
        </Button>
      </CardContent>
    </Card>
  );

  const renderInsuranceCard = (insurance: any, index: number) => (
    <Card key={index} className="border-purple-200 hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-purple-600" />
              {insurance.provider}
            </CardTitle>
            <p className="text-sm text-gray-600 mt-1">{insurance.description}</p>
          </div>
          <Badge className={getStatusColor(insurance.status)}>
            {insurance.status === "qualified" ? "✓ Qualified" : insurance.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Premium:</span>
            <div className="text-xl text-purple-900">{insurance.premium}</div>
          </div>
          <div>
            <span className="text-gray-600">Deductible:</span>
            <div>{insurance.deductible}</div>
          </div>
          <div>
            <span className="text-gray-600">Coverage:</span>
            <div>{insurance.coverage}</div>
          </div>
          <div>
            <span className="text-gray-600">Special Offer:</span>
            <div className="text-green-600">{insurance.discount}</div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>HealthScore Requirement: {insurance.eligibility}</span>
            <span className="text-green-600">Your Score: {healthScore}</span>
          </div>
          <Progress value={(healthScore / insurance.eligibility) * 100} className="h-2" />
        </div>

        <Button className="w-full bg-purple-600 hover:bg-purple-700">
          Get Quote
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="rounded-full bg-green-100 p-2">
              <HandHeart className="h-6 w-6 text-green-600" />
            </div>
            <h1 className="text-3xl text-gray-900">Aid & Credit Access</h1>
          </div>
          <p className="text-gray-600">
            Access financial assistance, micro-loans, and insurance options based on your HealthScore of {healthScore}.
          </p>
        </div>

        {/* Score Summary */}
        <Card className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardContent className="py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-green-100 p-3">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900">Your HealthScore: {healthScore}</h3>
                  <p className="text-green-600">Excellent Rating - Premium offers available</p>
                </div>
              </div>
              <Button 
                variant="outline"
                onClick={() => onNavigate('healthscore')}
              >
                View Score Details
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Micro-Loans Section */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl text-gray-900 mb-2 flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-blue-600" />
              Micro-Loans
            </h2>
            <p className="text-gray-600">Quick access to medical financing with competitive rates</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {microLoans.map(renderLoanCard)}
          </div>
        </div>

        {/* NGO Aid Section */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl text-gray-900 mb-2 flex items-center gap-2">
              <Heart className="h-6 w-6 text-green-600" />
              NGO Health Aid
            </h2>
            <p className="text-gray-600">Free assistance programs from healthcare organizations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ngoAid.map(renderAidCard)}
          </div>
        </div>

        {/* Insurance Section */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl text-gray-900 mb-2 flex items-center gap-2">
              <Shield className="h-6 w-6 text-purple-600" />
              Insurance Options
            </h2>
            <p className="text-gray-600">Preferred health insurance plans with HealthScore discounts</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insurance.map(renderInsuranceCard)}
          </div>
        </div>

        {/* How It Works */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              How HealthCred Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="rounded-full bg-blue-100 p-3 w-16 h-16 mx-auto mb-3">
                  <Building className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-blue-800 mb-2">1. Upload Records</h4>
                <p className="text-sm text-gray-600">
                  Securely upload medical documents to build your health profile
                </p>
              </div>

              <div className="text-center">
                <div className="rounded-full bg-green-100 p-3 w-16 h-16 mx-auto mb-3">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-green-800 mb-2">2. Build HealthScore</h4>
                <p className="text-sm text-gray-600">
                  AI analyzes your health behavior to calculate your credit score
                </p>
              </div>

              <div className="text-center">
                <div className="rounded-full bg-purple-100 p-3 w-16 h-16 mx-auto mb-3">
                  <CheckCircle2 className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-purple-800 mb-2">3. Access Benefits</h4>
                <p className="text-sm text-gray-600">
                  Get matched with loans, aid, and insurance based on your score
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}