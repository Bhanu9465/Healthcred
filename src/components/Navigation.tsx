import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Home, 
  Activity, 
  Upload, 
  FileText, 
  HandHeart, 
  Menu,
  X,
  Heart,
  Wallet
} from "lucide-react";
import { useState } from "react";

interface WalletInfo {
  name: string;
  address: string;
  balance: number;
  icon: string;
}

interface NavigationProps {
  currentSection: string;
  onNavigate: (section: string) => void;
  connectedWallet: WalletInfo | null;
  onWalletConnect: () => void;
}

export function Navigation({ currentSection, onNavigate, connectedWallet, onWalletConnect }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'landing', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'healthscore', label: 'HealthScore', icon: Activity },
    { id: 'upload', label: 'Upload', icon: Upload },
    { id: 'aid', label: 'Aid & Credit', icon: HandHeart },
  ];

  const handleNavigation = (section: string) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  // Don't show navigation on landing page
  if (currentSection === 'landing') return null;

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-green-100 p-2">
              <Heart className="h-5 w-5 text-green-600" />
            </div>
            <span className="text-lg text-gray-900">HealthCred</span>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Wallet Status - Mobile */}
            {connectedWallet ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={onWalletConnect}
                className="text-green-600 hover:text-green-700 hover:bg-green-50"
              >
                <span className="text-lg mr-1">{connectedWallet.icon}</span>
                <span className="hidden sm:inline">{formatAddress(connectedWallet.address)}</span>
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={onWalletConnect}
                className="text-gray-600 hover:text-gray-700"
              >
                <Wallet className="h-4 w-4" />
              </Button>
            )}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-16 left-0 right-0 bg-white border-b border-gray-200 z-50 transform transition-transform ${
        isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentSection === item.id;
            
            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                className={`w-full justify-start ${
                  isActive 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => handleNavigation(item.id)}
              >
                <Icon className="mr-3 h-4 w-4" />
                {item.label}
                {item.id === 'healthscore' && (
                  <Badge className="ml-auto bg-green-100 text-green-800">742</Badge>
                )}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Desktop Bottom Navigation */}
      <div className="hidden lg:block fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentSection === item.id;
                
                return (
                  <Button
                    key={item.id}
                    variant={isActive ? "default" : "ghost"}
                    className={`flex flex-col items-center gap-1 h-auto py-2 px-4 ${
                      isActive 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => handleNavigation(item.id)}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-xs">{item.label}</span>
                    {item.id === 'healthscore' && isActive && (
                      <Badge className="absolute -top-1 -right-1 bg-green-100 text-green-800 text-xs px-1">
                        742
                      </Badge>
                    )}
                  </Button>
                );
              })}
            </div>
            
            {/* Wallet Status - Desktop */}
            <div className="flex items-center">
              {connectedWallet ? (
                <Button
                  variant="ghost"
                  onClick={onWalletConnect}
                  className="flex items-center gap-2 text-green-600 hover:text-green-700 hover:bg-green-50"
                >
                  <span className="text-xl">{connectedWallet.icon}</span>
                  <div className="text-left">
                    <div className="text-xs">Connected: {connectedWallet.name}</div>
                    <div className="text-xs font-mono">{formatAddress(connectedWallet.address)}</div>
                  </div>
                </Button>
              ) : (
                <Button
                  variant="outline"
                  onClick={onWalletConnect}
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  <Wallet className="mr-2 h-4 w-4" />
                  Connect Wallet
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="grid grid-cols-4 py-2">
          {navItems.slice(1).map((item) => { // Skip landing page for mobile bottom nav
            const Icon = item.icon;
            const isActive = currentSection === item.id;
            
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={`flex flex-col items-center gap-1 h-auto py-2 px-2 relative ${
                  isActive 
                    ? 'text-green-600' 
                    : 'text-gray-600'
                }`}
                onClick={() => handleNavigation(item.id)}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs">{item.label}</span>
                {item.id === 'healthscore' && (
                  <Badge className="absolute -top-1 -right-1 bg-green-100 text-green-800 text-xs px-1">
                    742
                  </Badge>
                )}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Spacer for fixed navigation */}
      <div className="h-16 lg:h-20" />
    </>
  );
}