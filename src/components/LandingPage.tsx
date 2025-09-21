import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Shield, Heart, TrendingUp, Users, CheckCircle, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LandingPageProps {
  onNavigate: (section: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Logo/Brand */}
          <div className="mb-8 flex items-center justify-center gap-3">
            <div className="rounded-full bg-green-100 p-3">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl text-gray-900">HealthCred</h1>
          </div>

          {/* Main Headline */}
          <h2 className="mb-6 text-4xl sm:text-6xl text-gray-900 leading-tight">
            HealthCred: Trusted Digital Health & Credit Gateway
          </h2>

          {/* Description */}
          <p className="mb-8 max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
            Securely manage your health records on Cardano blockchain, build your HealthScore, 
            and access AI-powered financial assistance for medical expenses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl"
              onClick={() => onNavigate('wallet')}
            >
              Create Health Wallet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-xl"
              onClick={() => onNavigate('about')}
            >
              Learn More
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto max-w-3xl rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1757152962882-6bf8495b324d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4NDM4MDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Healthcare technology dashboard"
              className="w-full h-64 sm:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl text-gray-900 mb-4">Why Choose HealthCred?</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Revolutionary healthcare finance powered by AI and blockchain technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center border-0 shadow-lg bg-green-50">
              <div className="rounded-full bg-green-100 p-4 w-16 h-16 mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl mb-3 text-gray-900">Secure & Decentralized</h4>
              <p className="text-gray-600">
                Your health records are encrypted and stored on Cardano blockchain, 
                ensuring maximum security and privacy.
              </p>
            </Card>

            <Card className="p-6 text-center border-0 shadow-lg bg-blue-50">
              <div className="rounded-full bg-blue-100 p-4 w-16 h-16 mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl mb-3 text-gray-900">AI-Powered HealthScore</h4>
              <p className="text-gray-600">
                Build your HealthScore based on medical expenses, adherence, 
                and health behavior tracked by AI.
              </p>
            </Card>

            <Card className="p-6 text-center border-0 shadow-lg bg-purple-50">
              <div className="rounded-full bg-purple-100 p-4 w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl mb-3 text-gray-900">Access Aid & Credit</h4>
              <p className="text-gray-600">
                Get matched with micro-loans, NGO health aid, and insurance 
                options based on your HealthScore.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl text-gray-900 mb-6">Transform Your Healthcare Journey</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1 text-gray-900">Unified Health Records</h4>
                    <p className="text-gray-600">All your medical documents in one secure digital wallet</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1 text-gray-900">Smart Credit Scoring</h4>
                    <p className="text-gray-600">AI analyzes your health behavior to build your HealthScore</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1 text-gray-900">Instant Aid Access</h4>
                    <p className="text-gray-600">Get matched with financial assistance in minutes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1 text-gray-900">Blockchain Verified</h4>
                    <p className="text-gray-600">Every transaction is verified and immutable</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwbmV0d29yayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4MzkwMzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Blockchain network visualization"
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h3 className="text-3xl mb-4">Ready to Take Control of Your Health Finance?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands who are already building their HealthScore and accessing financial aid
          </p>
          <Button 
            size="lg" 
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl"
            onClick={() => onNavigate('wallet')}
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}