import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { Dashboard } from "./components/Dashboard";
import { HealthRecordUpload } from "./components/HealthRecordUpload";
import { HealthScore } from "./components/HealthScore";
import { AidCredit } from "./components/AidCredit";
import { Navigation } from "./components/Navigation";
import { WalletConnect } from "./components/WalletConnect";

interface WalletInfo {
  name: string;
  address: string;
  balance: number;
  icon: string;
}

export default function App() {
  const [currentSection, setCurrentSection] = useState('landing');
  const [connectedWallet, setConnectedWallet] = useState<WalletInfo | null>(null);
  const [showWalletModal, setShowWalletModal] = useState(false);

  const handleNavigate = (section: string) => {
    if (section === 'wallet') {
      setShowWalletModal(true);
      return;
    }
    
    // Require wallet connection for certain sections
    if (['dashboard', 'upload', 'healthscore', 'aid'].includes(section) && !connectedWallet) {
      setShowWalletModal(true);
      return;
    }
    
    setCurrentSection(section);
  };

  const handleWalletConnect = (wallet: WalletInfo | null) => {
    if (wallet) {
      setConnectedWallet(wallet);
      // Auto-navigate to dashboard after successful connection
      setCurrentSection('dashboard');
    } else {
      setConnectedWallet(null);
      setCurrentSection('landing');
    }
  };

  const handleWalletModal = () => {
    setShowWalletModal(true);
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'upload':
        return <HealthRecordUpload onNavigate={handleNavigate} />;
      case 'healthscore':
        return <HealthScore onNavigate={handleNavigate} />;
      case 'aid':
        return <AidCredit onNavigate={handleNavigate} />;
      case 'records':
        return <Dashboard onNavigate={handleNavigate} />; // Placeholder - could create separate Records component
      case 'about':
        return <LandingPage onNavigate={handleNavigate} />; // Show landing with "Learn More" focus
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        currentSection={currentSection} 
        onNavigate={handleNavigate}
        connectedWallet={connectedWallet}
        onWalletConnect={handleWalletModal}
      />
      {renderCurrentSection()}
      
      <WalletConnect
        isOpen={showWalletModal}
        onClose={() => setShowWalletModal(false)}
        onWalletConnect={handleWalletConnect}
        connectedWallet={connectedWallet}
      />
    </div>
  );
}